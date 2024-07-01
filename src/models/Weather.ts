export type WeatherType = {
  city: string;
  temperature: number;
  description: string;
  icon: string;
  moreInfoUrl: string;
};

export class Weather {
  constructor(
    public city: string,
    public temperature: number,
    public description: string,
    public icon: string,
    public moreInfoUrl: string
  ) {}
}
