import type { GuideDto } from "../../../interfaces";

export const getGuide = async (code: string): Promise<GuideDto | null> => {

  console.log(code);

  // const resp = await fetch('http://localhost:3000/api/guides/search', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(code),
  // });

  // if (!resp.ok) {
  //   return [];
  // }

  return {
    "code": "NYC-SFE-000001",
    "sender": {
      "id_number": 41940600,
      "id_type": "dni",
      "name": "Ezequiel Medina",
      "email": "tec.medinaeze@gmail.com",
      "phone": "3425502666",
      "address": "Las heras 7460"
    },
    "receiver": {
      "id_number": 21416403029,
      "id_type": "cuit",
      "name": "Pochito Lopez",
      "email": "poc.lopez@gmail.com",
      "phone": "3425406333",
      "address": "Los granitos 1430"
    },
    "origin": {
      "province": "Buenos Aires",
      "city": "Mar del Plata"
    },
    "destination": {
      "province": "Santa Fe",
      "city": "Santo Tomé"
    },
    "insurance": {
      "contracted": true,
      "declaredValue": 50000,
      "insuranceCost": 2500
    },
    "items": [
      {
        "quantity": 10,
        "description": "Item 1",
        "paid": 10000,
        "remainingAmount": 4500,
        "currentAccount": false
      },
      {
        "quantity": 10,
        "description": "Item 2",
        "paid": 14000,
        "remainingAmount": 5050,
        "currentAccount": false
      },
      {
        "quantity": 10,
        "description": "Item 3",
        "paid": 3000,
        "remainingAmount": 500,
        "currentAccount": true
      }
    ],
    "movements": [
      {
        "date": '2026-08-25 09:15',
        "status": 'PENDIENTE_RETIRO',
        "move": 'Creación de orden',
        "message": 'La orden ha sido creada y está pendiente de retiro.',
        "location": {
          "city": 'Santo Tomé',
          "province": 'Santa Fe',
        },
      },
      {
        "date": '2026-08-25 11:30',
        "status": 'EN_CAMINO_RETIRO',
        "move": 'Inicio del retiro',
        "message": 'El vehículo se encuentra en camino a la ubicación de retiro.',
        "location": {
          "city": 'Santo Tomé',
          "province": 'Santa Fe',
        },
      },
      {
        "date": '2026-08-26 08:45',
        "status": 'EN_POSESION',
        "move": 'Paquete retirado',
        "message": 'El paquete ha sido retirado y se encuentra en posesión de la empresa.',
        "location": {
          "city": 'Cordoba',
          "province": 'Cordoba',
        },
      },
      {
        "date": '2026-08-26 09:00',
        "status": 'EN_TRANSITO',
        "move": 'Inicio del traslado',
        "message": 'El paquete ha iniciado su traslado directo hacia el destino.',
        "location": {
          "city": 'Cordoba',
          "province": 'Cordoba',
        },
      }
    ],
    "next_movement": {
      "date": '',
      "status": 'ENTREGADO',
      "move": 'Entrega realizada',
      "message": 'El paquete ha sido entregado correctamente en el destino.',
      "location": {
        "city": 'Santa Fe',
        "province": 'Santa Fe',
      }
    }
  }
};