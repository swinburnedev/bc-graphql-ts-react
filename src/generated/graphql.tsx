import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  DateTime: any;
  Long: any;
};

/** Add wishlist items input object */
export type AddWishlistItemsInput = {
  entityId: Scalars['Int'];
  items: Array<WishlistItemInput>;
};

/** Add wishlist items */
export type AddWishlistItemsResult = {
  __typename?: 'AddWishlistItemsResult';
  result: Wishlist;
};

/** Aggregated */
export type Aggregated = {
  __typename?: 'Aggregated';
  /** Number of available products in stock. This can be 'null' if inventory is not set orif the store's Inventory Settings disable displaying stock levels on the storefront. */
  availableToSell: Scalars['Long'];
  /** Indicates a threshold low-stock level.  This can be 'null' if the inventory warning level is not set or if the store's Inventory Settings disable displaying stock levels on the storefront. */
  warningLevel: Scalars['Int'];
};

/** Aggregated Product Inventory */
export type AggregatedInventory = {
  __typename?: 'AggregatedInventory';
  /** Number of available products in stock. This can be 'null' if inventory is not set orif the store's Inventory Settings disable displaying stock levels on the storefront. */
  availableToSell: Scalars['Int'];
  /** Indicates a threshold low-stock level. This can be 'null' if the inventory warning level is not set or if the store's Inventory Settings disable displaying stock levels on the storefront. */
  warningLevel: Scalars['Int'];
};

/** Author */
export type Author = {
  __typename?: 'Author';
  /** Author name. */
  name: Scalars['String'];
};

/** Brand */
export type Brand = Node & {
  __typename?: 'Brand';
  /** Default image for brand. */
  defaultImage?: Maybe<Image>;
  /** Id of the brand. */
  entityId: Scalars['Int'];
  /** The ID of an object */
  id: Scalars['ID'];
  /**
   * Meta description for the brand.
   * @deprecated Use SEO details instead.
   */
  metaDesc: Scalars['String'];
  /**
   * Meta keywords for the brand.
   * @deprecated Use SEO details instead.
   */
  metaKeywords: Array<Scalars['String']>;
  /** Metafield data related to a brand. */
  metafields: MetafieldConnection;
  /** Name of the brand. */
  name: Scalars['String'];
  /**
   * Page title for the brand.
   * @deprecated Use SEO details instead.
   */
  pageTitle: Scalars['String'];
  /** Path for the brand page. */
  path: Scalars['String'];
  products: ProductConnection;
  /** Search keywords for the brand. */
  searchKeywords: Array<Scalars['String']>;
  /** Brand SEO details. */
  seo: SeoDetails;
};


/** Brand */
export type BrandMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  keys?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  namespace: Scalars['String'];
};


/** Brand */
export type BrandProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  hideOutOfStock?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type BrandConnection = {
  __typename?: 'BrandConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BrandEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BrandEdge = {
  __typename?: 'BrandEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Brand;
};

/** Brand Filter */
export type BrandSearchFilter = SearchProductFilter & {
  __typename?: 'BrandSearchFilter';
  /** List of available brands. */
  brands: BrandSearchFilterItemConnection;
  /** Indicates whether to display product count next to the filter. */
  displayProductCount: Scalars['Boolean'];
  /** Indicates whether filter is collapsed by default. */
  isCollapsedByDefault: Scalars['Boolean'];
  /** Display name for the filter. */
  name: Scalars['String'];
};


/** Brand Filter */
export type BrandSearchFilterBrandsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Specific brand filter item */
export type BrandSearchFilterItem = {
  __typename?: 'BrandSearchFilterItem';
  /** Brand ID. */
  entityId: Scalars['Int'];
  /** Indicates whether brand is selected. */
  isSelected: Scalars['Boolean'];
  /** Brand name. */
  name: Scalars['String'];
  /** Indicates how many products available for this filter. */
  productCount: Scalars['Int'];
};

/** A connection to a list of items. */
export type BrandSearchFilterItemConnection = {
  __typename?: 'BrandSearchFilterItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BrandSearchFilterItemEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BrandSearchFilterItemEdge = {
  __typename?: 'BrandSearchFilterItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: BrandSearchFilterItem;
};

/** Breadcrumb */
export type Breadcrumb = {
  __typename?: 'Breadcrumb';
  /** Category id. */
  entityId: Scalars['Int'];
  /** Name of the category. */
  name: Scalars['String'];
};

/** A connection to a list of items. */
export type BreadcrumbConnection = {
  __typename?: 'BreadcrumbConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BreadcrumbEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BreadcrumbEdge = {
  __typename?: 'BreadcrumbEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Breadcrumb;
};

/** Bulk pricing tier that sets a fixed price for the product or variant. */
export type BulkPricingFixedPriceDiscount = BulkPricingTier & {
  __typename?: 'BulkPricingFixedPriceDiscount';
  /** Maximum item quantity that applies to this bulk pricing tier - if not defined then the tier does not have an upper bound. */
  maximumQuantity?: Maybe<Scalars['Int']>;
  /** Minimum item quantity that applies to this bulk pricing tier. */
  minimumQuantity: Scalars['Int'];
  /** This price will override the current product price. */
  price: Scalars['BigDecimal'];
};

/** Bulk pricing tier that reduces the price of the product or variant by a percentage. */
export type BulkPricingPercentageDiscount = BulkPricingTier & {
  __typename?: 'BulkPricingPercentageDiscount';
  /** Maximum item quantity that applies to this bulk pricing tier - if not defined then the tier does not have an upper bound. */
  maximumQuantity?: Maybe<Scalars['Int']>;
  /** Minimum item quantity that applies to this bulk pricing tier. */
  minimumQuantity: Scalars['Int'];
  /** The percentage that will be removed from the product price. */
  percentOff: Scalars['BigDecimal'];
};

/** Bulk pricing tier that will subtract an amount from the price of the product or variant. */
export type BulkPricingRelativePriceDiscount = BulkPricingTier & {
  __typename?: 'BulkPricingRelativePriceDiscount';
  /** Maximum item quantity that applies to this bulk pricing tier - if not defined then the tier does not have an upper bound. */
  maximumQuantity?: Maybe<Scalars['Int']>;
  /** Minimum item quantity that applies to this bulk pricing tier. */
  minimumQuantity: Scalars['Int'];
  /** The price of the product/variant will be reduced by this priceAdjustment. */
  priceAdjustment: Scalars['BigDecimal'];
};

/** A set of bulk pricing tiers that define price discounts which apply when purchasing specified quantities of a product or variant. */
export type BulkPricingTier = {
  /** Maximum item quantity that applies to this bulk pricing tier - if not defined then the tier does not have an upper bound. */
  maximumQuantity?: Maybe<Scalars['Int']>;
  /** Minimum item quantity that applies to this bulk pricing tier. */
  minimumQuantity: Scalars['Int'];
};

/** Product Option */
export type CatalogProductOption = {
  /** Display name for the option. */
  displayName: Scalars['String'];
  /** Unique ID for the option. */
  entityId: Scalars['Int'];
  /** One of the option values is required to be selected for the checkout. */
  isRequired: Scalars['Boolean'];
  /** Indicates whether it is a variant option or modifier. */
  isVariantOption: Scalars['Boolean'];
};

/** Product Option Value */
export type CatalogProductOptionValue = {
  /** Unique ID for the option value. */
  entityId: Scalars['Int'];
  /** Indicates whether this value is the chosen default selected value. */
  isDefault: Scalars['Boolean'];
  /** Label for the option value. */
  label: Scalars['String'];
};

/** Category */
export type Category = Node & {
  __typename?: 'Category';
  /** Category breadcrumbs. */
  breadcrumbs: BreadcrumbConnection;
  /** Default image for the category. */
  defaultImage?: Maybe<Image>;
  /** Category default product sort. */
  defaultProductSort?: Maybe<CategoryProductSort>;
  /** Category description. */
  description: Scalars['String'];
  /** Unique ID for the category. */
  entityId: Scalars['Int'];
  /** The ID of an object */
  id: Scalars['ID'];
  /** Metafield data related to a category. */
  metafields: MetafieldConnection;
  /** Category name. */
  name: Scalars['String'];
  /** Category path. */
  path: Scalars['String'];
  products: ProductConnection;
  /** Category SEO details. */
  seo: SeoDetails;
  /** @deprecated Alpha version. Do not use in production. */
  shopByPriceRanges: ShopByPriceConnection;
};


/** Category */
export type CategoryBreadcrumbsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  depth: Scalars['Int'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Category */
export type CategoryMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  keys?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  namespace: Scalars['String'];
};


/** Category */
export type CategoryProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  hideOutOfStock?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<CategoryProductSort>;
};


/** Category */
export type CategoryShopByPriceRangesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<CurrencyCode>;
  first?: InputMaybe<Scalars['Int']>;
  includeTax?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CategoryEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Category;
};

/** Product sorting by categories. */
export enum CategoryProductSort {
  AToZ = 'A_TO_Z',
  BestReviewed = 'BEST_REVIEWED',
  BestSelling = 'BEST_SELLING',
  Default = 'DEFAULT',
  Featured = 'FEATURED',
  HighestPrice = 'HIGHEST_PRICE',
  LowestPrice = 'LOWEST_PRICE',
  Newest = 'NEWEST',
  ZToA = 'Z_TO_A'
}

/** Category Filter */
export type CategorySearchFilter = SearchProductFilter & {
  __typename?: 'CategorySearchFilter';
  /** List of available categories. */
  categories: CategorySearchFilterItemConnection;
  /** Indicates whether to display product count next to the filter. */
  displayProductCount: Scalars['Boolean'];
  /** Indicates whether filter is collapsed by default. */
  isCollapsedByDefault: Scalars['Boolean'];
  /** Display name for the filter. */
  name: Scalars['String'];
};


