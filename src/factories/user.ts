import { UserType } from "../User";
import { Factory } from "fishery";
import { faker } from "@faker-js/faker";

export const userFactory = Factory.define<UserType>(({ sequence }) => ({
  id: sequence,
  name: faker.name.firstName(),
}));
