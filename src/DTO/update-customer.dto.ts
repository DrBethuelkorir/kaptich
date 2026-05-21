import {createCustomerDto} from "./createcudtomer.dto";
import { PartialType } from "@nestjs/mapped-types";

export class updateCustomerDto extends PartialType(createCustomerDto) {}