/** Category Filter */
export type CategorySearchFilterCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Specific category filter item */
export type CategorySearchFilterItem = {
  __typename?: 'CategorySearchFilterItem';
  /** Category ID. */
  entityId: Scalars['Int'];
  /** Indicates whether category is selected. */
  isSelected: Scalars['Boolean'];
  /** Category name. */
  name: Scalars['String'];
  /** Indicates how many products available for this filter. */
  productCount: Scalars['Int'];
  /** List of available sub-categories. */
  subCategories: SubCategorySearchFilterItemConnection;
};


/** Specific category filter item */
export type CategorySearchFilterItemSubCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type CategorySearchFilterItemConnection = {
  __typename?: 'CategorySearchFilterItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CategorySearchFilterItemEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CategorySearchFilterItemEdge = {
  __typename?: 'CategorySearchFilterItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CategorySearchFilterItem;
};

/** An item in a tree of categories. */
export type CategoryTreeItem = {
  __typename?: 'CategoryTreeItem';
  /** Subcategories of this category */
  children: Array<CategoryTreeItem>;
  /** The description of this category. */
  description: Scalars['String'];
  /** The id category. */
  entityId: Scalars['Int'];
  /** The category image. */
  image?: Maybe<Image>;
  /** The name of category. */
  name: Scalars['String'];
  /** Path assigned to this category */
  path: Scalars['String'];
  /** The number of products in this category. */
  productCount: Scalars['Int'];
};

/** The Channel */
export type Channel = {
  __typename?: 'Channel';
  /** The ID of the channel. */
  entityId: Scalars['Long'];
  /** Metafield data related to a channel. */
  metafields: MetafieldConnection;
};


/** The Channel */
export type ChannelMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  keys?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  namespace: Scalars['String'];
};

/** A simple yes/no question represented by a checkbox. */
export type CheckboxOption = CatalogProductOption & {
  __typename?: 'CheckboxOption';
  /** Indicates the default checked status. */
  checkedByDefault: Scalars['Boolean'];
  /** Display name for the option. */
  displayName: Scalars['String'];
  /** Unique ID for the option. */
  entityId: Scalars['Int'];
  /** One of the option values is required to be selected for the checkout. */
  isRequired: Scalars['Boolean'];
  /** Indicates whether it is a variant option or modifier. */
  isVariantOption: Scalars['Boolean'];
  /** Label of the checkbox option. */
  label: Scalars['String'];
};

/** Contact field */
export type ContactField = {
  __typename?: 'ContactField';
  /** Store address line. */
  address: Scalars['String'];
  /** Store address type. */
  addressType: Scalars['String'];
  /** Store country. */
  country: Scalars['String'];
  /** Store email. */
  email: Scalars['String'];
  /** Store phone number. */
  phone: Scalars['String'];
};

/** The page content. */
export type Content = {
  __typename?: 'Content';
  renderedRegionsByPageType: RenderedRegionsByPageType;
  renderedRegionsByPageTypeAndEntityId: RenderedRegionsByPageType;
};


/** The page content. */
export type ContentRenderedRegionsByPageTypeArgs = {
  pageType: PageType;
};


/** The page content. */
export type ContentRenderedRegionsByPageTypeAndEntityIdArgs = {
  entityId: Scalars['Long'];
  entityPageType: EntityPageType;
};

/** Create wishlist input object */
export type CreateWishlistInput = {
  isPublic: Scalars['Boolean'];
  items?: InputMaybe<Array<WishlistItemInput>>;
  name: Scalars['String'];
};

/** Create wishlist */
export type CreateWishlistResult = {
  __typename?: 'CreateWishlistResult';
  result: Wishlist;
};

export type Currency = {
  __typename?: 'Currency';
  /** Currency code. */
  code: CurrencyCode;
  /** Currency display settings. */
  display: CurrencyDisplay;
  /** Currency ID. */
  entityId: Scalars['Int'];
  /** Exchange rate relative to default currency. */
  exchangeRate: Scalars['Float'];
  /** Flag image URL. */
  flagImage?: Maybe<Scalars['String']>;
  /** Indicates whether this currency is active. */
  isActive: Scalars['Boolean'];
  /** Indicates whether this currency is transactional. */
  isTransactional: Scalars['Boolean'];
  /** Currency name. */
  name: Scalars['String'];
};

/** A connection to a list of items. */
export type CurrencyConnection = {
  __typename?: 'CurrencyConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CurrencyEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CurrencyDisplay = {
  __typename?: 'CurrencyDisplay';
  /** Currency decimal places. */
  decimalPlaces: Scalars['Int'];
  /** Currency decimal token. */
  decimalToken: Scalars['String'];
  /** Currency symbol. */
  symbol: Scalars['String'];
  /** Currency symbol. */
  symbolPlacement: CurrencySymbolPosition;
  /** Currency thousands token. */
  thousandsToken: Scalars['String'];
};

/** An edge in a connection. */
export type CurrencyEdge = {
  __typename?: 'CurrencyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Currency;
};

/** Currency symbol position */
export enum CurrencySymbolPosition {
  Left = 'LEFT',
  Right = 'RIGHT'
}

/** Custom field */
export type CustomField = {
  __typename?: 'CustomField';
  /** Custom field id. */
  entityId: Scalars['Int'];
  /** Name of the custom field. */
  name: Scalars['String'];
  /** Value of the custom field. */
  value: Scalars['String'];
};

/** A connection to a list of items. */
export type CustomFieldConnection = {
  __typename?: 'CustomFieldConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CustomFieldEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CustomFieldEdge = {
  __typename?: 'CustomFieldEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CustomField;
};

/** A customer that shops on a store */
export type Customer = {
  __typename?: 'Customer';
  /** Customer addresses count. */
  addressCount: Scalars['Int'];
  /** Customer attributes count. */
  attributeCount: Scalars['Int'];
  /** Customer attributes. */
  attributes: CustomerAttributes;
  /** The company name of the customer. */
  company: Scalars['String'];
  /** The customer group id of the customer. */
  customerGroupId: Scalars['Int'];
  /** The email address of the customer. */
  email: Scalars['String'];
  /** The ID of the customer. */
  entityId: Scalars['Int'];
  /** The first name of the customer. */
  firstName: Scalars['String'];
  /** The last name of the customer. */
  lastName: Scalars['String'];
  /** The notes of the customer. */
  notes: Scalars['String'];
  /** The phone number of the customer. */
  phone: Scalars['String'];
  /** Customer store credit. */
  storeCredit: Array<Money>;
  /** The tax exempt category of the customer. */
  taxExemptCategory: Scalars['String'];
  wishlists: WishlistConnection;
};


/** A customer that shops on a store */
export type CustomerWishlistsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<WishlistFiltersInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A custom, store-specific attribute for a customer */
export type CustomerAttribute = {
  __typename?: 'CustomerAttribute';
  /** The ID of the custom customer attribute */
  entityId: Scalars['Int'];
  /** The name of the custom customer attribute */
  name: Scalars['String'];
  /** The value of the custom customer attribute */
  value?: Maybe<Scalars['String']>;
};

/** Custom, store-specific customer attributes */
export type CustomerAttributes = {
  __typename?: 'CustomerAttributes';
  attribute: CustomerAttribute;
};


/** Custom, store-specific customer attributes */
export type CustomerAttributesAttributeArgs = {
  entityId: Scalars['Int'];
};

/** A calendar for allowing selection of a date. */
export type DateFieldOption = CatalogProductOption & {
  __typename?: 'DateFieldOption';
  /** The default timestamp of date option. */
  defaultValue?: Maybe<Scalars['DateTime']>;
  /** Display name for the option. */
  displayName: Scalars['String'];
  /** The earliest timestamp of date option. */
  earliest?: Maybe<Scalars['DateTime']>;
  /** Unique ID for the option. */
  entityId: Scalars['Int'];
  /** One of the option values is required to be selected for the checkout. */
  isRequired: Scalars['Boolean'];
  /** Indicates whether it is a variant option or modifier. */
  isVariantOption: Scalars['Boolean'];
  /** The latest timestamp of date option. */
  latest?: Maybe<Scalars['DateTime']>;
  /** Limit date by */
  limitDateBy: LimitDateOption;
};

/** Date Time Extended */
export type DateTimeExtended = {
  __typename?: 'DateTimeExtended';
  /** ISO-8601 formatted date in UTC */
  utc: Scalars['DateTime'];
};

/** Delete wishlist items input object */
export type DeleteWishlistItemsInput = {
  entityId: Scalars['Int'];
  itemEntityIds: Array<Scalars['Int']>;
};

/** Delete wishlist items */
export type DeleteWishlistItemsResult = {
  __typename?: 'DeleteWishlistItemsResult';
  result: Wishlist;
};

/** Delete wishlist */
export type DeleteWishlistResult = {
  __typename?: 'DeleteWishlistResult';
  result: Scalars['String'];
};

/** Delete wishlists input object */
export type DeleteWishlistsInput = {
  entityIds: Array<Scalars['Int']>;
};

/** Display field */
export type DisplayField = {
  __typename?: 'DisplayField';
  /** Extended date format. */
  extendedDateFormat: Scalars['String'];
  /** Short date format. */
  shortDateFormat: Scalars['String'];
};

/** Distance */
export type Distance = {
  __typename?: 'Distance';
  /** Length unit */
  lengthUnit: LengthUnit;
  /** Distance in specified length unit */
  value: Scalars['Float'];
};

/** Filter locations by the distance */
export type DistanceFilter = {
  /** Signed decimal degrees without compass direction */
  latitude: Scalars['Float'];
  lengthUnit: LengthUnit;
  /** Signed decimal degrees without compass direction */
  longitude: Scalars['Float'];
  /** Radius of search in length units specified in lengthUnit argument */
  radius: Scalars['Float'];
};

/** Entity page type */
export enum EntityPageType {
  BlogPost = 'BLOG_POST',
  Brand = 'BRAND',
  Category = 'CATEGORY',
  ContactUs = 'CONTACT_US',
  Page = 'PAGE',
  Product = 'PRODUCT'
}

