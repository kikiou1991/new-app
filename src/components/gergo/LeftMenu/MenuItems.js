export const menuItems = {
  brand: [
    {
      name: "dashboard",
      module: "brand",
      feature: "dashboard",
      app: "brands",
      anySubID: false,
    },
    {
      name: "reports",
      module: "brand",
      feature: "reports",
      app: "brands",
      haveSubmenu: true,
      submenus: [
        {
          name: "shift-reports",
          app: "brands",
          feature: "reports",
        },
        {
          name: "documents",
          app: "brands",
          feature: "documents",
        },
      ],
    },
    // {
    //   name: "documents",
    //   module: "brand",
    //   feature: "documents",
    //   app: "brands",
    // },
    {
      name: "locations",
      module: "brand",
      feature: "listLocations",
      app: "brands",
    },
    {
      name: "devices",
      module: "brand",
      feature: "listDevices",
      app: "brands",
      haveSubmenu: true,

      submenus: [
        {
          name: "pos-devices",
          app: "brands",
          feature: "listDevices",
        },
        {
          name: "kiosk-devices",
          app: "brands",
          feature: "listDevices",
        },
        {
          name: "om-devices",
          app: "brands",
          feature: "listDevices",
        },
        {
          name: "printer-devices",
          app: "brands",
          feature: "listPrinters",
        },
      ],
    },
    {
      name: "payments",
      module: "brand",
      feature: "listPayments",
      app: "brands",
    },
    {
      name: "tables",
      module: "brand",
      feature: "listTables",
      anySubID: true,
      app: "brands",
    },
    {
      name: "orders",
      module: "brand",
      feature: "listOrders",
      anySubID: true,
      app: "brands",
    },
    {
      name: "catalog",
      module: "brand",
      haveSubmenu: true,
      anySubID: true,

      submenus: [
        {
          name: "menu-editor",
          app: "brands",
          feature: "listItems",
        },
        {
          name: "modifiers",
          app: "brands",
          feature: "listItems",
        },
        // {
        //   name: "upsell",
        //   app: "brands",
        //   feature: "listItems",
        // },
        {
          name: "package",
          app: "brands",
          feature: "listItems",
        },
        {
          name: "vat-groups",
          app: "brands",
          feature: "listItems",
        },
        {
          name: "item-availability",
          app: "brands",
          anySubID: true,
          feature: "listItemAvailability",
        },
        {
          name: "modifier-availability",
          app: "brands",
          anySubID: true,
          feature: "listItemAvailability",
        },
        {
          name: "discounts",
          app: "brands",
          feature: "listDiscounts",
        },
        {
          name: "prepcounters",
          app: "brands",
          feature: "listItems",
        },
        {
          name: "item-extid-schema",
          app: "brands",
          feature: "listItems",
          fruitOnly: true,
        },
        {
          name: "modifier-extid-schema",
          app: "brands",
          feature: "listItems",
          fruitOnly: true,
        },
      ],
    },
    {
      name: "users",
      module: "brand",
      feature: "listUsers",
      app: "brands",
    },
    {
      name: "tools",
      module: "brand",
      onlyGlobalAdmin: true,
      haveSubmenu: true,

      submenus: [
        {
          name: "fruitVsIpanel",
          app: "brands",
          feature: "listItems",
          fruitOnly: true,
        },
        {
          name: "contents",
          app: "brands",
          feature: "listContents",
        },
        {
          name: "integration-schemes",
          app: "brands",
          feature: "listItems",
        },
        {
          name: "dictionary",
          app: "brands",
          feature: "listItems",
        },
        {
          name: "email-schemes",
          app: "brands",
          feature: "listItems",
        },
        {
          name: "news",
          app: "brands",
          feature: "listItems",
        },
      ],
    },
    {
      name: "appHub",
      module: "brand",
      onlyGlobalAdmin: true,
      haveSubmenu: true,

      submenus: [
        {
          name: "kiosk",
          app: "brands",
          feature: "listItems",
        },
        {
          name: "brandApp",
          app: "brands",
          feature: "listItems",
        },
        {
          name: "POS",
          app: "brands",
          feature: "listItems",
        },
      ],
    },
    {
      name: "error-logs",
      module: "brand",
      feature: "listLogs",
      onlyGlobalAdmin: true,

      app: "brands",
    },
  ],
  global: [
    {
      name: "dashboard",
      module: "global",
      app: "global",
      feature: "dashboard",
    },
    {
      name: "brands",
      module: "global",
      app: "global",
      feature: "listBrands",
    },
    {
      name: "dictionary",
      module: "global",
      app: "global",
      feature: "devices",
    },
    {
      name: "devices",
      module: "global",
      app: "global",
      feature: "devices",
    },
    {
      name: "invites",
      module: "global",
      feature: "listInvitation",
      app: "global",
    },
    {
      name: "resellers",
      module: "global",
      app: "global",
      feature: "listResellers",
    },
    {
      name: "registrations",
      module: "global",
      app: "global",
      feature: "listRegistrations",
    },
    {
      name: "schemes",
      module: "global",
      app: "global",
      feature: "templates",
    },
    {
      name: "logs",
      module: "global",
      app: "global",
      feature: "listLogs",
    },
    {
      name: "billing",
      module: "global",
      app: "global",
      feature: "billing",
    },
  ],
  reseller: [
    {
      name: "dashboard",
      module: "reseller",
      app: "reseller",
      feature: "listBrands",
    },
    {
      name: "brands",
      module: "reseller",
      app: "reseller",
      feature: "listBrands",
    },
    {
      name: "registrations",
      module: "reseller",
      feature: "listBrandInits",
      app: "reseller",
    },
    {
      name: "invites",
      module: "reseller",
      feature: "listInvitation",
      app: "reseller",
    },
  ],
};
