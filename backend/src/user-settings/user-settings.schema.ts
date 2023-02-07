import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserSettingsDocument = HydratedDocument<UserSetting>;

@Schema()
export class UserSetting {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  image: string;
}

export const UserSettingsSchema = SchemaFactory.createForClass(UserSetting);
