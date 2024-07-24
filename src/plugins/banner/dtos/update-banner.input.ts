import { InputType, Field } from "@nestjs/graphql";
import { BannerTranslationInput } from "./banner-translation.input";

@InputType()
export class UpdateBannerInput {
  @Field()
  id: number;

  @Field()
  position: number;

  @Field()
  page: number;

  @Field({ nullable: true })
  assetId: number;

  @Field(() => [BannerTranslationInput])
  translations: BannerTranslationInput[];
}