/** A form allowing selection and uploading of a file from the user's local computer. */
export type FileUploadFieldOption = CatalogProductOption & {
  __typename?: 'FileUploadFieldOption';
  /** Display name for the option. */
  displayName: Scalars['String'];
  /** Unique ID for the option. */
  entityId: Scalars['Int'];
  /** All possible file extensions. Empty means that all files allowed. */
  fileTypes: Array<Scalars['String']>;
  /** One of the option values is required to be selected for the checkout. */
  isRequired: Scalars['Boolean'];
  /** Indicates whether it is a variant option or modifier. */
  isVariantOption: Scalars['Boolean'];
  /** The maximum size of the file in kilobytes */
  maxFileSize: Scalars['Int'];
};

/** Gift wrapping for product */
export type GiftWrapping = {
  __typename?: 'GiftWrapping';
  /** Indicates whether commenting is allowed for the gift wrapping. */
  allowComments: Scalars['Boolean'];
  /** Gift wrapping id. */
  entityId: Scalars['Int'];
  /** Gift wrapping name. */
  name: Scalars['String'];
  /** Gift wrapping preview image url. */
  previewImageUrl?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type GiftWrappingConnection = {
  __typename?: 'GiftWrappingConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GiftWrappingEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type GiftWrappingEdge = {
  __typename?: 'GiftWrappingEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: GiftWrapping;
};

/** Image */
export type Image = {
  __typename?: 'Image';
  /** Text description of an image that can be used for SEO and/or accessibility purposes. */
  altText: Scalars['String'];
  /** Indicates whether this is the primary image. */
  isDefault: Scalars['Boolean'];
  /** Absolute path to image using store CDN. */
  url: Scalars['String'];
  /** Absolute path to original image using store CDN. */
  urlOriginal: Scalars['String'];
};


/** Image */
export type ImageUrlArgs = {
  height?: InputMaybe<Scalars['Int']>;
  width: Scalars['Int'];
};

/** A connection to a list of items. */
export type ImageConnection = {
  __typename?: 'ImageConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ImageEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ImageEdge = {
  __typename?: 'ImageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Image;
};

/** An inventory */
export type Inventory = {
  __typename?: 'Inventory';
  /** Locations */
  locations: LocationConnection;
};


/** An inventory */
export type InventoryLocationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  cities?: InputMaybe<Array<Scalars['String']>>;
  codes?: InputMaybe<Array<Scalars['String']>>;
  countryCodes?: InputMaybe<Array<CountryCode>>;
  distanceFilter?: InputMaybe<DistanceFilter>;
  entityIds?: InputMaybe<Array<Scalars['Int']>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  serviceTypeIds?: InputMaybe<Array<Scalars['String']>>;
  states?: InputMaybe<Array<Scalars['String']>>;
  typeIds?: InputMaybe<Array<Scalars['String']>>;
};

/** Inventory By Locations */
export type InventoryByLocations = {
  __typename?: 'InventoryByLocations';
  /** Number of available products in stock. */
  availableToSell: Scalars['Long'];
  /** Indicates whether this product is in stock. */
  isInStock: Scalars['Boolean'];
  /** Distance between location and specified longitude and latitude */
  locationDistance?: Maybe<Distance>;
  /** Location code. */
  locationEntityCode: Scalars['String'];
  /** Location id. */
  locationEntityId: Scalars['Long'];
  /**
   * Location service type ids.
   * @deprecated Deprecated. Will be substituted with pickup methods.
   */
  locationEntityServiceTypeIds: Array<Scalars['String']>;
  /** Location type id. */
  locationEntityTypeId?: Maybe<Scalars['String']>;
  /** Indicates a threshold low-stock level. */
  warningLevel: Scalars['Int'];
};

/** Inventory settings from control panel. */
export type InventorySettings = {
  __typename?: 'InventorySettings';
  /** Out of stock message. */
  defaultOutOfStockMessage: Scalars['String'];
  /** Flag to show or not on product filtering when option is out of stock */
  hideInProductFiltering: Scalars['Boolean'];
  /** The option out of stock behavior. */
  optionOutOfStockBehavior?: Maybe<OptionOutOfStockBehavior>;
  /** The product out of stock behavior. */
  productOutOfStockBehavior?: Maybe<ProductOutOfStockBehavior>;
  /** Hide or show inventory node for product */
  stockLevelDisplay?: Maybe<StockLevelDisplay>;
};

/** length unit */
export enum LengthUnit {
  Kilometres = 'Kilometres',
  Miles = 'Miles'
}

export enum LimitDateOption {
  EarliestDate = 'EARLIEST_DATE',
  LatestDate = 'LATEST_DATE',
  NoLimit = 'NO_LIMIT',
  Range = 'RANGE'
}

export enum LimitInputBy {
  HighestValue = 'HIGHEST_VALUE',
  LowestValue = 'LOWEST_VALUE',
  NoLimit = 'NO_LIMIT',
  Range = 'RANGE'
}

/** A connection to a list of items. */
export type LocationConnection = {
  __typename?: 'LocationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LocationEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LocationEdge = {
  __typename?: 'LocationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: InventoryByLocations;
};

/** Login result */
export type LoginResult = {
  __typename?: 'LoginResult';
  /** The currently logged in customer. */
  customer?: Maybe<Customer>;
  /**
   * The result of a login
   * @deprecated Use customer node instead.
   */
  result: Scalars['String'];
};

/** Logo field */
export type LogoField = {
  __typename?: 'LogoField';
  /** Store logo image. */
  image: Image;
  /** Logo title. */
  title: Scalars['String'];
};

/** Logout result */
export type LogoutResult = {
  __typename?: 'LogoutResult';
  /** The result of a logout */
  result: Scalars['String'];
};

/** Measurement */
export type Measurement = {
  __typename?: 'Measurement';
  /** Unit of measurement. */
  unit: Scalars['String'];
  /** Unformatted weight measurement value. */
  value: Scalars['Float'];
};

/** A connection to a list of items. */
export type MetafieldConnection = {
  __typename?: 'MetafieldConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MetafieldEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MetafieldEdge = {
  __typename?: 'MetafieldEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Metafields;
};

/** Key/Value pairs of data attached tied to a resource entity (product, brand, category, etc.) */
export type Metafields = {
  __typename?: 'Metafields';
  /** The ID of the metafield when referencing via our backend API. */
  entityId: Scalars['Int'];
  /** The ID of an object */
  id: Scalars['ID'];
  /** A label for identifying a metafield data value. */
  key: Scalars['String'];
  /** A metafield value. */
  value: Scalars['String'];
};

/** A money object - includes currency code and a money amount */
export type Money = {
  __typename?: 'Money';
  /** Currency code of the current money. */
  currencyCode: Scalars['String'];
  /** The amount of money. */
  value: Scalars['BigDecimal'];
};

/** A min and max pair of money objects */
export type MoneyRange = {
  __typename?: 'MoneyRange';
  /** Maximum money object. */
  max: Money;
  /** Minimum money object. */
  min: Money;
};

/** A multi-line text input field, aka a text box. */
export type MultiLineTextFieldOption = CatalogProductOption & {
  __typename?: 'MultiLineTextFieldOption';
  /** Default value of the multiline text field option. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Display name for the option. */
  displayName: Scalars['String'];
  /** Unique ID for the option. */
  entityId: Scalars['Int'];
  /** One of the option values is required to be selected for the checkout. */
  isRequired: Scalars['Boolean'];
  /** Indicates whether it is a variant option or modifier. */
  isVariantOption: Scalars['Boolean'];
  /** The maximum number of characters. */
  maxLength?: Maybe<Scalars['Int']>;
  /** The maximum number of lines. */
  maxLines?: Maybe<Scalars['Int']>;
  /** The minimum number of characters. */
  minLength?: Maybe<Scalars['Int']>;
};

/** An option type that has a fixed list of values. */
export type MultipleChoiceOption = CatalogProductOption & {
  __typename?: 'MultipleChoiceOption';
  /** Display name for the option. */
  displayName: Scalars['String'];
  /** The chosen display style for this multiple choice option. */
  displayStyle: Scalars['String'];
  /** Unique ID for the option. */
  entityId: Scalars['Int'];
  /** One of the option values is required to be selected for the checkout. */
  isRequired: Scalars['Boolean'];
  /** Indicates whether it is a variant option or modifier. */
  isVariantOption: Scalars['Boolean'];
  /** List of option values. */
  values: ProductOptionValueConnection;
};


