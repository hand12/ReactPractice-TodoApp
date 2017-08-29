export class Task {
  constructor(uuid, body, detail, priority, dead_line) {
    this.uuid = uuid
    this.body = body;
    this.detail = detail;
    this.priority = priority;
    this.dead_line = dead_line;
  }
}