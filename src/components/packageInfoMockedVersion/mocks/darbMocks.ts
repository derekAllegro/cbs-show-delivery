export const darbMocks = {
  data: {
    user: {
      orders: {
        boughtOrderGroupedByDelivery: {
          data: [
            {
              id: "9c9f69ca-13df-355b-9a98-1d31e3fc9d7c",
              buyer: {
                userId: "106736730",
                login: "Client:106736730",
                __typename: "User",
              },
              orderDate: "2023-11-13T08:55:22.024Z",
              payment: {
                id: "5ba72525-8202-11ee-9b73-1d6ddb53dd4c",
                status: "PAID",
                method: {
                  description: "Santander Bank Polska",
                  __typename: "PaymentMethod",
                },
                buyer: {
                  userId: "106736730",
                  __typename: "User",
                },
                discounts: null,
                currencyExchange: null,
                splitPayment: false,
                buyerPaidAmount: {
                  amount: "124.00",
                  currency: "PLN",
                  __typename: "Money",
                },
                device: "DESKTOP",
                transactions: [
                  {
                    allegroCareProducts: [],
                    __typename: "Transaction",
                  },
                ],
                __typename: "Payment",
              },
              offersTotalCost: {
                amount: "124.00",
                currency: "PLN",
                __typename: "Money",
              },
              totalCost: {
                amount: "124.00",
                currency: "PLN",
                __typename: "Money",
              },
              delivery: {
                __typename: "Delivery",
                id: "5b49c210-8202-11ee-b2b4-a7543d452647",
                address: {
                  id: "8f8822de-e898-4b9e-b654-47dcee79916e",
                  firstName: "o",
                  lastName: "g",
                  street: "Wierzbięcice 1",
                  city: "Poznań",
                  zipCode: "60-688",
                  countryCode: "PL",
                  companyName: null,
                  phoneNumber: "+48123456789",
                  email: null,
                  __typename: "Address",
                },
                method: {
                  id: "0aafb43c-e66a-46ec-9cc4-29bb39ebb483",
                  name: "Allegro One Box",
                  __typename: "DeliveryMethod",
                },
                numberOfPackages: 1,
                pickupPoint: {
                  name: "Allegro One Box, zielony automat",
                  description: null,
                  address: {
                    street: "osiedle Marysieńki 25",
                    zipCode: "60-688",
                    city: "Poznań",
                    __typename: "DeliveryPickupPointAddress",
                  },
                  __typename: "DeliveryPickupPoint",
                },
                finalCost: {
                  amount: "0.00",
                  currency: "PLN",
                  __typename: "Money",
                },
                netEstimatedFinalCost: {
                  amount: "0.00",
                  currency: "PLN",
                  __typename: "Money",
                },
                isSmart: false,
                smartLabels: ["ALLEGRO ONE"],
              },
              deliveryAddress: {
                id: "8f8822de-e898-4b9e-b654-47dcee79916e",
                firstName: "o",
                lastName: "g",
                street: "Wierzbięcice 1",
                city: "Poznań",
                zipCode: "60-688",
                countryCode: "PL",
                companyName: null,
                phoneNumber: "+48123456789",
                email: null,
                __typename: "Address",
              },
              fulfilment: null,
              parcelTracking: {
                waybills: [
                  {
                    waybillId: "A00003LKR9",
                    carrier: {
                      trackingUrl: "https://allegro.pl/kampania/one/kurier/sledzenie-paczki?numer=A00003LKR9",
                      __typename: "NamedCarrier",
                    },
                    currentParcelStatus: {
                      reachedAt: "2023-11-15T11:56:58.764Z",
                      code: "PENDING",
                      name: "Pending dispatch",
                      __typename: "ParcelStatus",
                    },
                    parcelDetailedHistory: [
                      {
                        date: "2023-11-15T11:56:58.764Z",
                        description: "The parcel has been prepared by the sender",
                        __typename: "ParcelDetailedHistoryItem",
                      },
                    ],
                    __typename: "Waybill",
                  },
                ],
                deliveryTime: {
                  estimatedDeliveryDates: {
                    from: "2023-11-15",
                    to: "2023-11-15",
                    __typename: "EstimatedDeliveryDates",
                  },
                  guaranteedDeliveryDates: null,
                  declaredDispatchDate: "2023-11-13T22:59:59.999Z",
                  delayInfo: {
                    status: "DELIVERY_DELAY",
                    __typename: "DelayInfo",
                  },
                  __typename: "DeliveryTime",
                },
                __typename: "ParcelTracking",
              },
              disputes: [
                {
                  __typename: "DisputeNotFound",
                },
              ],
              pokCases: [
                {
                  __typename: "PokCaseNotFound",
                },
              ],
              hasInvoice: false,
              cancellation: {
                available: false,
                cancelledByBuyer: true,
                cancelledBy: null,
                cancelledDate: "2023-11-13T08:57:18.421Z",
                adminDepartment: null,
                additionalInfo: null,
                mode: "ORDER_CANCELLED",
                __typename: "Cancellation",
              },
              orders: [
                {
                  id: "3c774920-8202-11ee-b2b4-a7543d452647",
                  orderDate: "2023-11-13T08:55:22.024Z",
                  buyerNotes: "",
                  hiddenInMyOrders: false,
                  seller: {
                    userId: "43544065",
                    login: "cmpVer_1_pl",
                    __typename: "User",
                  },
                  returnState: "RETURNED",
                  offers: [
                    {
                      finalPrice: {
                        __typename: "Money",
                      },
                      collectiveFinalPrice: {
                        __typename: "Money",
                      },
                      sellerPrice: {
                        unitPrice: {
                          net: null,
                          gross: {
                            __typename: "Money",
                          },
                          __typename: "ItemPrice",
                        },
                        collectivePrice: {
                          net: null,
                          gross: {
                            __typename: "Money",
                          },
                          __typename: "ItemPrice",
                        },
                        __typename: "OrderOfferPrice",
                      },
                      additionalServices: [],
                      offer: {
                        __typename: "AllegroOffer",
                      },
                      refunds: [],
                      voucherDiscounts: [],
                      __typename: "OrderOffer",
                    },
                  ],
                  buyer: {
                    login: "Client:106736730",
                    __typename: "User",
                  },
                  fulfilment: null,
                  totalCost: {
                    amount: "124.00",
                    currency: "PLN",
                    __typename: "Money",
                  },
                  invoice: null,
                  marketplaceId: "allegro-pl",
                  __typename: "AllegroOrder",
                },
              ],
              __typename: "AllegroOrderGroup",
            },
          ],
          nextOffset: 1,
          __typename: "AllegroOrderGroupsOffset",
        },
        __typename: "UserOrders",
      },
      __typename: "User",
    },
  },
};
