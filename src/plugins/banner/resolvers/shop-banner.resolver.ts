import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { BannerService } from "../banner.service";
import { Banner } from "../entities/banner.entity";
import { Allow, Ctx, Permission, RequestContext } from "@vendure/core";

@Resolver()
export class ShopBannerResolver {
  constructor(private bannerService: BannerService) {}

  @Query()
  @Allow(Permission.Public)
  async banners(@Ctx() ctx: RequestContext): Promise<Banner[]> {
    console.log("-------------->", ctx.languageCode);
    const banners = await this.bannerService.getBanners(ctx);
    return banners;
  }

  @Query()
  @Allow(Permission.Public)
  async banner(
    @Args() { bannerId }: { bannerId: number },
    @Ctx() ctx: RequestContext
  ): Promise<Banner> {
    return this.bannerService.getBanner(ctx, bannerId);
  }
}