/** An option type that has a fixed list of values. */
export type MultipleChoiceOptionValuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A simple multiple choice value comprised of an id and a label. */
export type MultipleChoiceOptionValue = CatalogProductOptionValue & {
  __typename?: 'MultipleChoiceOptionValue';
  /** Unique ID for the option value. */
  entityId: Scalars['Int'];
  /** Indicates whether this value is the chosen default selected value. */
  isDefault: Scalars['Boolean'];
  /** Label for the option value. */
  label: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginResult;
  logout: LogoutResult;
  /** The wishlist mutations. */
  wishlist: WishlistMutations;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

/** A single line text input field that only accepts numbers. */
export type NumberFieldOption = CatalogProductOption & {
  __typename?: 'NumberFieldOption';
  /** Default value of the text field option. */
  defaultValue?: Maybe<Scalars['Float']>;
  /** Display name for the option. */
  displayName: Scalars['String'];
  /** Unique ID for the option. */
  entityId: Scalars['Int'];
  /** The top limit of possible numbers. */
  highest?: Maybe<Scalars['Float']>;
  /** Allow whole numbers only. */
  isIntegerOnly: Scalars['Boolean'];
  /** One of the option values is required to be selected for the checkout. */
  isRequired: Scalars['Boolean'];
  /** Indicates whether it is a variant option or modifier. */
  isVariantOption: Scalars['Boolean'];
  /** Limit numbers by several options. */
  limitNumberBy: LimitInputBy;
  /** The bottom limit of possible numbers. */
  lowest?: Maybe<Scalars['Float']>;
};

/** A connection to a list of items. */
export type OptionConnection = {
  __typename?: 'OptionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OptionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OptionEdge = {
  __typename?: 'OptionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ProductOption;
};

/** Behavior of the variant when stock is equal to 0 */
export enum OptionOutOfStockBehavior {
  DoNothing = 'DO_NOTHING',
  HideOption = 'HIDE_OPTION',
  LabelOption = 'LABEL_OPTION'
}

/** A connection to a list of items. */
export type OptionValueConnection = {
  __typename?: 'OptionValueConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OptionValueEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OptionValueEdge = {
  __typename?: 'OptionValueEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ProductOptionValue;
};

export type OptionValueId = {
  optionEntityId: Scalars['Int'];
  valueEntityId: Scalars['Int'];
};

/** Other Filter */
export type OtherSearchFilter = SearchProductFilter & {
  __typename?: 'OtherSearchFilter';
  /** Indicates whether to display product count next to the filter. */
  displayProductCount: Scalars['Boolean'];
  /** Free shipping filter. */
  freeShipping?: Maybe<OtherSearchFilterItem>;
  /** Indicates whether filter is collapsed by default. */
  isCollapsedByDefault: Scalars['Boolean'];
  /** Is Featured filter. */
  isFeatured?: Maybe<OtherSearchFilterItem>;
  /** Is In Stock filter. */
  isInStock?: Maybe<OtherSearchFilterItem>;
  /** Display name for the filter. */
  name: Scalars['String'];
};

/** Other Filter Item */
export type OtherSearchFilterItem = {
  __typename?: 'OtherSearchFilterItem';
  /** Indicates whether this filter is selected. */
  isSelected: Scalars['Boolean'];
  /** Indicates how many products available for this filter. */
  productCount: Scalars['Int'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Page type */
export enum PageType {
  AccountAddress = 'ACCOUNT_ADDRESS',
  AccountAddAddress = 'ACCOUNT_ADD_ADDRESS',
  AccountAddReturn = 'ACCOUNT_ADD_RETURN',
  AccountAddWishlist = 'ACCOUNT_ADD_WISHLIST',
  AccountDownloadItem = 'ACCOUNT_DOWNLOAD_ITEM',
  AccountEdit = 'ACCOUNT_EDIT',
  AccountInbox = 'ACCOUNT_INBOX',
  AccountOrdersAll = 'ACCOUNT_ORDERS_ALL',
  AccountOrdersCompleted = 'ACCOUNT_ORDERS_COMPLETED',
  AccountOrdersDetails = 'ACCOUNT_ORDERS_DETAILS',
  AccountOrdersInvoice = 'ACCOUNT_ORDERS_INVOICE',
  AccountRecentItems = 'ACCOUNT_RECENT_ITEMS',
  AccountReturns = 'ACCOUNT_RETURNS',
  AccountReturnSaved = 'ACCOUNT_RETURN_SAVED',
  AccountWishlists = 'ACCOUNT_WISHLISTS',
  AccountWishlistDetails = 'ACCOUNT_WISHLIST_DETAILS',
  AuthAccountCreated = 'AUTH_ACCOUNT_CREATED',
  AuthCreateAcc = 'AUTH_CREATE_ACC',
  AuthForgotPass = 'AUTH_FORGOT_PASS',
  AuthLogin = 'AUTH_LOGIN',
  AuthNewPass = 'AUTH_NEW_PASS',
  Blog = 'BLOG',
  Brands = 'BRANDS',
  Cart = 'CART',
  Compare = 'COMPARE',
  GiftCertBalance = 'GIFT_CERT_BALANCE',
  GiftCertPurchase = 'GIFT_CERT_PURCHASE',
  GiftCertRedeem = 'GIFT_CERT_REDEEM',
  Home = 'HOME',
  OrderInfo = 'ORDER_INFO',
  Search = 'SEARCH',
  Sitemap = 'SITEMAP',
  Subscribed = 'SUBSCRIBED',
  Unsubscribe = 'UNSUBSCRIBE'
}

/** The min and max range of prices that apply to this product. */
export type PriceRanges = {
  __typename?: 'PriceRanges';
  /** Product price min/max range. */
  priceRange: MoneyRange;
  /** Product retail price min/max range. */
  retailPriceRange?: Maybe<MoneyRange>;
};

/** Price Filter */
export type PriceSearchFilter = SearchProductFilter & {
  __typename?: 'PriceSearchFilter';
  /** Indicates whether filter is collapsed by default. */
  isCollapsedByDefault: Scalars['Boolean'];
  /** Display name for the filter. */
  name: Scalars['String'];
  /** Selected price filters. */
  selected?: Maybe<PriceSearchFilterItem>;
};

export type PriceSearchFilterInput = {
  maxPrice?: InputMaybe<Scalars['Float']>;
  minPrice?: InputMaybe<Scalars['Float']>;
};

/** Price filter range */
export type PriceSearchFilterItem = {
  __typename?: 'PriceSearchFilterItem';
  /** Maximum price of the product. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Minimum price of the product. */
  minPrice?: Maybe<Scalars['Float']>;
};

/** The various prices that can be set on a product. */
export type Prices = {
  __typename?: 'Prices';
  /** Original price of the product. */
  basePrice?: Maybe<Money>;
  /** List of bulk pricing tiers applicable to a product or variant. */
  bulkPricing: Array<BulkPricingTier>;
  /** Minimum advertised price of the product. */
  mapPrice?: Maybe<Money>;
  /** Calculated price of the product.  Calculated price takes into account basePrice, salePrice, rules (modifier, option, option set) that apply to the product configuration, and customer group discounts.  It represents the in-cart price for a product configuration without bulk pricing rules. */
  price: Money;
  /** Product price min/max range. */
  priceRange: MoneyRange;
  /** Retail price of the product. */
  retailPrice?: Maybe<Money>;
  /** Product retail price min/max range. */
  retailPriceRange?: Maybe<MoneyRange>;
  /** Sale price of the product. */
  salePrice?: Maybe<Money>;
  /** The difference between the retail price (MSRP) and the current price, which can be presented to the shopper as their savings. */
  saved?: Maybe<Money>;
};

/** Product */
export type Product = Node & {
  __typename?: 'Product';
  /** Absolute URL path for adding a product to cart. */
  addToCartUrl: Scalars['String'];
  /**
   * Absolute URL path for adding a product to customer's wishlist.
   * @deprecated Deprecated.
   */
  addToWishlistUrl: Scalars['String'];
  /**
   * The availability state of the product.
   * @deprecated Use status inside availabilityV2 instead.
   */
  availability: Scalars['String'];
  /**
   * A few words telling the customer how long it will normally take to ship this product, such as 'Usually ships in 24 hours'.
   * @deprecated Use description inside availabilityV2 instead.
   */
  availabilityDescription: Scalars['String'];
  /** The availability state of the product. */
  availabilityV2: ProductAvailability;
  /** Brand associated with the product. */
  brand?: Maybe<Brand>;
  /** List of categories associated with the product. */
  categories: CategoryConnection;
  /** Product condition */
  condition?: Maybe<ProductConditionType>;
  /**
   * Product creation date
   * @deprecated Alpha version. Do not use in production.
   */
  createdAt: DateTimeExtended;
  /** Custom fields of the product. */
  customFields: CustomFieldConnection;
  /** Default image for a product. */
  defaultImage?: Maybe<Image>;
  /** Depth of the product. */
  depth?: Maybe<Measurement>;
  /** Description of the product. */
  description: Scalars['String'];
  /** Id of the product. */
  entityId: Scalars['Int'];
  /** Gift wrapping options available for the product. */
  giftWrappingOptions: GiftWrappingConnection;
  /** Global trade item number. */
  gtin?: Maybe<Scalars['String']>;
  /** Height of the product. */
  height?: Maybe<Measurement>;
  /** The ID of an object */
  id: Scalars['ID'];
  /** A list of the images for a product. */
  images: ImageConnection;
  /** Inventory information of the product. */
  inventory: ProductInventory;
  /** Maximum purchasable quantity for this product in a single order. */
  maxPurchaseQuantity?: Maybe<Scalars['Int']>;
  /** Metafield data related to a product. */
  metafields: MetafieldConnection;
  /** Minimum purchasable quantity for this product in a single order. */
  minPurchaseQuantity?: Maybe<Scalars['Int']>;
  /** Manufacturer part number. */
  mpn?: Maybe<Scalars['String']>;
  /** Name of the product. */
  name: Scalars['String'];
  /**
   * Product options.
   * @deprecated Use productOptions instead.
   */
  options: OptionConnection;
  /** Relative URL path to product page. */
  path: Scalars['String'];
  /** Description of the product in plain text. */
  plainTextDescription: Scalars['String'];
  /**
   * The minimum and maximum price of this product based on variant pricing and/or modifier price rules.
   * @deprecated Use priceRanges inside prices node instead.
   */
  priceRanges?: Maybe<PriceRanges>;
  /** Prices object determined by supplied product ID, variant ID, and selected option IDs. */
  prices?: Maybe<Prices>;
  /** Product options. */
  productOptions: ProductOptionConnection;
  /** Related products for this product. */
  relatedProducts: RelatedProductsConnection;
  /** Summary of the product reviews, includes the total number of reviews submitted and summation of the ratings on the reviews (ratings range from 0-5 per review). */
  reviewSummary: Reviews;
  /** Reviews associated with the product. */
  reviews: ReviewConnection;
  /** Product SEO details. */
  seo: SeoDetails;
  /** Default product variant when no options are selected. */
  sku: Scalars['String'];
  /** Type of product, ex: physical, digital */
  type: Scalars['String'];
  /** Universal product code. */
  upc?: Maybe<Scalars['String']>;
  /** Variants associated with the product. */
  variants: VariantConnection;
  /** Warranty information of the product. */
  warranty: Scalars['String'];
  /** Weight of the product. */
  weight?: Maybe<Measurement>;
  /** Width of the product. */
  width?: Maybe<Measurement>;
};


/** Product */
export type ProductCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Product */
export type ProductCustomFieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  names?: InputMaybe<Array<Scalars['String']>>;
};


/** Product */
export type ProductGiftWrappingOptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Product */
export type ProductImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Product */
export type ProductMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  keys?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  namespace: Scalars['String'];
};


/** Product */
export type ProductOptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Product */
export type ProductPlainTextDescriptionArgs = {
  characterLimit?: InputMaybe<Scalars['Int']>;
};


/** Product */
export type ProductPriceRangesArgs = {
  includeTax?: InputMaybe<Scalars['Boolean']>;
};


/** Product */
export type ProductPricesArgs = {
  currencyCode?: InputMaybe<CurrencyCode>;
  includeTax?: InputMaybe<Scalars['Boolean']>;
};


/** Product */
export type ProductProductOptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Product */
export type ProductRelatedProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  hideOutOfStock?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Product */
export type ProductReviewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<ProductReviewsFiltersInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ProductReviewsSortInput>;
};


