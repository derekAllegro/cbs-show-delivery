import { gql } from "graphql-tag";

// TODO: skrócić to query
export const DarbQuery = gql`
  fragment BuyerOrderOffer on OrderOffer {
    id
    boughtAt
    quantity
    finalPrice {
      amount
      currency
      __typename
    }
    collectiveFinalPrice {
      amount
      currency
      __typename
    }
    sellerPrice {
      unitPrice {
        net {
          amount
          currency
          __typename
        }
        gross {
          amount
          currency
          __typename
        }
        __typename
      }
      collectivePrice {
        net {
          amount
          currency
          __typename
        }
        gross {
          amount
          currency
          __typename
        }
        __typename
      }
      __typename
    }
    additionalServices {
      name
      __typename
    }
    viewUrl
    offer {
      id
      title
      ... on AllegroOffer {
        images
        __typename
      }
      __typename
    }
    coins
    refunds {
      quantity
      __typename
    }
    voucherDiscounts {
      name
      description
      type
      status
      __typename
    }
    __typename
  }

  fragment Delivery on Delivery {
    id
    address {
      id
      firstName
      lastName
      street
      city
      zipCode
      countryCode
      companyName
      phoneNumber
      email
      __typename
    }
    method {
      id
      name
      __typename
    }
    numberOfPackages
    pickupPoint {
      name
      description
      address {
        street
        zipCode
        city
        __typename
      }
      __typename
    }
    finalCost {
      amount
      currency
      __typename
    }
    netEstimatedFinalCost {
      amount
      currency
      __typename
    }
    isSmart
    smartLabels
    __typename
  }

  fragment ParcelTracking on ParcelTracking {
    waybills {
      waybillId
      carrier {
        trackingUrl
        __typename
      }
      currentParcelStatus {
        reachedAt
        code
        name
        __typename
      }
      parcelDetailedHistory {
        date
        description
        __typename
      }
      __typename
    }
    deliveryTime {
      estimatedDeliveryDates {
        from
        to
        __typename
      }
      guaranteedDeliveryDates {
        from
        to
        __typename
      }
      declaredDispatchDate
      delayInfo {
        status
        __typename
      }
      __typename
    }
    __typename
  }

  fragment OrderGroupPayment on Payment {
    id
    status
    method {
      description
      __typename
    }
    buyer {
      userId
      __typename
    }
    discounts {
      value {
        amount
        currency
        __typename
      }
      label
      __typename
    }
    currencyExchange {
      amount {
        amount
        currency
        __typename
      }
      rate
      __typename
    }
    splitPayment
    buyerPaidAmount {
      amount
      currency
      __typename
    }
    device
    transactions {
      allegroCareProducts {
        name
        type
        __typename
      }
      __typename
    }
    __typename
  }

  fragment OrderGroupCancellation on Cancellation {
    available
    cancelledByBuyer
    cancelledBy
    cancelledDate
    adminDepartment
    additionalInfo
    mode
    __typename
  }

  fragment FulfilmentOrderDetailsDeliveryAddress on Address {
    id
    firstName
    lastName
    street
    city
    zipCode
    countryCode
    companyName
    phoneNumber
    email
    __typename
  }

  fragment FulfilmentOrderDetailsDeliveryPickupPoint on FulfilmentOrderDetailsDeliveryPickupPoint {
    code
    modified
    __typename
  }

  fragment FulfilmentOrderDetailsDelivery on FulfilmentOrderDetailsDelivery {
    id
    address {
      ...FulfilmentOrderDetailsDeliveryAddress
      __typename
    }
    isEditable
    pickupPoint {
      ...FulfilmentOrderDetailsDeliveryPickupPoint
      __typename
    }
    __typename
  }

  fragment FulfilmentOrderDetails on FulfilmentOrderDetails {
    id
    fulfilmentOrderNumber
    version
    delivery {
      ...FulfilmentOrderDetailsDelivery
      __typename
    }
    statusHistory {
      status
      timestamp
      __typename
    }
    shippedItems {
      ...ShippedItems
      __typename
    }
    cancellable
    __typename
  }

  fragment ShippedItems on FulfilmentOrderDetailsShippedItem {
    seller {
      userId
      login
      __typename
    }
    trackingNumber
    fulfilmentProductId
    quantity
    orderOffer {
      title
      id
      viewUrl
      __typename
    }
    __typename
  }

  fragment BuyerOrder on AllegroOrder {
    id
    orderDate
    buyerNotes
    hiddenInMyOrders
    seller {
      userId
      login
      __typename
    }
    returnState
    offers {
      ...BuyerOrderOffer
      __typename
    }
    buyer {
      login
      __typename
    }
    fulfilment {
      id
      __typename
    }
    totalCost {
      amount
      currency
      __typename
    }
    invoice {
      company {
        name
        taxId
        __typename
      }
      naturalPerson {
        firstName
        lastName
        __typename
      }
      address {
        street
        zipCode
        city
        __typename
      }
      __typename
    }
    marketplaceId
    __typename
  }

  fragment BuyerOrderGroup on AllegroOrderGroup {
    id
    buyer {
      userId
      login
      __typename
    }
    orderDate
    payment {
      ...OrderGroupPayment
      __typename
    }
    offersTotalCost {
      amount
      currency
      __typename
    }
    totalCost {
      amount
      currency
      __typename
    }
    delivery {
      ...Delivery
      __typename
    }
    deliveryAddress {
      id
      firstName
      lastName
      street
      city
      zipCode
      countryCode
      companyName
      phoneNumber
      email
      __typename
    }
    fulfilment {
      ...FulfilmentOrderDetails
      __typename
    }
    parcelTracking {
      ...ParcelTracking
      __typename
    }
    disputes {
      ... on Dispute {
        disputeId
        status
        __typename
      }
      __typename
    }
    pokCases {
      ... on PokCasePayload {
        identificationNumber
        status
        __typename
      }
      __typename
    }
    hasInvoice
    cancellation {
      ...OrderGroupCancellation
      __typename
    }
    orders {
      ...BuyerOrder
      __typename
    }
    __typename
  }

  fragment BuyerOrderGroupsOffset on AllegroOrderGroupsOffset {
    data {
      ...BuyerOrderGroup
      __typename
    }
    nextOffset
    __typename
  }

  fragment UserOrders on User {
    orders {
      boughtOrderGroupedByDelivery(offset: $offset, limit: $limit, filters: $filters) {
        ...BuyerOrderGroupsOffset
        __typename
      }
      __typename
    }
    __typename
  }

  query BuyerOrders($userId: UserId!, $offset: Int!, $limit: Int!, $filters: BoughtOrderGroupedOrderFilters) {
    user(userId: $userId) {
      ... on User {
        ...UserOrders
        __typename
      }
      __typename
    }
  }
`;
