export class Coffee {
  title: string;
  description: string;
  private createdAt: Date;

  constructor(data: any) {
    const { title, description, createdAt } = data;
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
  }

  getDate() {
    return this.createdAt;
  }
  getTitle() {
    return this.title;
  }
}
