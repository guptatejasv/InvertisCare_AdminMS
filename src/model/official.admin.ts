import { Schema, Document, model } from "mongoose";

export interface IAdmin extends Document {
  adminId: string;
  email: string;
  password: string;
  phone?: string;
  role: string;
}

const AuthSchema: Schema = new Schema(
  {
    adminId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      default: "Admin",
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export const Admin = model<IAdmin>("Admin", AuthSchema);
