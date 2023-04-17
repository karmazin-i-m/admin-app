import { ItemState } from "./Types/BasketTypes";
import { OrderHistory } from "./Types/HistoryTypes";
import { OrderState } from "./Types/OrderTypes";

export const logs : Array<OrderHistory> = [
    {
      orderId: "b7fd9bf2-b205-474e-a993-aa82277f0da9",
      orderStates: [
        {
          id: "b7fd9bf2-b205-474e-a993-aa82277f0da9",
          basketId: "349cde6c-fef4-43b1-96c7-d53c30d75d97",
          invoiceId: "00000000-0000-0000-0000-000000000000",
          orderState: OrderState.New,
          totalSum: 0,
          discaunt: 0,
          amount: 0,
          createdAt: new Date(Date.parse("2023-02-02T12:35:46.825929Z")),
          editedAt: new Date(Date.parse("2023-02-02T12:35:46.825962Z"))
        }
      ],
      orderLogEntry: [
        {
          id: "c10832bb-2b46-4fa9-8c84-7c889be9a4aa",
          creationTime: new Date(Date.parse("2023-02-02T12:35:47.085279Z")),
          source: "OrderHistoryService",
          text: "Created historyEntity for Order with Id = b7fd9bf2-b205-474e-a993-aa82277f0da9"
        }
      ],
      basketHistory: {
        basketId: "349cde6c-fef4-43b1-96c7-d53c30d75d97",
        editedAt: new Date(Date.parse("2023-02-02T12:35:48.103521Z")),
        basketStates: [
          {
            id: "349cde6c-fef4-43b1-96c7-d53c30d75d97",
            productItems: []
          },
          {
            id: "349cde6c-fef4-43b1-96c7-d53c30d75d97",
            productItems: []
          }
        ],
        basketLogEntry: [
          {
            id: "145920f0-b25c-40a3-a21d-8ad0d5c95567",
            creationTime: new Date(Date.parse("2023-02-02T12:35:48.103296Z")),
            source: "BasketHistoryService",
            text: "Add new basket state."
          },
          {
            id: "84c00244-a17b-4a04-965a-b1c10704e561",
            creationTime: new Date(Date.parse("2023-02-02T12:35:45.97586Z")),
            source: "BasketHistoryService",
            text: "Created historyEntity for Basket with Id = 349cde6c-fef4-43b1-96c7-d53c30d75d97"
          },
          {
            id: "92fda87b-c319-4aa5-b90f-722c446015af",
            creationTime: new Date(Date.parse("2023-02-02T12:35:47.611554Z")),
            source: "BaseBasketService",
            text: "Add item to basket wit id = 349cde6c-fef4-43b1-96c7-d53c30d75d97"
          }
        ]
      }
    },
    {
      orderId: "e6ad811b-27e0-4588-8b07-3d1ae221d6c0",
      orderStates: [
        {
          id: "e6ad811b-27e0-4588-8b07-3d1ae221d6c0",
          basketId: "7aedb72a-aab2-428b-b392-68bed2a4c9af",
          invoiceId: "00000000-0000-0000-0000-000000000000",
          orderState: OrderState.New,
          totalSum: 0,
          discaunt: 0,
          amount: 0,
          createdAt: new Date(Date.parse("2023-02-20T14:59:39.101174Z")),
          editedAt: new Date(Date.parse("2023-02-20T14:59:39.10123Z"))
        }
      ],
      orderLogEntry: [
        {
          id: "e1ca83f6-72ed-4643-9b93-73b7ac669f06",
          creationTime: new Date(Date.parse("2023-02-20T14:59:39.342036Z")),
          source: "OrderHistoryService",
          text: "Created historyEntity for Order with Id = e6ad811b-27e0-4588-8b07-3d1ae221d6c0"
        }
      ],
      basketHistory: {
        basketId: "7aedb72a-aab2-428b-b392-68bed2a4c9af",
        editedAt: new Date(Date.parse("2023-02-20T15:07:05.015162Z")),
        basketStates: [
          {
            id: "7aedb72a-aab2-428b-b392-68bed2a4c9af",
            productItems: [
              {
                id: "271b5c02-4e67-480a-a518-e93af707c8ca",
                index: 0,
                itemState: ItemState.Active,
                name: "Вершкова паста ",
                description: "Букатіні з додаванням оливкової оліі, часнику та вершків. Прикрашаємо сиром грана падано та зеленню",
                price: 16500,
                count: 4,
                tags: [],
                modifiers: []
              },
              {
                id: "2e935c0b-bf67-4975-af40-b575dd3595c3",
                index: 1,
                itemState: ItemState.Active,
                name: "Дранк паста з курячим шніцелем і сиром грана падано",
                description: "Букатіні з томатним соусом в поєднанні з курячим шніцелем в кукурузній паніровці. Посипаємо сиром грана падано",
                price: 22500,
                count: 2,
                tags: [],
                modifiers: []
              }
            ]
          },
          {
            id: "7aedb72a-aab2-428b-b392-68bed2a4c9af",
            productItems: [
              {
                id: "271b5c02-4e67-480a-a518-e93af707c8ca",
                index: 0,
                itemState: ItemState.Active,
                name: "Вершкова паста ",
                description: "Букатіні з додаванням оливкової оліі, часнику та вершків. Прикрашаємо сиром грана падано та зеленню",
                price: 16500,
                count: 2,
                tags: [],
                modifiers: []
              },
              {
                id: "2e935c0b-bf67-4975-af40-b575dd3595c3",
                index: 1,
                itemState: ItemState.Active,
                name: "Дранк паста з курячим шніцелем і сиром грана падано",
                description: "Букатіні з томатним соусом в поєднанні з курячим шніцелем в кукурузній паніровці. Посипаємо сиром грана падано",
                price: 22500,
                count: 2,
                tags: [],
                modifiers: []
              }
            ]
          },
          {
            id: "7aedb72a-aab2-428b-b392-68bed2a4c9af",
            productItems: [
              {
                id: "271b5c02-4e67-480a-a518-e93af707c8ca",
                index: 0,
                itemState: ItemState.Active,
                name: "Вершкова паста ",
                description: "Букатіні з додаванням оливкової оліі, часнику та вершків. Прикрашаємо сиром грана падано та зеленню",
                price: 16500,
                count: 3,
                tags: [],
                modifiers: []
              },
              {
                id: "2e935c0b-bf67-4975-af40-b575dd3595c3",
                index: 1,
                itemState: ItemState.Active,
                name: "Дранк паста з курячим шніцелем і сиром грана падано",
                description: "Букатіні з томатним соусом в поєднанні з курячим шніцелем в кукурузній паніровці. Посипаємо сиром грана падано",
                price: 22500,
                count: 2,
                tags: [],
                modifiers: []
              }
            ]
          },
          {
            id: "7aedb72a-aab2-428b-b392-68bed2a4c9af",
            productItems: [
              {
                id: "271b5c02-4e67-480a-a518-e93af707c8ca",
                index: 0,
                itemState: ItemState.Active,
                name: "Вершкова паста ",
                description: "Букатіні з додаванням оливкової оліі, часнику та вершків. Прикрашаємо сиром грана падано та зеленню",
                price: 16500,
                count: 1,
                tags: [],
                modifiers: []
              },
              {
                id: "2e935c0b-bf67-4975-af40-b575dd3595c3",
                index: 1,
                itemState: ItemState.Active,
                name: "Дранк паста з курячим шніцелем і сиром грана падано",
                description: "Букатіні з томатним соусом в поєднанні з курячим шніцелем в кукурузній паніровці. Посипаємо сиром грана падано",
                price: 22500,
                count: 2,
                tags: [],
                modifiers: []
              }
            ]
          },
          {
            id: "7aedb72a-aab2-428b-b392-68bed2a4c9af",
            productItems: [
              {
                id: "271b5c02-4e67-480a-a518-e93af707c8ca",
                index: 0,
                itemState: ItemState.Active,
                name: "Вершкова паста ",
                description: "Букатіні з додаванням оливкової оліі, часнику та вершків. Прикрашаємо сиром грана падано та зеленню",
                price: 16500,
                count: 4,
                tags: [],
                modifiers: []
              }
            ]
          },
          {
            id: "7aedb72a-aab2-428b-b392-68bed2a4c9af",
            productItems: []
          },
          {
            id: "7aedb72a-aab2-428b-b392-68bed2a4c9af",
            productItems: [
              {
                id: "271b5c02-4e67-480a-a518-e93af707c8ca",
                index: 0,
                itemState: ItemState.Active,
                name: "Вершкова паста ",
                description: "Букатіні з додаванням оливкової оліі, часнику та вершків. Прикрашаємо сиром грана падано та зеленню",
                price: 16500,
                count: 1,
                tags: [],
                modifiers: []
              }
            ]
          },
          {
            id: "7aedb72a-aab2-428b-b392-68bed2a4c9af",
            productItems: [
              {
                id: "271b5c02-4e67-480a-a518-e93af707c8ca",
                index: 0,
                itemState: ItemState.Voided,
                name: "Вершкова паста ",
                description: "Букатіні з додаванням оливкової оліі, часнику та вершків. Прикрашаємо сиром грана падано та зеленню",
                price: 16500,
                count: 1,
                tags: [],
                modifiers: []
              },
              {
                id: "2e935c0b-bf67-4975-af40-b575dd3595c3",
                index: 1,
                itemState: ItemState.Active,
                name: "Дранк паста з курячим шніцелем і сиром грана падано",
                description: "Букатіні з томатним соусом в поєднанні з курячим шніцелем в кукурузній паніровці. Посипаємо сиром грана падано",
                price: 22500,
                count: 2,
                tags: [],
                modifiers: []
              }
            ]
          }
        ],
        basketLogEntry: [
          {
            id: "03328428-913c-449e-93d7-9a85bd9e90fc",
            creationTime: new Date(Date.parse("2023-02-20T15:06:08.036794Z")),
            source: "BasketHistoryService",
            text: "Add new basket state."
          },
          {
            id: "037eb7ff-3da0-4122-91e6-56fd4d1bcd9f",
            creationTime: new Date(Date.parse("2023-02-20T15:00:08.880879Z")),
            source: "BasketHistoryService",
            text: "Add new basket state."
          },
          {
            id: "2e2fe17f-1226-4297-8646-b8122a6a84b1",
            creationTime: new Date(Date.parse("2023-02-20T15:06:20.524848Z")),
            source: "BasketHistoryService",
            text: "Add new basket state."
          },
          {
            id: "4370eb47-d460-4052-9ef2-20c9529e1ecd",
            creationTime: new Date(Date.parse("2023-02-20T15:06:22.690647Z")),
            source: "BasketHistoryService",
            text: "Add new basket state."
          },
          {
            id: "49fc3cba-21bc-4e98-a0e3-9c98075926e4",
            creationTime: new Date(Date.parse("2023-02-20T15:07:04.833642Z")),
            source: "BaseBasketService",
            text: "Add item to basket wit id = 7aedb72a-aab2-428b-b392-68bed2a4c9af"
          },
          {
            id: "69361a3d-9283-4c68-9143-0559206fd749",
            creationTime: new Date(Date.parse("2023-02-20T15:06:07.557434Z")),
            source: "BaseBasketService",
            text: "Remove item with index = 0 from basket. Basket.Id = 7aedb72a-aab2-428b-b392-68bed2a4c9af"
          },
          {
            id: "8782af37-c366-4bd4-8775-259ef1b6a029",
            creationTime: new Date(Date.parse("2023-02-20T15:06:20.289254Z")),
            source: "BaseBasketService",
            text: "Remove item with index = 0 from basket. Basket.Id = 7aedb72a-aab2-428b-b392-68bed2a4c9af"
          },
          {
            id: "95efbf7c-d7b7-45b5-9351-ca8e8ddd2a17",
            creationTime: new Date(Date.parse("2023-02-20T15:06:18.154902Z")),
            source: "BasketHistoryService",
            text: "Add new basket state."
          },
          {
            id: "b2b5d287-2a62-45e8-8a61-89c117d446fc",
            creationTime: new Date(Date.parse("2023-02-20T15:02:30.513241Z")),
            source: "BasketHistoryService",
            text: "Add new basket state."
          },
          {
            id: "c3728a96-9f1f-4c48-af9d-b8aa90f3b52c",
            creationTime: new Date(Date.parse("2023-02-20T15:06:17.938822Z")),
            source: "BaseBasketService",
            text: "Remove item with index = 0 from basket. Basket.Id = 7aedb72a-aab2-428b-b392-68bed2a4c9af"
          },
          {
            id: "c52a7640-57a9-4748-a6dd-7f4563f622f4",
            creationTime: new Date(Date.parse("2023-02-20T15:00:44.166173Z")),
            source: "BasketHistoryService",
            text: "Add new basket state."
          },
          {
            id: "d3dc0f78-f88f-4dac-827d-da04fdfb8f20",
            creationTime: new Date(Date.parse("2023-02-20T15:06:22.445282Z")),
            source: "BaseBasketService",
            text: "Remove item with index = 0 from basket. Basket.Id = 7aedb72a-aab2-428b-b392-68bed2a4c9af"
          },
          {
            id: "d96a026f-622b-42ed-ade1-245fdb0db36b",
            creationTime: new Date(Date.parse("2023-02-20T15:02:30.282968Z")),
            source: "BaseBasketService",
            text: "Add item to basket wit id = 7aedb72a-aab2-428b-b392-68bed2a4c9af"
          },
          {
            id: "e0183505-5acd-4b8a-b0e7-785e0603abb5",
            creationTime: new Date(Date.parse("2023-02-20T15:00:08.383318Z")),
            source: "BaseBasketService",
            text: "Add item to basket wit id = 7aedb72a-aab2-428b-b392-68bed2a4c9af"
          },
          {
            id: "e183483f-73ff-4335-9eec-8bc1a9cfdded",
            creationTime: new Date(Date.parse("2023-02-20T15:00:43.847274Z")),
            source: "BaseBasketService",
            text: "Add item to basket wit id = 7aedb72a-aab2-428b-b392-68bed2a4c9af"
          },
          {
            id: "ed86189b-346c-4829-b72a-e68f58244f2b",
            creationTime: new Date(Date.parse("2023-02-20T14:59:38.139144Z")),
            source: "BasketHistoryService",
            text: "Created historyEntity for Basket with Id = 7aedb72a-aab2-428b-b392-68bed2a4c9af"
          }
        ]
      }
    }
  ]