/** Product */
export type ProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  entityIds?: InputMaybe<Array<Scalars['Int']>>;
  first?: InputMaybe<Scalars['Int']>;
  isPurchasable?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  optionValueIds?: InputMaybe<Array<OptionValueId>>;
};

/** Product Attribute Filter */
export type ProductAttributeSearchFilter = SearchProductFilter & {
  __typename?: 'ProductAttributeSearchFilter';
  /** List of available product attributes. */
  attributes: ProductAttributeSearchFilterItemConnection;
  /** Indicates whether to display product count next to the filter. */
  displayProductCount: Scalars['Boolean'];
  /** Indicates whether filter is collapsed by default. */
  isCollapsedByDefault: Scalars['Boolean'];
  /** Display name for the filter. */
  name: Scalars['String'];
};


/** Product Attribute Filter */
export type ProductAttributeSearchFilterAttributesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type ProductAttributeSearchFilterInput = {
  attribute: Scalars['String'];
  values: Array<Scalars['String']>;
};

/** Specific product attribute filter item */
export type ProductAttributeSearchFilterItem = {
  __typename?: 'ProductAttributeSearchFilterItem';
  /** Indicates whether product attribute is selected. */
  isSelected: Scalars['Boolean'];
  /** Indicates how many products available for this filter. */
  productCount: Scalars['Int'];
  /** Product attribute value. */
  value: Scalars['String'];
};

/** A connection to a list of items. */
export type ProductAttributeSearchFilterItemConnection = {
  __typename?: 'ProductAttributeSearchFilterItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProductAttributeSearchFilterItemEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductAttributeSearchFilterItemEdge = {
  __typename?: 'ProductAttributeSearchFilterItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ProductAttributeSearchFilterItem;
};

/** Product availability */
export type ProductAvailability = {
  /** A few words telling the customer how long it will normally take to ship this product, such as 'Usually ships in 24 hours'. */
  description: Scalars['String'];
  /** The availability state of the product. */
  status: ProductAvailabilityStatus;
};

/** Product availability status */
export enum ProductAvailabilityStatus {
  Available = 'Available',
  Preorder = 'Preorder',
  Unavailable = 'Unavailable'
}

/** Available Product */
export type ProductAvailable = ProductAvailability & {
  __typename?: 'ProductAvailable';
  /** A few words telling the customer how long it will normally take to ship this product, such as 'Usually ships in 24 hours'. */
  description: Scalars['String'];
  /** The availability state of the product. */
  status: ProductAvailabilityStatus;
};

export enum ProductConditionType {
  New = 'NEW',
  Refurbished = 'REFURBISHED',
  Used = 'USED'
}

/** A connection to a list of items. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProductEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Product;
};

/** Product Inventory Information */
export type ProductInventory = {
  __typename?: 'ProductInventory';
  /** Aggregated product inventory information. This data may not be available if not set or if the store's Inventory Settings have disabled displaying stock levels on the storefront. */
  aggregated?: Maybe<AggregatedInventory>;
  /** Indicates whether this product's inventory is being tracked on variant level. If true, you may wish to check the variants node to understand the true inventory of each individual variant, rather than relying on this product-level aggregate to understand how many items may be added to cart. */
  hasVariantInventory: Scalars['Boolean'];
  /** Indicates whether this product is in stock. */
  isInStock: Scalars['Boolean'];
};

/** Product Option */
export type ProductOption = {
  __typename?: 'ProductOption';
  /** Display name for the option. */
  displayName: Scalars['String'];
  /** Unique ID for the option. */
  entityId: Scalars['Int'];
  /** One of the option values is required to be selected for the checkout. */
  isRequired: Scalars['Boolean'];
  /** Option values. */
  values: OptionValueConnection;
};


/** Product Option */
export type ProductOptionValuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type ProductOptionConnection = {
  __typename?: 'ProductOptionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProductOptionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductOptionEdge = {
  __typename?: 'ProductOptionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CatalogProductOption;
};

/** Product Option Value */
export type ProductOptionValue = {
  __typename?: 'ProductOptionValue';
  /** Unique ID for the option value. */
  entityId: Scalars['Int'];
  /** Label for the option value. */
  label: Scalars['String'];
};

/** A connection to a list of items. */
export type ProductOptionValueConnection = {
  __typename?: 'ProductOptionValueConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProductOptionValueEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductOptionValueEdge = {
  __typename?: 'ProductOptionValueEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CatalogProductOptionValue;
};

/** Behavior of the product when stock is equal to 0 */
export enum ProductOutOfStockBehavior {
  DoNothing = 'DO_NOTHING',
  HideProduct = 'HIDE_PRODUCT',
  HideProductAndAccessible = 'HIDE_PRODUCT_AND_ACCESSIBLE',
  HideProductAndRedirect = 'HIDE_PRODUCT_AND_REDIRECT'
}

/** A Product PickList Value - a product to be mapped to the base product if selected. */
export type ProductPickListOptionValue = CatalogProductOptionValue & {
  __typename?: 'ProductPickListOptionValue';
  /** Unique ID for the option value. */
  entityId: Scalars['Int'];
  /** Indicates whether this value is the chosen default selected value. */
  isDefault: Scalars['Boolean'];
  /** Label for the option value. */
  label: Scalars['String'];
  /** The ID of the product associated with this option value. */
  productId: Scalars['Int'];
};

/** PreOrder Product */
export type ProductPreOrder = ProductAvailability & {
  __typename?: 'ProductPreOrder';
  /** A few words telling the customer how long it will normally take to ship this product, such as 'Usually ships in 24 hours'. */
  description: Scalars['String'];
  /** The message to be shown in the store when a product is put into the pre-order availability state, e.g. "Expected release date is %%DATE%%" */
  message?: Maybe<Scalars['String']>;
  /** The availability state of the product. */
  status: ProductAvailabilityStatus;
  /** Product release date */
  willBeReleasedAt?: Maybe<DateTimeExtended>;
};

export type ProductReviewsFiltersInput = {
  rating?: InputMaybe<ProductReviewsRatingFilterInput>;
};

export type ProductReviewsRatingFilterInput = {
  maxRating?: InputMaybe<Scalars['Int']>;
  minRating?: InputMaybe<Scalars['Int']>;
};

export enum ProductReviewsSortInput {
  HighestRating = 'HIGHEST_RATING',
  LowestRating = 'LOWEST_RATING',
  Newest = 'NEWEST',
  Oldest = 'OLDEST'
}

/** Unavailable Product */
export type ProductUnavailable = ProductAvailability & {
  __typename?: 'ProductUnavailable';
  /** A few words telling the customer how long it will normally take to ship this product, such as 'Usually ships in 24 hours'. */
  description: Scalars['String'];
  /** The message to be shown in the store when "Call for pricing" is enabled for this product, e.g. "Contact us at 555-5555" */
  message?: Maybe<Scalars['String']>;
  /** The availability state of the product. */
  status: ProductAvailabilityStatus;
};

/** Public Wishlist */
export type PublicWishlist = {
  __typename?: 'PublicWishlist';
  /** The wishlist id. */
  entityId: Scalars['Int'];
  items: WishlistItemConnection;
  /** The wishlist name. */
  name: Scalars['String'];
  /** The wishlist token. */
  token: Scalars['String'];
};


/** Public Wishlist */
export type PublicWishlistItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hideOutOfStock?: InputMaybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  /** The current channel. */
  channel: Channel;
  /** The currently logged in customer. */
  customer?: Maybe<Customer>;
  /** @deprecated Alpha version. Do not use in production. */
  inventory: Inventory;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  site: Site;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};

/** Rating Filter */
export type RatingSearchFilter = SearchProductFilter & {
  __typename?: 'RatingSearchFilter';
  /** Indicates whether filter is collapsed by default. */
  isCollapsedByDefault: Scalars['Boolean'];
  /** Display name for the filter. */
  name: Scalars['String'];
  /** List of available ratings. */
  ratings: RatingSearchFilterItemConnection;
};


/** Rating Filter */
export type RatingSearchFilterRatingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type RatingSearchFilterInput = {
  maxRating?: InputMaybe<Scalars['Float']>;
  minRating?: InputMaybe<Scalars['Float']>;
};

/** Specific rating filter item */
export type RatingSearchFilterItem = {
  __typename?: 'RatingSearchFilterItem';
  /** Indicates whether rating is selected. */
  isSelected: Scalars['Boolean'];
  /** Indicates how many products available for this filter. */
  productCount: Scalars['Int'];
  /** Rating value. */
  value: Scalars['String'];
};

/** A connection to a list of items. */
export type RatingSearchFilterItemConnection = {
  __typename?: 'RatingSearchFilterItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RatingSearchFilterItemEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RatingSearchFilterItemEdge = {
  __typename?: 'RatingSearchFilterItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: RatingSearchFilterItem;
};

export type Region = {
  __typename?: 'Region';
  /** The rendered HTML content targeted at the region. */
  html: Scalars['String'];
  /** The name of a region. */
  name: Scalars['String'];
};

/** A connection to a list of items. */
export type RelatedProductsConnection = {
  __typename?: 'RelatedProductsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RelatedProductsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RelatedProductsEdge = {
  __typename?: 'RelatedProductsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Product;
};

/** The rendered regions by specific page. */
export type RenderedRegionsByPageType = {
  __typename?: 'RenderedRegionsByPageType';
  regions: Array<Region>;
};

