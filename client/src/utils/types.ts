export interface Pot {
  plantId: string;
  userId: string;
  potName: string;
  potMoisture: number;
  createdAt: Date;
  accessTime: number;
  growthRate: number;
  growthGauge: number;
}

export interface Plant {
  plantName: string;
  plantMoisture: number;
}

export interface User {
  userId: string;
  createdAt: Date;
  accessTime: number;
  userName: string;
}
