export const darsMocks = {
  data: {
    user: {
      orders: {
        sold: {
          data: [
            {
              delivery: {
                costTransfers: [
                  {
                    tags: ["HUB", "DHL_INTERNATIONAL_COD_BROKER"],
                  },
                ],
              },
              score: {
                waybillInTime: true,
                dispatchInTime: false,
              },
            },
            {
              delivery: {
                costTransfers: [
                  {
                    tags: ["APM_BROKER", "HUB"],
                  },
                ],
              },
              score: {
                waybillInTime: true,
                dispatchInTime: true,
              },
            },
          ],
        },
      },
    },
  },
};
