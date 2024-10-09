// models/User.ts
import mongoose, { Document, Schema } from 'mongoose';

interface ISession {
  token: string;
  createdAt: Date;
}

interface ISecurityLog {
  activity: string;
  timestamp: Date;
}

interface IUser extends Document {
  name: string;
  email: string;
  phone: string
  password: string;
  sessions: ISession[];
  securityLogs: ISecurityLog[];
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  sessions: [
    {
      token: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  securityLogs: [
    {
      activity: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