/** Review */
export type Review = {
  __typename?: 'Review';
  /** Product review author. */
  author: Author;
  /** Product review creation date. */
  createdAt: DateTimeExtended;
  /** Unique ID for the product review. */
  entityId: Scalars['Long'];
  /** Product review rating. */
  rating: Scalars['Int'];
  /** Product review text. */
  text: Scalars['String'];
  /** Product review title. */
  title: Scalars['String'];
};

/** A connection to a list of items. */
export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ReviewEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ReviewEdge = {
  __typename?: 'ReviewEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Review;
};

/** Review Rating Summary */
export type Reviews = {
  __typename?: 'Reviews';
  /**
   * Average rating of the product.
   * @deprecated Alpha version. Do not use in production.
   */
  averageRating: Scalars['Float'];
  /** Total number of reviews on product. */
  numberOfReviews: Scalars['Int'];
  /** Summation of rating scores from each review. */
  summationOfRatings: Scalars['Int'];
};

/** route */
export type Route = {
  __typename?: 'Route';
  /** node */
  node?: Maybe<Node>;
};

/** Store search settings. */
export type Search = {
  __typename?: 'Search';
  /** Product filtering enabled. */
  productFilteringEnabled: Scalars['Boolean'];
};

/** Search Product Filter */
export type SearchProductFilter = {
  /** Indicates whether filter is collapsed by default. */
  isCollapsedByDefault: Scalars['Boolean'];
  /** Display name for the filter. */
  name: Scalars['String'];
};

/** A connection to a list of items. */
export type SearchProductFilterConnection = {
  __typename?: 'SearchProductFilterConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SearchProductFilterEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SearchProductFilterEdge = {
  __typename?: 'SearchProductFilterEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: SearchProductFilter;
};

export type SearchProducts = {
  __typename?: 'SearchProducts';
  /** Available product filters. */
  filters: SearchProductFilterConnection;
  /** Details of the products. */
  products: ProductConnection;
};


export type SearchProductsFiltersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type SearchProductsProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type SearchProductsFiltersInput = {
  /** Filter by products belonging to any of the specified Brands. */
  brandEntityIds?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter by products belonging to a single Category. This is intended for use when presenting a Category page in a PLP experience. This argument must be used in order for custom product sorts and custom product filtering settings targeted at a particular category to take effect. */
  categoryEntityId?: InputMaybe<Scalars['Int']>;
  /** Filter by products belonging to any of the specified Categories. Intended for Advanced Search and Faceted Search/Product Filtering use cases, not for a page for a specific Category. */
  categoryEntityIds?: InputMaybe<Array<Scalars['Int']>>;
  /** When set to True, hides products which are out of stock. Defaults to False. This filter will do nothing unless your store has the Product Filtering feature available on your plan and enabled. If it is supplied when your store does not have the feature enabled, it will be silently ignored. */
  hideOutOfStock?: InputMaybe<Scalars['Boolean']>;
  /** Filters by Products which have explicitly been marked as Featured within the catalog. If not supplied, the Featured status of products will not be considered when returning the list of products. */
  isFeatured?: InputMaybe<Scalars['Boolean']>;
  /** Filters by Products which have explicit Free Shipping configured within the catalog. If not supplied, the Free Shipping status of products will not be considered when returning the list of products. */
  isFreeShipping?: InputMaybe<Scalars['Boolean']>;
  /** Search by price range. At least a minPrice or maxPrice must be supplied. */
  price?: InputMaybe<PriceSearchFilterInput>;
  /** Filter by the attributes of products such as Product Options and Product Custom Fields. This filter will do nothing unless your store has the Product Filtering feature available on your plan and enabled. If it is supplied when your store does not have the feature enabled, it will be silently ignored. */
  productAttributes?: InputMaybe<Array<ProductAttributeSearchFilterInput>>;
  /** Filter by rating. At least a minRating or maxRating must be supplied. This filter will do nothing unless your store has the Product Filtering feature available on your plan and enabled. If it is supplied when your store does not have the feature enabled, it will be silently ignored. */
  rating?: InputMaybe<RatingSearchFilterInput>;
  /** Boolean argument to determine whether products within sub-Categories will be returned when filtering products by Category. Defaults to False if not supplied. */
  searchSubCategories?: InputMaybe<Scalars['Boolean']>;
  /** Textual search term. Used to search for products based on text entered by a shopper, typically in a search box. Searches against several fields on the product including Name, SKU, and Description. */
  searchTerm?: InputMaybe<Scalars['String']>;
};

export enum SearchProductsSortInput {
  AToZ = 'A_TO_Z',
  BestReviewed = 'BEST_REVIEWED',
  BestSelling = 'BEST_SELLING',
  Featured = 'FEATURED',
  HighestPrice = 'HIGHEST_PRICE',
  LowestPrice = 'LOWEST_PRICE',
  Newest = 'NEWEST',
  Relevance = 'RELEVANCE',
  ZToA = 'Z_TO_A'
}

export type SearchQueries = {
  __typename?: 'SearchQueries';
  /** Details of the products and facets matching given search criteria. */
  searchProducts: SearchProducts;
};


export type SearchQueriesSearchProductsArgs = {
  filters: SearchProductsFiltersInput;
  sort?: InputMaybe<SearchProductsSortInput>;
};

/** Seo Details */
export type SeoDetails = {
  __typename?: 'SeoDetails';
  /** Meta description. */
  metaDescription: Scalars['String'];
  /** Meta keywords. */
  metaKeywords: Scalars['String'];
  /** Page title. */
  pageTitle: Scalars['String'];
};

/** Store settings information from the control panel. */
export type Settings = {
  __typename?: 'Settings';
  /** Channel ID. */
  channelId: Scalars['Long'];
  /** Contact information for the store. */
  contact?: Maybe<ContactField>;
  /** Store display format information. */
  display: DisplayField;
  /** Inventory settings. */
  inventory?: Maybe<InventorySettings>;
  /** Logo information for the store. */
  logo: LogoField;
  /** Store search settings. */
  search: Search;
  /** The current store status. */
  status: StorefrontStatusType;
  /** The hash of the store. */
  storeHash: Scalars['String'];
  /** The name of the store. */
  storeName: Scalars['String'];
  tax?: Maybe<TaxDisplaySettings>;
  /** Store urls. */
  url: UrlField;
};

/** A connection to a list of items. */
export type ShopByPriceConnection = {
  __typename?: 'ShopByPriceConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ShopByPriceEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ShopByPriceEdge = {
  __typename?: 'ShopByPriceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ShopByPriceRange;
};

/** Category shop by price money ranges */
export type ShopByPriceRange = {
  __typename?: 'ShopByPriceRange';
  /** Category shop by price range. */
  ranges: MoneyRange;
};

/** A site */
export type Site = {
  __typename?: 'Site';
  /** Details of the best selling products. */
  bestSellingProducts: ProductConnection;
  /** Details of the brand. */
  brands: BrandConnection;
  /** Retrieve a category object by the id. */
  category?: Maybe<Category>;
  categoryTree: Array<CategoryTreeItem>;
  content: Content;
  /** Store Currencies. */
  currencies: CurrencyConnection;
  /** Currency details. */
  currency?: Maybe<Currency>;
  /** Details of the featured products. */
  featuredProducts: ProductConnection;
  /** Details of the newest products. */
  newestProducts: ProductConnection;
  /** A single product object with variant pricing overlay capabilities. */
  product?: Maybe<Product>;
  /** Details of the products. */
  products: ProductConnection;
  publicWishlist?: Maybe<PublicWishlist>;
  /** Route for a node */
  route: Route;
  /** The Search queries. */
  search: SearchQueries;
  /** Store settings. */
  settings?: Maybe<Settings>;
};


/** A site */
export type SiteBestSellingProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  hideOutOfStock?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A site */
export type SiteBrandsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  productEntityIds?: InputMaybe<Array<Scalars['Int']>>;
};


/** A site */
export type SiteCategoryArgs = {
  entityId: Scalars['Int'];
};


/** A site */
export type SiteCategoryTreeArgs = {
  rootEntityId?: InputMaybe<Scalars['Int']>;
};


/** A site */
export type SiteCurrenciesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A site */
export type SiteCurrencyArgs = {
  currencyCode: CurrencyCode;
};


/** A site */
export type SiteFeaturedProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  hideOutOfStock?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A site */
export type SiteNewestProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  hideOutOfStock?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A site */
export type SiteProductArgs = {
  entityId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  optionValueIds?: InputMaybe<Array<OptionValueId>>;
  sku?: InputMaybe<Scalars['String']>;
  variantEntityId?: InputMaybe<Scalars['Int']>;
};


/** A site */
export type SiteProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  entityIds?: InputMaybe<Array<Scalars['Int']>>;
  first?: InputMaybe<Scalars['Int']>;
  hideOutOfStock?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A site */
export type SitePublicWishlistArgs = {
  token: Scalars['String'];
};


/** A site */
export type SiteRouteArgs = {
  path: Scalars['String'];
};

/** Stock level display setting */
export enum StockLevelDisplay {
  DontShow = 'DONT_SHOW',
  Show = 'SHOW',
  ShowWhenLow = 'SHOW_WHEN_LOW'
}

/** Storefront Mode */
export enum StorefrontStatusType {
  Hibernation = 'HIBERNATION',
  Launched = 'LAUNCHED',
  Maintenance = 'MAINTENANCE',
  PreLaunch = 'PRE_LAUNCH'
}

/** Specific sub-category filter item */
export type SubCategorySearchFilterItem = {
  __typename?: 'SubCategorySearchFilterItem';
  /** Category ID. */
  entityId: Scalars['Int'];
  /** Indicates whether category is selected. */
  isSelected: Scalars['Boolean'];
  /** Category name. */
  name: Scalars['String'];
  /** Indicates how many products available for this filter. */
  productCount: Scalars['Int'];
  /** List of available sub-categories. */
  subCategories: SubCategorySearchFilterItemConnection;
};


/** Specific sub-category filter item */
export type SubCategorySearchFilterItemSubCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type SubCategorySearchFilterItemConnection = {
  __typename?: 'SubCategorySearchFilterItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SubCategorySearchFilterItemEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SubCategorySearchFilterItemEdge = {
  __typename?: 'SubCategorySearchFilterItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: SubCategorySearchFilterItem;
};

