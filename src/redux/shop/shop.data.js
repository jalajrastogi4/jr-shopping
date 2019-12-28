const SHOP_DATA = {
  laptops: {
    id: 1,
    title: 'Laptops',
    routeName: 'laptops',
    items: [
      {
        id: 1,
        name: 'Dell Ins-15',
        imageUrl: 'https://surplusclearanceinc.com/wp-content/uploads/2018/06/IMG_4257-DellInspironLaptop.jpg',
        price: 44999
      },
      {
        id: 2,
        name: 'Dell XPS 5',
        imageUrl: 'https://46c4ts1tskv22sdav81j9c69-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/Dell-XPS-5.jpg',
        price: 28999
      },
      {
        id: 3,
        name: 'Asus Zenbook pro',
        imageUrl: 'https://www.notebookcheck.net/uploads/tx_nbc2/AsusZenBookProDuoUX481.jpg',
        price: 269999
      },
      {
        id: 4,
        name: 'HP Pavillion 15',
        imageUrl: 'https://ksassets.timeincuk.net/wp/uploads/sites/54/2019/09/HP-Pavilion-15-cs1506sa-review-01-920x690.jpg',
        price: 51999
      },
      {
        id: 5,
        name: 'HP EliteBook 840',
        imageUrl: 'https://www.gbuksystems.com/content/images/thumbs/0002604_hp-elitebook-840-g1.jpeg',
        price: 132999
      },
      {
        id: 6,
        name: 'MacBook Pro',
        imageUrl: 'https://ksassets.timeincuk.net/wp/uploads/sites/54/2017/05/macbook-pro-15-2-920x518.jpg',
        price: 169999
      },
      {
        id: 7,
        name: 'Lenovo IdeaPad',
        imageUrl: 'https://sm.pcmag.com/t/pcmag_in/gallery/l/lenovo-ide/lenovo-ideapad-s940_6rv8.740.jpg',
        price: 24999
      },
      {
        id: 8,
        name: 'MSI Evoke',
        imageUrl: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/144117-laptops-news-msi-unveils-new-line-of-gaming-laptops-including-the-world%E2%80%99s-first-intel-core-i9-powered-laptop-image1-vlu8d01wb5.jpg',
        price: 97999
      },
      {
        id: 9,
        name: 'MSI GS series',
        imageUrl: 'https://assets.pcmag.com/media/images/657224-msi-ge65-raider-2019.jpg?thumb=y&width=980&height=456',
        price: 198999
      }
    ]
  },
  mouse: {
    id: 2,
    title: 'Mouse',
    routeName: 'mouse',
    items: [
      {
        id: 10,
        name: 'Logitech GX',
        imageUrl: 'https://www.howtogeek.com/wp-content/uploads/2017/03/0022317_0.jpeg',
        price: 3699
      },
      {
        id: 11,
        name: 'ROG Spatha',
        imageUrl: 'https://techanthology.com/wp-content/uploads/2016/11/animate_6.jpg',
        price: 7499
      },
      {
        id: 12,
        name: 'Aorus Thunder',
        imageUrl: 'https://www.techpowerup.com/img/14-07-10/AORUS_Thunder_M7_01.jpg',
        price: 9500
      },
      {
        id: 13,
        name: 'Razor DeathAdder',
        imageUrl: 'https://www.picochip.com/wp-content/uploads/Razer-DeathAdder-Elite-1.jpg',
        price: 11600
      },
      {
        id: 14,
        name: 'LogiTech G5',
        imageUrl: 'https://ksassets.timeincuk.net/wp/uploads/sites/54/2019/07/gallery03-03-full-2x-v1-2-920x491.jpg',
        price: 2599
      },
      {
        id: 15,
        name: 'ZeroDate X70',
        imageUrl: 'https://www.aorus.com/upload/Product/F_2018092708284820fEbX.JPG',
        price: 13999
      },
      {
        id: 16,
        name: 'MSI Clutch',
        imageUrl: 'https://i1.wp.com/play3r.net/wp-content/uploads/2019/08/MSI-Clutch-GM50-Gaming-Mouse-Featured-Image.jpg?fit=745%2C483&ssl=1',
        price: 10900
      },
      {
        id: 17,
        name: 'Razor Basilisk',
        imageUrl: 'https://ksassets.timeincuk.net/wp/uploads/sites/54/2019/03/Razer-Basilisk-Essential7-e1553596427250-920x613.jpg',
        price: 7199
      }
    ]
  },
  keyboard: {
    id: 3,
    title: 'Keyboard',
    routeName: 'keyboard',
    items: [
      {
        id: 18,
        name: 'Corsair K57',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/GsUXYTH9xYkmMNFhGnDQXm-1366-80.jpg',
        price: 12599
      },
      {
        id: 19,
        name: 'LogiTech GPro',
        imageUrl: 'https://icdn9.digitaltrends.com/image/digitaltrends/logitechpro02-768x479-c.jpg',
        price: 3599
      },
      {
        id: 20,
        name: 'Razor Black Widow',
        imageUrl: 'https://ksassets.timeincuk.net/wp/uploads/sites/54/2019/03/Razer-BlackWidow-2019-Close-Up-920x613.png',
        price: 4599
      },
      {
        id: 21,
        name: 'Roccat Vulcan',
        imageUrl: 'https://ksassets.timeincuk.net/wp/uploads/sites/54/2018/06/Roccat-Vulcan-100-Hero-920x613.jpg',
        price: 10999
      },
      {
        id: 22,
        name: 'Razor H-Elite',
        imageUrl: 'https://img.mobygeek.com/resize/730x-/2019/12/09/maxresdefault-1-compressed-a0c9.jpg',
        price: 8990
      }
    ]
  },
  graphic: {
    id: 4,
    title: 'Graphic',
    routeName: 'graphic',
    items: [
      {
        id: 23,
        name: 'GeForce GT710',
        imageUrl: 'https://i0.wp.com/www.rigassembler.com/media/2019/05/30_bab20a2e-f274-4a76-8bc1-66dffaa89aec.jpg?fit=1000%2C1000&ssl=1',
        price: 4250
      },
      {
        id: 24,
        name: 'GeForce GTX1070',
        imageUrl: 'https://5.imimg.com/data5/IV/PC/MY-35935661/amd-and-nvidia-graphic-card-for-gaming-and-workstation-500x500.png',
        price: 113060
      },
      {
        id: 25,
        name: 'ROG Strix',
        imageUrl: 'https://static2.raru.co.za/cover/2018/11/05/7000304-l.jpg?v=1541409360',
        price: 57990
      },
      {
        id: 26,
        name: 'MSI-RX5700',
        imageUrl: 'https://www.pcbworldtech.com/wp-content/uploads/2019/09/MSI-RX5700-MECH-OC-5.png',
        price: 17000
      },
      {
        id: 27,
        name: 'MSI Evoke',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71QeGoEpyaL._SL1500_.jpg',
        price: 45999
      },
      {
        id: 28,
        name: 'Asus GTX 1050',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81-pAz2ReKL._SL1500_.jpg',
        price: 10800
      },
      {
        id: 29,
        name: 'Radeon RX550',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81%2B7AmR1iYL._SL1500_.jpg',
        price: 17999
      }
    ]
  },
  processor: {
    id: 5,
    title: 'Processor',
    routeName: 'processor',
    items: [
      {
        id: 30,
        name: 'AMD Ryzen 5',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/xBBbottqErKm3JphcWA2mT-970-80.jpg',
        price: 18999
      },
      {
        id: 31,
        name: 'AMD ThreadRipper',
        imageUrl: 'https://i.pinimg.com/474x/71/37/a3/7137a371d33b88131097bca3feb9ae35.jpg',
        price: 89999
      },
      {
        id: 32,
        name: 'Intel i9-9th gen',
        imageUrl: 'https://maytinhbanbuon.com.vn/media/product/5131_intel_core_i9_9820x_2.jpg',
        price: 44500
      },
      {
        id: 33,
        name: 'Intel i5-9th gen',
        imageUrl: 'https://www.technewstoday.com/wp-content/uploads/2018/12/Best-Intel-CPU-For-Gaming-%E2%80%93-Intel-Core-i5-9600K-Processor-2.jpg',
        price: 11990
      },
      {
        id: 34,
        name: 'Intel i3-8th gen',
        imageUrl: 'https://www.technewstoday.com/wp-content/uploads/2018/12/Best-Budget-Gaming-CPU-%E2%80%93-Intel-i3-8100-Processor.jpg',
        price: 10999
      },
      {
        id: 35,
        name: 'AMD Ryzen 7',
        imageUrl: 'https://www.technewstoday.com/wp-content/uploads/2018/12/Best-CPU-For-Streaming-%E2%80%93-AMD-Ryzen-7-2700X-Processor.jpg',
        price: 22999
      }
    ]
  }
};

export default SHOP_DATA;
