export interface Pot {
  potId: string;
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
  plantId: string;
  plantName: string;
  plantMoisture: number;
}

export interface User {
  userId: string;
  createdAt: Date;
  accessTime: number;
  userName: string;
}
