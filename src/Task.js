export class Task {
  constructor(body, detail, priority, dead_line) {
    this.body = body;
    this.detail = detail;
    this.priority = priority;
    this.dead_line = dead_line;
  }
}