interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}
class Reservations implements Reservationy {

  protected characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  protected resCode: string[] = [];
  protected dowList: string[] = ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"];

  public getDowBooking(): string {
    let day: string = this.dowList[Math.floor(Math.random() * this.dowList.length)];
    return day;
  };

  public getCodeBooking(): string {
    for (let i: number = 0; i <= 7; i++) {
      this.resCode.push(this.characters.charAt(Math.floor(Math.random() * this.characters.length)));
    }
    return this.resCode.join("");
  }

  public getReservation(): void {
    console.log((`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`));
  }
}

let test = new Reservations;

test.getReservation();