/** A swatch option value - swatch values can be associated with a list of hexidecimal colors or an image. */
export type SwatchOptionValue = CatalogProductOptionValue & {
  __typename?: 'SwatchOptionValue';
  /** Unique ID for the option value. */
  entityId: Scalars['Int'];
  /** List of up to 3 hex encoded colors to associate with a swatch value. */
  hexColors: Array<Scalars['String']>;
  /** Absolute path of a swatch texture image. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Indicates whether this value is the chosen default selected value. */
  isDefault: Scalars['Boolean'];
  /** Label for the option value. */
  label: Scalars['String'];
};


/** A swatch option value - swatch values can be associated with a list of hexidecimal colors or an image. */
export type SwatchOptionValueImageUrlArgs = {
  height?: InputMaybe<Scalars['Int']>;
  width: Scalars['Int'];
};

export type TaxDisplaySettings = {
  __typename?: 'TaxDisplaySettings';
  /** Tax display setting for Product Details Page. */
  pdp: TaxPriceDisplay;
  /** Tax display setting for Product List Page. */
  plp: TaxPriceDisplay;
};

/** Tax setting can be set included or excluded (Tax setting can also be set to both on PDP/PLP). */
export enum TaxPriceDisplay {
  Both = 'BOTH',
  Ex = 'EX',
  Inc = 'INC'
}

/** A single line text input field. */
export type TextFieldOption = CatalogProductOption & {
  __typename?: 'TextFieldOption';
  /** Default value of the text field option. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Display name for the option. */
  displayName: Scalars['String'];
  /** Unique ID for the option. */
  entityId: Scalars['Int'];
  /** One of the option values is required to be selected for the checkout. */
  isRequired: Scalars['Boolean'];
  /** Indicates whether it is a variant option or modifier. */
  isVariantOption: Scalars['Boolean'];
  /** The maximum number of characters. */
  maxLength?: Maybe<Scalars['Int']>;
  /** The minimum number of characters. */
  minLength?: Maybe<Scalars['Int']>;
};

/** Update wishlist input object */
export type UpdateWishlistInput = {
  data: WishlistUpdateDataInput;
  entityId: Scalars['Int'];
};

/** Update wishlist */
export type UpdateWishlistResult = {
  __typename?: 'UpdateWishlistResult';
  result: Wishlist;
};

/** Url field */
export type UrlField = {
  __typename?: 'UrlField';
  /** CDN url to fetch assets. */
  cdnUrl: Scalars['String'];
  /** Checkout url. */
  checkoutUrl?: Maybe<Scalars['String']>;
  /** Store url. */
  vanityUrl: Scalars['String'];
};

/** Variant */
export type Variant = Node & {
  __typename?: 'Variant';
  /** Default image for a variant. */
  defaultImage?: Maybe<Image>;
  /** The variant's depth. If a depth was not explicitly specified on the variant, this will be the product's depth. */
  depth?: Maybe<Measurement>;
  /** Id of the variant. */
  entityId: Scalars['Int'];
  /** Global trade item number. */
  gtin?: Maybe<Scalars['String']>;
  /** The variant's height. If a height was not explicitly specified on the variant, this will be the product's height. */
  height?: Maybe<Measurement>;
  /** The ID of an object */
  id: Scalars['ID'];
  /** Variant inventory */
  inventory?: Maybe<VariantInventory>;
  isPurchasable: Scalars['Boolean'];
  /** Metafield data related to a variant. */
  metafields: MetafieldConnection;
  /** Manufacturer part number. */
  mpn?: Maybe<Scalars['String']>;
  /** The options which define a variant. */
  options: OptionConnection;
  /** Variant prices */
  prices?: Maybe<Prices>;
  /** Product options that compose this variant. */
  productOptions: ProductOptionConnection;
  /** Sku of the variant. */
  sku: Scalars['String'];
  /** Universal product code. */
  upc?: Maybe<Scalars['String']>;
  /** The variant's weight. If a weight was not explicitly specified on the variant, this will be the product's weight. */
  weight?: Maybe<Measurement>;
  /** The variant's width. If a width was not explicitly specified on the variant, this will be the product's width. */
  width?: Maybe<Measurement>;
};


/** Variant */
export type VariantMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  keys?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  namespace: Scalars['String'];
};


/** Variant */
export type VariantOptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Variant */
export type VariantPricesArgs = {
  currencyCode?: InputMaybe<CurrencyCode>;
  includeTax?: InputMaybe<Scalars['Boolean']>;
};


/** Variant */
export type VariantProductOptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type VariantConnection = {
  __typename?: 'VariantConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<VariantEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type VariantEdge = {
  __typename?: 'VariantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Variant;
};

/** Variant Inventory */
export type VariantInventory = {
  __typename?: 'VariantInventory';
  /** Aggregated product variant inventory information. This data may not be available if not set or if the store's Inventory Settings have disabled displaying stock levels on the storefront. */
  aggregated?: Maybe<Aggregated>;
  /** Inventory by locations. */
  byLocation?: Maybe<LocationConnection>;
  /** Indicates whether this product is in stock. */
  isInStock: Scalars['Boolean'];
};


/** Variant Inventory */
export type VariantInventoryByLocationArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  distanceFilter?: InputMaybe<DistanceFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locationEntityCodes?: InputMaybe<Array<Scalars['String']>>;
  locationEntityIds?: InputMaybe<Array<Scalars['Int']>>;
  locationEntityServiceTypeIds?: InputMaybe<Array<Scalars['String']>>;
  locationEntityTypeIds?: InputMaybe<Array<Scalars['String']>>;
};

export type Wishlist = {
  __typename?: 'Wishlist';
  /** The wishlist id. */
  entityId: Scalars['Int'];
  /** Is the wishlist public? */
  isPublic: Scalars['Boolean'];
  items: WishlistItemConnection;
  /** The wishlist name. */
  name: Scalars['String'];
  /** The wishlist token. */
  token: Scalars['String'];
};


export type WishlistItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hideOutOfStock?: InputMaybe<Scalars['Boolean']>;
};

/** A connection to a list of items. */
export type WishlistConnection = {
  __typename?: 'WishlistConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<WishlistEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type WishlistEdge = {
  __typename?: 'WishlistEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Wishlist;
};

/** Wishlist filters input object */
export type WishlistFiltersInput = {
  entityIds?: InputMaybe<Array<Scalars['Int']>>;
};

