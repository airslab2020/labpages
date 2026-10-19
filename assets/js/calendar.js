(function () {
  const email = "feynmanw@xjtu.edu.cn";
  const beijingNow = () => new Date(Date.now() + 8 * 3600000).toISOString().slice(0, -1);
  const format = (s) => String(s).slice(0, 16).replace("T", " ");
  // Website announcements remain available independently of the iCloud snapshot.
  const announcedEvents = [
    {id:"tal-proposal-20261019",title:"TAL research proposal discussion / TAL科研proposal讨论",start:"2026-10-19T10:00:00+08:00",end:"2026-10-19T12:00:00+08:00",allDay:false,kind:"busy"},
    {id:"3d-detection-20261019",title:"3D Detection research project meeting / 3D Detection科研项目交流",start:"2026-10-19T16:00:00+08:00",end:"2026-10-19T17:00:00+08:00",allDay:false,kind:"busy"},
    {id:"tmc-response-20261020",title:"TMC paper response / TMC论文答复",start:"2026-10-20T10:00:00+08:00",end:"2026-10-20T20:00:00+08:00",allDay:false,kind:"busy"},
    {id:"shenzhen-conference-20261023",title:"Conference in Shenzhen / 深圳参会",start:"2026-10-23",end:"2026-10-26",allDay:true,kind:"busy"}
  ];
  function mail(event) {
    const subject = event ? `Meeting request: ${format(event.start)}` : "Meeting request with Fei Wang";
    const body = `Dear Prof. Wang,\n\nName: \nResearch topic / purpose: \nPreferred date and time (Beijing, UTC+8): ${event ? format(event.start) + " to " + format(event.end) : ""}\nExpected duration: \nOnline / in person: \n\nThank you.`;
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  window.OfficeCalendar = {
    markup: () => `
      <section class="calendar-page shell">
        <div class="calendar-heading">
          <div><p class="calendar-eyebrow">FEI WANG / OFFICE SCHEDULE</p><h1>Calendar</h1>
          <p>Beijing time <strong>UTC+8</strong> · 北京时间</p></div>
          <a class="calendar-mail" href="${mail()}">Request a meeting by email</a>
        </div>
        <section class="calendar-booking" aria-labelledby="meeting-requests-title">
          <h2 id="meeting-requests-title">Meeting requests / 预约</h2>
          <p>Usual meeting hours: <strong>10:00–21:00 (Beijing time)</strong>. Contact me by WeChat or email with your preferred time, meeting topic and expected duration. Availability depends on my schedule; a meeting is booked only after my confirmation. Blank time does not imply availability.</p>
          <p lang="zh-CN">一般可约时间为北京时间 <strong>10:00–21:00</strong>。请通过微信或邮件联系，注明时间、主题和预计时长，具体以日程安排及回复确认为准。空白时段不代表可预约。</p>
        </section>
        <div class="calendar-meta"><div class="calendar-legend"><span class="legend-busy">Busy / 已安排</span><span class="legend-open">Office hours / 可预约</span></div>
          <p id="calendar-sync" role="status">Loading schedule…</p></div>
        <p id="calendar-warning" class="calendar-warning" role="status" hidden></p>
        <div id="office-calendar" aria-label="Fei Wang public work calendar"></div>
        <p id="calendar-empty" class="calendar-empty" hidden></p>
      </section>
      <dialog id="calendar-detail" aria-labelledby="calendar-detail-title">
        <form method="dialog"><button class="calendar-close" aria-label="Close event details" title="Close">×</button></form>
        <p id="calendar-detail-type"></p><h2 id="calendar-detail-title"></h2>
        <p id="calendar-detail-time"></p><p id="calendar-detail-note"></p>
        <a id="calendar-detail-mail" class="calendar-mail">Request this time by email</a>
      </dialog>`
  };
  // app.js renders the shared shell at DOMContentLoaded, before this deferred setup.
  document.addEventListener("DOMContentLoaded", () => setTimeout(init, 0));
  function init() {
    if (document.body.dataset.page !== "calendar") return;
    const status = document.querySelector("#calendar-sync");
    const warning = document.querySelector("#calendar-warning");
    const empty = document.querySelector("#calendar-empty");
    const data = window.OfficeCalendarData;
    const warn = (message) => { warning.hidden = false; warning.textContent = message; };
    if (!window.FullCalendar) { status.textContent = "Calendar unavailable"; warn("The calendar could not load. Please contact me by email or WeChat."); return; }
    const valid = data && data.version === 1 && Array.isArray(data.events) && Number.isFinite(Date.parse(data.updatedAt));
    if (!valid) { status.textContent = "Schedule unavailable"; warn("The schedule could not be loaded. Please confirm all times by email or WeChat."); }
    else {
      status.textContent = `Synced ${new Intl.DateTimeFormat("en-GB", {timeZone:"Asia/Shanghai",dateStyle:"medium",timeStyle:"short"}).format(new Date(data.updatedAt))} (UTC+8)`;
      if (Date.now() - Date.parse(data.updatedAt) > 6 * 3600000) warn("Sync is delayed. This schedule may be outdated; please confirm by email or WeChat. / 日程同步延迟，请联系确认。");
    }
    const events = [...(valid ? data.events : []), ...announcedEvents];
    const isAvailable = (event) => event.kind === "available" && !events.some(other => other.kind !== "available" && other.start < event.end && other.end > event.start);
    const detail = document.querySelector("#calendar-detail");
    const calendar = new FullCalendar.Calendar(document.querySelector("#office-calendar"), {
      initialView: matchMedia("(max-width: 640px)").matches ? "listWeek" : "timeGridWeek",
      initialDate: beijingNow().slice(0,10),
      // All timed data is normalized to Beijing wall time by the sync script.
      // Named-zone UTC coercion keeps the same displayed time on every device.
      timeZone: "Asia/Shanghai", now: beijingNow,
      firstDay: 1, height: matchMedia("(max-width: 640px)").matches ? "auto" : 720, nowIndicator: true,
      scrollTime: "08:00:00", slotMinTime: "00:00:00", slotMaxTime: "24:00:00",
      dayMaxEvents: 3, eventMinHeight: 24, allDayText: "All day", expandRows: false,
      headerToolbar: {left:"prev,next today", center:"title", right:"timeGridWeek,dayGridMonth,listWeek"},
      buttonText: {today:"Today", week:"Week",month:"Month",list:"Agenda"},
      eventTimeFormat: {hour:"2-digit",minute:"2-digit",hour12:false},
      slotLabelFormat: {hour:"2-digit",minute:"2-digit",hour12:false},
      events: events.map(event => ({...event, backgroundColor:isAvailable(event)?"#0f766e":"#4665a6", borderColor:isAvailable(event)?"#0f766e":"#4665a6", extendedProps:{source:event}})),
      noEventsContent: valid ? "No published events in this period. / 此时段暂无公开日程。" : "Schedule unavailable. / 暂时无法读取日程。",
      datesSet(info) {
        if (!valid) return;
        const start = info.startStr.slice(0,10), end = info.endStr.slice(0,10);
        empty.hidden = events.some(e => e.start.slice(0,10) < end && e.end.slice(0,10) >= start);
        empty.textContent = start < data.rangeStart || end > data.rangeEnd ? "Outside the published date range. Please contact me for availability." : "No published events in this period. Blank time is not confirmed availability. / 暂无公开日程，空白不代表可预约。";
      },
      eventClick(info) {
        const event = info.event.extendedProps.source;
        const available = isAvailable(event) && event.end > beijingNow().slice(0,19);
        document.querySelector("#calendar-detail-title").textContent = event.title;
        document.querySelector("#calendar-detail-type").textContent = available ? "Office hours / 可预约" : "Scheduled / 已安排";
        const lastDay = event.allDay ? new Date(Date.parse(event.end + "T00:00:00Z") - 86400000).toISOString().slice(0,10) : null;
        document.querySelector("#calendar-detail-time").textContent = event.allDay ? `${event.start}${lastDay !== event.start ? " – " + lastDay : ""} · All day / 全天 · UTC+8` : `${format(event.start)} – ${format(event.end)} · UTC+8`;
        document.querySelector("#calendar-detail-note").textContent = available ? "Please request a time by email or WeChat. Confirmation is required. / 请联系预约，以回复确认为准。" : "This is a scheduled event, not an available appointment. / 此时段已有安排。";
        const link = document.querySelector("#calendar-detail-mail");
        link.hidden = !available; link.href = mail(event);
        detail.showModal();
      },
      eventDidMount(info) { info.el.title = info.event.title; }
    });
    calendar.render();
  }
})();
