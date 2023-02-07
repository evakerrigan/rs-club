import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserPreferencesDocument = HydratedDocument<UserPreference>;

export class Preference {
  @Prop()
  name: string;
  @Prop()
  isActive: boolean;
  @Prop()
  icons: string;
}

@Schema()
export class UserPreference {
  @Prop({ type: () => [Preference] })
  items: Preference[];
}

export const UserPreferencesSchema =
  SchemaFactory.createForClass(UserPreference);