/** WishlistItem */
export type WishlistItem = {
  __typename?: 'WishlistItem';
  /** Wishlist item id. */
  entityId: Scalars['Int'];
  product: Product;
  productEntityId: Scalars['Int'];
  variantEntityId?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type WishlistItemConnection = {
  __typename?: 'WishlistItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<WishlistItemEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type WishlistItemEdge = {
  __typename?: 'WishlistItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: WishlistItem;
};

/** Wishlist item input object */
export type WishlistItemInput = {
  productEntityId: Scalars['Int'];
  variantEntityId?: InputMaybe<Scalars['Int']>;
};

export type WishlistMutations = {
  __typename?: 'WishlistMutations';
  addWishlistItems?: Maybe<AddWishlistItemsResult>;
  createWishlist?: Maybe<CreateWishlistResult>;
  deleteWishlistItems?: Maybe<DeleteWishlistItemsResult>;
  deleteWishlists?: Maybe<DeleteWishlistResult>;
  updateWishlist?: Maybe<UpdateWishlistResult>;
};


export type WishlistMutationsAddWishlistItemsArgs = {
  input: AddWishlistItemsInput;
};


export type WishlistMutationsCreateWishlistArgs = {
  input: CreateWishlistInput;
};


export type WishlistMutationsDeleteWishlistItemsArgs = {
  input: DeleteWishlistItemsInput;
};


export type WishlistMutationsDeleteWishlistsArgs = {
  input: DeleteWishlistsInput;
};


export type WishlistMutationsUpdateWishlistArgs = {
  input: UpdateWishlistInput;
};

/** Wishlist data to update */
export type WishlistUpdateDataInput = {
  isPublic?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Country Code */
export enum CountryCode {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

/** Currency Code */
export enum CurrencyCode {
  Adp = 'ADP',
  Aed = 'AED',
  Afa = 'AFA',
  Afn = 'AFN',
  Alk = 'ALK',
  All = 'ALL',
  Amd = 'AMD',
  Ang = 'ANG',
  Aoa = 'AOA',
  Aok = 'AOK',
  Aon = 'AON',
  Aor = 'AOR',
  Ara = 'ARA',
  Arl = 'ARL',
  Arm = 'ARM',
  Arp = 'ARP',
  Ars = 'ARS',
  Ats = 'ATS',
  Aud = 'AUD',
  Awg = 'AWG',
  Azm = 'AZM',
  Azn = 'AZN',
  Bad = 'BAD',
  Bam = 'BAM',
  Ban = 'BAN',
  Bbd = 'BBD',
  Bdt = 'BDT',
  Bec = 'BEC',
  Bef = 'BEF',
  Bel = 'BEL',
  Bgl = 'BGL',
  Bgm = 'BGM',
  Bgn = 'BGN',
  Bgo = 'BGO',
  Bhd = 'BHD',
  Bif = 'BIF',
  Bmd = 'BMD',
  Bnd = 'BND',
  Bob = 'BOB',
  Bol = 'BOL',
  Bop = 'BOP',
  Bov = 'BOV',
  Brb = 'BRB',
  Brc = 'BRC',
  Bre = 'BRE',
  Brl = 'BRL',
  Brn = 'BRN',
  Brr = 'BRR',
  Brz = 'BRZ',
  Bsd = 'BSD',
  Btn = 'BTN',
  Buk = 'BUK',
  Bwp = 'BWP',
  Byb = 'BYB',
  Byn = 'BYN',
  Byr = 'BYR',
  Bzd = 'BZD',
  Cad = 'CAD',
  Cdf = 'CDF',
  Che = 'CHE',
  Chf = 'CHF',
  Chw = 'CHW',
  Cle = 'CLE',
  Clf = 'CLF',
  Clp = 'CLP',
  Cnx = 'CNX',
  Cny = 'CNY',
  Cop = 'COP',
  Cou = 'COU',
  Crc = 'CRC',
  Csd = 'CSD',
  Csk = 'CSK',
  Cuc = 'CUC',
  Cup = 'CUP',
  Cve = 'CVE',
  Cyp = 'CYP',
  Czk = 'CZK',
  Ddm = 'DDM',
  Dem = 'DEM',
  Djf = 'DJF',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Ecs = 'ECS',
  Ecv = 'ECV',
  Eek = 'EEK',
  Egp = 'EGP',
  Ern = 'ERN',
  Esa = 'ESA',
  Esb = 'ESB',
  Esp = 'ESP',
  Etb = 'ETB',
  Eur = 'EUR',
  Fim = 'FIM',
  Fjd = 'FJD',
  Fkp = 'FKP',
  Frf = 'FRF',
  Gbp = 'GBP',
  Gek = 'GEK',
  Gel = 'GEL',
  Ghc = 'GHC',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gmd = 'GMD',
  Gnf = 'GNF',
  Gns = 'GNS',
  Gqe = 'GQE',
  Grd = 'GRD',
  Gtq = 'GTQ',
  Gwe = 'GWE',
  Gwp = 'GWP',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrd = 'HRD',
  Hrk = 'HRK',
  Htg = 'HTG',
  Huf = 'HUF',
  Idr = 'IDR',
  Iep = 'IEP',
  Ilp = 'ILP',
  Ilr = 'ILR',
  Ils = 'ILS',
  Inr = 'INR',
  Iqd = 'IQD',
  Irr = 'IRR',
  Isj = 'ISJ',
  Isk = 'ISK',
  Itl = 'ITL',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kmf = 'KMF',
  Kpw = 'KPW',
  Krh = 'KRH',
  Kro = 'KRO',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Ltl = 'LTL',
  Ltt = 'LTT',
  Luc = 'LUC',
  Luf = 'LUF',
  Lul = 'LUL',
  Lvl = 'LVL',
  Lvr = 'LVR',
  Lyd = 'LYD',
  Mad = 'MAD',
  Maf = 'MAF',
  Mcf = 'MCF',
  Mdc = 'MDC',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mgf = 'MGF',
  Mkd = 'MKD',
  Mkn = 'MKN',
  Mlf = 'MLF',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mro = 'MRO',
  Mtl = 'MTL',
  Mtp = 'MTP',
  Mur = 'MUR',
  Mvp = 'MVP',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Mxp = 'MXP',
  Mxv = 'MXV',
  Myr = 'MYR',
  Mze = 'MZE',
  Mzm = 'MZM',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nic = 'NIC',
  Nio = 'NIO',
  Nlg = 'NLG',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Omr = 'OMR',
  Pab = 'PAB',
  Pei = 'PEI',
  Pen = 'PEN',
  Pes = 'PES',
  Pgk = 'PGK',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Plz = 'PLZ',
  Pte = 'PTE',
  Pyg = 'PYG',
  Qar = 'QAR',
  Rhd = 'RHD',
  Rol = 'ROL',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rur = 'RUR',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sdd = 'SDD',
  Sdg = 'SDG',
  Sdp = 'SDP',
  Sek = 'SEK',
  Sgd = 'SGD',
  Shp = 'SHP',
  Sit = 'SIT',
  Skk = 'SKK',
  Sll = 'SLL',
  Sos = 'SOS',
  Srd = 'SRD',
  Srg = 'SRG',
  Ssp = 'SSP',
  Std = 'STD',
  Sur = 'SUR',
  Svc = 'SVC',
  Syp = 'SYP',
  Szl = 'SZL',
  Thb = 'THB',
  Tjr = 'TJR',
  Tjs = 'TJS',
  Tmm = 'TMM',
  Tmt = 'TMT',
  Tnd = 'TND',
  Top = 'TOP',
  Tpe = 'TPE',
  Trl = 'TRL',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Uak = 'UAK',
  Ugs = 'UGS',
  Ugx = 'UGX',
  Usd = 'USD',
  Usn = 'USN',
  Uss = 'USS',
  Uyi = 'UYI',
  Uyp = 'UYP',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Veb = 'VEB',
  Vef = 'VEF',
  Vnd = 'VND',
  Vnn = 'VNN',
  Vuv = 'VUV',
  Wst = 'WST',
  Xaf = 'XAF',
  Xcd = 'XCD',
  Xeu = 'XEU',
  Xfo = 'XFO',
  Xfu = 'XFU',
  Xof = 'XOF',
  Xpf = 'XPF',
  Xre = 'XRE',
  Ydd = 'YDD',
  Yer = 'YER',
  Yud = 'YUD',
  Yum = 'YUM',
  Yun = 'YUN',
  Yur = 'YUR',
  Zal = 'ZAL',
  Zar = 'ZAR',
  Zmk = 'ZMK',
  Zmw = 'ZMW',
  Zrn = 'ZRN',
  Zrz = 'ZRZ',
  Zwd = 'ZWD',
  Zwl = 'ZWL',
  Zwr = 'ZWR'
}

export type ProductByIdQueryVariables = Exact<{
  productId: Scalars['Int'];
}>;


export type ProductByIdQuery = { __typename?: 'Query', site: { __typename?: 'Site', product?: { __typename?: 'Product', id: string, entityId: number, name: string, plainTextDescription: string, defaultImage?: { __typename?: 'Image', url320wide: string, url640wide: string, url960wide: string, url1280wide: string, altText?: string } | null, images: { __typename?: 'ImageConnection', edges?: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', url320wide: string, url640wide: string, url960wide: string, url1280wide: string, altText?: string } } | null> | null }, reviewSummary: { __typename?: 'Reviews', summationOfRatings: number, numberOfReviews: number }, prices?: { __typename?: 'Prices', price: { __typename?: 'Money', value: any, currencyCode: string }, priceRange: { __typename?: 'MoneyRange', min: { __typename?: 'Money', value: any, currencyCode: string }, max: { __typename?: 'Money', value: any, currencyCode: string } }, salePrice?: { __typename?: 'Money', value: any, currencyCode: string } | null, retailPrice?: { __typename?: 'Money', value: any, currencyCode: string } | null, saved?: { __typename?: 'Money', value: any, currencyCode: string } | null, bulkPricing: Array<{ __typename?: 'BulkPricingFixedPriceDiscount', price: any, minimumQuantity: number, maximumQuantity?: number | null } | { __typename?: 'BulkPricingPercentageDiscount', percentOff: any, minimumQuantity: number, maximumQuantity?: number | null } | { __typename?: 'BulkPricingRelativePriceDiscount', priceAdjustment: any, minimumQuantity: number, maximumQuantity?: number | null }> } | null, brand?: { __typename?: 'Brand', name: string } | null } | null } };

export type ImageFieldsFragment = { __typename?: 'Image', url320wide: string, url640wide: string, url960wide: string, url1280wide: string, altText?: string };

export type MoneyFieldsFragment = { __typename?: 'Money', value: any, currencyCode: string };

export type ProductListQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductListQuery = { __typename?: 'Query', site: { __typename?: 'Site', products: { __typename?: 'ProductConnection', edges?: Array<{ __typename?: 'ProductEdge', node: { __typename?: 'Product', entityId: number, id: string, name: string } } | null> | null } } };

export const ImageFieldsFragmentDoc = gql`
    fragment ImageFields on Image {
  url320wide: url(width: 320)
  url640wide: url(width: 640)
  url960wide: url(width: 960)
  url1280wide: url(width: 1280)
  altText
}
    `;
export const MoneyFieldsFragmentDoc = gql`
    fragment MoneyFields on Money {
  value
  currencyCode
}
    `;
export const ProductByIdDocument = gql`
    query productById($productId: Int!) {
  site {
    product(entityId: $productId) {
      id
      entityId
      name
      plainTextDescription
      defaultImage {
        ...ImageFields
      }
      images {
        edges {
          node {
            ...ImageFields
          }
        }
      }
      reviewSummary {
        summationOfRatings
        numberOfReviews
      }
      prices {
        price {
          ...MoneyFields
        }
        priceRange {
          min {
            ...MoneyFields
          }
          max {
            ...MoneyFields
          }
        }
        salePrice {
          ...MoneyFields
        }
        retailPrice {
          ...MoneyFields
        }
        saved {
          ...MoneyFields
        }
        bulkPricing {
          minimumQuantity
          maximumQuantity
          ... on BulkPricingFixedPriceDiscount {
            price
          }
          ... on BulkPricingPercentageDiscount {
            percentOff
          }
          ... on BulkPricingRelativePriceDiscount {
            priceAdjustment
          }
        }
      }
      brand {
        name
      }
    }
  }
}
    ${ImageFieldsFragmentDoc}
${MoneyFieldsFragmentDoc}`;

/**
 * __useProductByIdQuery__
 *
 * To run a query within a React component, call `useProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductByIdQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useProductByIdQuery(baseOptions: Apollo.QueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, options);
      }
export function useProductByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, options);
        }
export type ProductByIdQueryHookResult = ReturnType<typeof useProductByIdQuery>;
export type ProductByIdLazyQueryHookResult = ReturnType<typeof useProductByIdLazyQuery>;
export type ProductByIdQueryResult = Apollo.QueryResult<ProductByIdQuery, ProductByIdQueryVariables>;
export const ProductListDocument = gql`
    query productList {
  site {
    products {
      edges {
        node {
          entityId
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useProductListQuery__
 *
 * To run a query within a React component, call `useProductListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductListQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductListQuery(baseOptions?: Apollo.QueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
      }
export function useProductListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
        }
export type ProductListQueryHookResult = ReturnType<typeof useProductListQuery>;
export type ProductListLazyQueryHookResult = ReturnType<typeof useProductListLazyQuery>;
export type ProductListQueryResult = Apollo.QueryResult<ProductListQuery, ProductListQueryVariables>;