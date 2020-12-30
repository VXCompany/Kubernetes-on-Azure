export class Candidate {
  public id: number;
  public name: string;
  public avatar: string;
  public props: string[];

  constructor(id: number, name: string, avatar: string, props: string[]) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.props = props;
  }
}
