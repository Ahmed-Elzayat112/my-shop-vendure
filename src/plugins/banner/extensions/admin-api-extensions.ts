import gql from "graphql-tag";

export const adminApiExtensions = gql`
  type Banner {
    id: ID!
    position: Int!
    url: String
    asset: Asset
    name: String!
    page: Int!
    translations: [BannerTranslation!]!
  }

  type BannerTranslation {
    id: ID!
    languageCode: LanguageCode!
    assetId: Int!
    url: String
    name: String!
  }

  input BannerDataInput {
    position: Int!
    page: Int!
    translations: [BannerTranslationInput!]!
  }

  input BannerTranslationInput {
    languageCode: LanguageCode!
    assetId: Int!
    url: String
    name: String!
  }

  extend type Query {
    banners: [Banner!]!
    banner(bannerId: ID!): Banner
  }

  extend type Mutation {
    createBanner(bannerData: BannerDataInput!): Banner!
    updateBanner(bannerId: ID!, bannerData: BannerDataInput!): Banner!
  }
`;
