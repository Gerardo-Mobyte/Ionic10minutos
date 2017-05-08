import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataProvider {

  private data = {
    "id": 5765283616653312,
    "published": true,
    "feedbackEnabled": false,
    "days": [
      {
        "id": 5642674782601216,
        "name": "May 12th",
        "tracks": [
          {
            "id": 5766103821189120,
            "name": "Track 1",
            "slots": [
              {
                "id": 99964001,
                "start": "17:30",
                "end": "17:45",
                "contents": {
                  "type": "TALK",
                  "id": 5740442599555072,
                  "title": "Welcome",
                  "description": "Welcome aboard #JSDayES2017! Fasten your seatbelts and keep the seat upright for take-off and landing.",
                  "creationDate": 1490050541956,
                  "authors": [
                    {
                      "id": 6280336195452928,
                      "uuid": "alejandrofer",
                      "name": "Alex Fernandez",
                      "avatar": "https://storage.googleapis.com/k-avatars/6280336195452928-bcf2b383",
                      "description": "JSDayES organizer, involved in MadridJS and Node.js Madrid, and Master of Ceremonies for special occasions.",
                      "feedback": {
                        "ratingAverage": 4.17,
                        "entriesCount": 40
                      },
                      "twitterAccount": "pinchito"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "English"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 6,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5766103821189120
              },
              {
                "id": 99974001,
                "start": "17:45",
                "end": "18:30",
                "contents": {
                  "type": "TALK",
                  "id": 6271626035331072,
                  "title": "The Next Evolution of the JavaScript Ecosystem",
                  "description": "The innovation cycles in the JavaScript world are becoming shorter and shorter. Amazing new projects and tools are emerging on what seems like a daily basis. Kris Borchers, Executive Director of the JS Foundation will share some insights and goals that the JS Foundation has to create a focal point for the JavaScript ecosystem. Kris will share how they intend to help developers navigate this landscape and how you can join these efforts and in turn, support your own projects, applications and organizations.",
                  "creationDate": 1490120312511,
                  "authors": [
                    {
                      "id": 105104003,
                      "uuid": "krisborchers",
                      "name": "Kris Borchers",
                      "avatar": "https://storage.googleapis.com/k-avatars/105104003-43a76166",
                      "description": "As Executive Director of the JS Foundation, Kris is guiding the organization that supports the most widely used JavaScript project in the world into an organization that has become a key player in the entire open source JavaScript ecosystem. As he works to further build and strengthen relationships with and between some of the largest corporations and most creative individuals that are using, creating and sharing open source technology, Kris is taking the Foundation's reach far beyond the browser and into projects spanning server technologies, IoT and beyond.",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      }
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "English"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 10,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5766103821189120
              },
              {
                "id": 105094001,
                "start": "18:30",
                "end": "19:00",
                "contents": {
                  "type": "BREAK",
                  "title": "Coffee Break"
                },
                "userId": 69304001,
                "trackId": 5766103821189120
              },
              {
                "id": 97844001,
                "start": "19:00",
                "end": "19:10",
                "contents": {
                  "type": "TALK",
                  "id": 5688026416021504,
                  "title": "You might not need lodash",
                  "description": "Functional programming? Lambda calculus?? and… **JAVASCRIPT**!? This talk is an *introduction* to functional programming and how to solve some of the most common issues while using native JavaScript code, **without libraries**, without nonsense (in order to do that I will use my favourite ES2015 feature, *arrow functions!*). ",
                  "creationDate": 1482393987341,
                  "authors": [
                    {
                      "id": 75124003,
                      "uuid": "flaviocorpa",
                      "name": "Flavio Corpa Ríos",
                      "avatar": "https://storage.googleapis.com/k-avatars/75124003-6e9542a1",
                      "description": "Front-End Engineer at the EUIPO (European Union Intelligence Property Office) · JavaScript Enthusiast • Functional / Reactive Programming • Refactoring is my bow and lambdas, my arrows.",
                      "feedback": {
                        "ratingAverage": 3.26,
                        "entriesCount": 38
                      },
                      "twitterAccount": "FlavioCorpa"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "English"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 2,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5766103821189120
              },
              {
                "id": 102064001,
                "start": "19:10",
                "end": "19:20",
                "contents": {
                  "type": "TALK",
                  "id": 5763985328570368,
                  "title": "Pitching your JS: 4 Steps to Sell to More Clients Now",
                  "description": "A 10 minute lightning talk about how to sell better to clients. With a focus on how to talk \"tech\" without your client losing concentration (or consciousness!).\n\nMatt is an elevator pitch coach who has helped more than 100 Madrid-based startups, as well as companies like Banco Santander, Sanitas and PwC, identify their essential story and sell it to clients through a concise, exciting startup pitch. \n\nHe believes that if you want to excite people, you need to make your pitch less like a conventional presentation and more like Game of Thrones. Fewer pie charts, more story (and possibly more dragons).\n\nIf you have any questions, you can find Matt here:\nTwitter - @MattBoardman\nFacebook – www.facebook.com/MattBoardmanCoach",
                  "creationDate": 1492440478012,
                  "authors": [
                    {
                      "id": 109274001,
                      "uuid": "matt1",
                      "name": "Matt Boardman",
                      "avatar": "https://storage.googleapis.com/k-avatars/109274001-907d5aac",
                      "description": "Matt es un coach del “elevator pitch” que ha ayudado a más de 100 startups en Madrid a identificar su historia esencial y venderla a inversores a través de una presentación concisa y emocionante. Cree que, sea un pitch formal o sea una conversación casual, sólo tenemos una oportunidad de 2 a 5 minutos para convencer a un inversor o perderle. \n\nDe Inglaterra, y graduado en la Universidad de Cambridge, Matt fue consultor de liderazgo en Deloitte durante 3 años donde gestionó una academia de liderazgo para el Gobierno del Reino Unido. Por 2 años ha estado formando a empresas sobre cómo hablar en público, para clientes como el IE Business School, Google Campus, la Universidad Politécnica de Madrid, Sanitas y Banco Santander.\n\nQuieres preguntarle algo? Contacta a Matt:\nTwitter - @MattBoardman\nFacebook – www.facebook.com/MattBoardmanCoach",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      }
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "English"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 0,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5766103821189120
              },
              {
                "id": 97854001,
                "start": "19:20",
                "end": "19:30",
                "contents": {
                  "type": "TALK",
                  "id": 5102388566294528,
                  "title": "Ionic en 10 minutos",
                  "description": "Se trata de una Ligthning Talk sobre el framework Ionic, un framework Javascript, basado en Angular y destinado al desarrollo de aplicaciones híbridas para dispositivos móviles.\n\nLa charla tratará de concentrar rápidamente el origen de este framework, su evolución hasta la actualidad y la arquitectura básica de las apps desarrolladas con el mismo, así como las características que pueden implementarse hasta obtener una app robusta y que no tenga nada que envidiar a las apps nativas.",
                  "creationDate": 1492617481118,
                  "authors": [
                    {
                      "id": 100914001,
                      "uuid": "parragerardo",
                      "name": "Gerardo Parra Juan de la Cruz",
                      "avatar": "https://storage.googleapis.com/k-avatars/100914001-1c3f49a1",
                      "description": "Mi nombre es Gerardo Parra (@gerardoparrajc) y soy Informático. Sí, soy Ingeniero Informático por la Universidad de Almería y aunque mi destino era la animación 3D, al final acabé desarrollando para la web en PHP. FInalmente, junto con mi socio Javier Orellana, creamos nuestra empresa, Mobyte Studio en la que desarrollamos aplicaciones web y aplicaciones móviles híbridas. Ahí conocí JavaScript, Angular, Ionic, y me enamoré, hasta la fecha.\n\nAdemás, me gustan los videojuegos, la música y el cine. Tengo dos hijos guapísimos y me gusta contar cosas que puedan ser interesantes.",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      },
                      "twitterAccount": "gerardoparrajc"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "Español"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 2,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5766103821189120
              },
              {
                "id": 102074001,
                "start": "19:30",
                "end": "19:40",
                "contents": {
                  "type": "TALK",
                  "id": 5659434281861120,
                  "title": "Creating good-ol' PDFs and Emails with React",
                  "description": "We had the need of generating automatic reports (in PDF) based in the analytics from our platform. The main problem was the complex design that those PDF had, since they were modules/components from the web application. We thought about solutions (CSS, third-party software) and then realized that it was in front of us: server-side JavaScript. Rendering the components we had client-side worked pretty well in the server, so we included an HTML to PDF software (on a unix environment) and started creating them.\n\nSome weeks later we created an utility to generate emails (tables generation included!) with no pain.",
                  "creationDate": 1492467545474,
                  "authors": [
                    {
                      "id": 102294002,
                      "uuid": "fjaguero",
                      "name": "Fernando Agüero",
                      "avatar": "https://storage.googleapis.com/k-avatars/102294002-24d69e3c",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      }
                    },
                    {
                      "id": 108214001,
                      "uuid": "albertorestifo",
                      "name": "Alberto Restifo",
                      "avatar": "https://storage.googleapis.com/k-avatars/108214001-18016f48",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      }
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "English"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 0,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5766103821189120
              },
              {
                "id": 105104001,
                "start": "19:40",
                "end": "19:50",
                "contents": {
                  "type": "TALK",
                  "id": 5684977794547712,
                  "title": "Vectr : Vector Graphics Editor in JavaScript",
                  "description": "I'd like to give a quick lightning talk about Vectr, and the technical challenges behind building it. \n\nVectr is Creative Software in the cloud (think 'Adobe Killer'). It's all JS, built on top of a custom-built collaborative filesystem.\n\nTo be honest, I'm not the best coder, but other members of our team have prepared presentations about the technology behind Vectr and the challenges of building a performant vector graphics editor in the web browser.\n\nI will steal their presentation ;) I'll give a quick introduction of our company, then do my best to walk through the technical challenges outlined in our team's presentation deck.",
                  "creationDate": 1493758631264,
                  "authors": [
                    {
                      "id": 106614001,
                      "uuid": "nick",
                      "name": "Nick Budden",
                      "avatar": "https://storage.googleapis.com/k-avatars/106614001-45a77c82",
                      "description": "Co-founder + CEO of Vectr. Designer + developer. Canadian living in Taiwan. ",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      }
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "English"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 0,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5766103821189120
              },
              {
                "id": 105114001,
                "start": "19:50",
                "end": "20:00",
                "userId": 69304001,
                "trackId": 5766103821189120
              },
              {
                "id": 99964003,
                "start": "20:00",
                "end": "20:10",
                "userId": 69304001,
                "trackId": 5766103821189120
              },
              {
                "id": 95894001,
                "start": "20:10",
                "end": "20:20",
                "userId": 69304001,
                "trackId": 5766103821189120
              },
              {
                "id": 102084001,
                "start": "20:20",
                "end": "20:30",
                "userId": 69304001,
                "trackId": 5766103821189120
              },
              {
                "id": 105114003,
                "start": "20:30",
                "end": "20:45",
                "contents": {
                  "type": "TALK",
                  "id": 5149519926788096,
                  "title": "First Day Is Over",
                  "description": "See you next day!",
                  "creationDate": 1490121707720,
                  "authors": [
                    {
                      "id": 6280336195452928,
                      "uuid": "alejandrofer",
                      "name": "Alex Fernandez",
                      "avatar": "https://storage.googleapis.com/k-avatars/6280336195452928-bcf2b383",
                      "description": "JSDayES organizer, involved in MadridJS and Node.js Madrid, and Master of Ceremonies for special occasions.",
                      "feedback": {
                        "ratingAverage": 4.17,
                        "entriesCount": 40
                      },
                      "twitterAccount": "pinchito"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "English"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 4,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5766103821189120
              }
            ]
          },
          {
            "id": 5685025307623424,
            "name": "Track 2",
            "slots": [
              {
                "id": 106094001,
                "start": "18:30",
                "end": "20:30",
                "contents": {
                  "type": "TALK",
                  "id": 5104937360949248,
                  "title": "Introducción a NativeScript",
                  "description": "NativeScript es un framework JavaScript para la consitrución de aplicaciones nativas para iOS, Android, tambien puedes utilizarlo con Angular2. ¿Por que NativeScript es especial? Aqui tienes algunas pistas.\n\nAcesso directo a las APIs nativas sin necesidad de plugins.\n\nRendimiento nativo a traves del uso de Javascript de manera nativa a traves de la plataforma\n\nCambia los estilos utilizando CSS\n\nEn el workshop introduciremos los conceptos básicos para el desarrollo de aplicaciones con NativeScript.\n\n\n",
                  "creationDate": 1485386293333,
                  "authors": [
                    {
                      "id": 102374002,
                      "uuid": "masmogio",
                      "name": "Miguel Angel Saez",
                      "avatar": "https://storage.googleapis.com/k-avatars/102374002-6fb1cc2d",
                      "description": "Mi experiencia profesional esta relacionada con diversas tecnologias, gran apasionado del desarrollo de aplicaciones web y moviles. ",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      }
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Workshop"
                    ],
                    "Language": [
                      "Español"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 7,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5685025307623424
              }
            ]
          },
          {
            "id": 5647582051172352,
            "name": "Track 3",
            "slots": [
              {
                "id": 105104002,
                "start": "16:00",
                "end": "21:00",
                "contents": {
                  "type": "BREAK",
                  "title": "Workshop by substack"
                },
                "userId": 69304001,
                "trackId": 5647582051172352
              }
            ]
          },
          {
            "id": 5743541284241408,
            "name": "Track 4",
            "slots": []
          }
        ]
      },
      {
        "id": 5740078466859008,
        "name": "May 13th",
        "tracks": [
          {
            "id": 5734175839617024,
            "name": "1 Main Track",
            "slots": [
              {
                "id": 105204001,
                "start": "09:00",
                "end": "09:30",
                "contents": {
                  "type": "BREAK",
                  "title": "Registro / Registration"
                },
                "userId": 69304001,
                "trackId": 5734175839617024
              },
              {
                "id": 103424001,
                "start": "09:30",
                "end": "10:00",
                "contents": {
                  "type": "TALK",
                  "id": 5084377755156480,
                  "title": "Welcome to our main event",
                  "description": "This year we have **four** amazing tracks filled with interesting talks and workshops.",
                  "creationDate": 1490051822120,
                  "authors": [
                    {
                      "id": 6280336195452928,
                      "uuid": "alejandrofer",
                      "name": "Alex Fernandez",
                      "avatar": "https://storage.googleapis.com/k-avatars/6280336195452928-bcf2b383",
                      "description": "JSDayES organizer, involved in MadridJS and Node.js Madrid, and Master of Ceremonies for special occasions.",
                      "feedback": {
                        "ratingAverage": 4.17,
                        "entriesCount": 40
                      },
                      "twitterAccount": "pinchito"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "English"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 15,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5734175839617024
              },
              {
                "id": 95904001,
                "start": "10:00",
                "end": "10:45",
                "contents": {
                  "type": "TALK",
                  "id": 5647327708577792,
                  "title": "Past, present and future of Javascript",
                  "description": "Where do we come from? Where are we going? We won't be answering this questions about the human existence, but in this talk we will try to get a better understanding of how Javascript was created, how it became what it is nowadays and, perhaps, what we can expect in the future.",
                  "creationDate": 1490051554601,
                  "authors": [
                    {
                      "id": 661062,
                      "uuid": "lauramorillovelarde",
                      "name": "Laura Morillo-Velarde Rodríguez",
                      "avatar": "https://storage.googleapis.com/k-avatars/661062-9c37df78",
                      "description": "Laura is a Backend Engineer at Seedtag. She has been working with a lot of technologies (Java, Groovy, Ruby...) at the backend for 10 years and Javascript always in the frontend. Nowadays, she also uses Javascript to create microservices with Node.js. In her free time she helps to organize events with different communities and she is a Women Techmakers Lead at GDG Madrid.",
                      "feedback": {
                        "ratingAverage": 4,
                        "entriesCount": 80
                      }
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "English"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 21,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5734175839617024
              },
              {
                "id": 102074002,
                "start": "10:45",
                "end": "11:30",
                "contents": {
                  "type": "BREAK",
                  "title": "Breakfast"
                },
                "userId": 69304001,
                "trackId": 5734175839617024
              },
              {
                "id": 97064001,
                "start": "11:30",
                "end": "12:15",
                "contents": {
                  "type": "TALK",
                  "id": 5705441837318144,
                  "title": "Node y V8 internals.",
                  "description": "Node se ha colado en los corazones de muchos desarrolladores, y a nadie deja indiferente: levanta enormes pasiones o genera irreverentes oleadas de rant.\nUtilizando v8 como motor de ejecucion javascript, Node ha conseguido que cada vez mas empresas de primer orden lo utilicen en aplicaciones criticas: NASA, Wallmart, PayPal... la lista es interminable.\nv8 es sinonimo de rendimiento, pero... como se mapea node sobre v8 ? que codigo es sensible al rendimiento ? Como se conciben los conceptos de javascript en nativo ? Es node 100% asincrono ? ...\n\nEsta charla mostrara conceptos fundamentales de v8, como funciona node internamente,  como podemos extenderlo con nuestros propios modulos y funciones...\n\nUn complicado viaje de descubrimiento al centro de Node.",
                  "creationDate": 1482102376060,
                  "authors": [
                    {
                      "id": 69544004,
                      "uuid": "ibontolosana",
                      "name": "Ibon Tolosana",
                      "avatar": "https://storage.googleapis.com/k-avatars/69544004-b18ff507",
                      "description": "Ibon was CTO and co-founder at Ludei, as well as a failed entrepreneur at Novoplay, and CTO and the person behind the project juegon.com. He thinks the web will win over all other platforms and that's why he's devoted countless hours on HTML5, webgl, nodejs, native v8 and all web stuff. For the last two years, he's been a native ios/android hardcore developer, but just for a living. Father of two, doer, dreamer and a snob chocolate eater.",
                      "feedback": {
                        "ratingAverage": 4.79,
                        "entriesCount": 14
                      },
                      "twitterAccount": "hyperandroid"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "Español"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 17,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5734175839617024
              },
              {
                "id": 102034003,
                "start": "12:20",
                "end": "13:05",
                "contents": {
                  "type": "TALK",
                  "id": 5736745035366400,
                  "title": "Building VR experiences",
                  "description": "WebVR es una API Web para crear experiencias de realidad virtual en el navegador. A día de hoy, también tenemos herramientas que nos permiten utilizar esta API de manera fácil y productiva, como A-frame, un framework de realidad virtual de código abierto.\n\nEn esta charla aprenderemos a utilizar A-frame para crear mundos de realidad virtual.",
                  "creationDate": 1484586574631,
                  "authors": [
                    {
                      "id": 95444002,
                      "uuid": "ladybenko",
                      "name": "Belén Albeza",
                      "avatar": "https://storage.googleapis.com/k-avatars/95444002-4790e1a5",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      },
                      "twitterAccount": "ladybenko"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "Español"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 8,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5734175839617024
              },
              {
                "id": 102064002,
                "start": "13:10",
                "end": "13:55",
                "contents": {
                  "type": "TALK",
                  "id": 5730466330050560,
                  "title": "Técnicas Forenses en JavaScript",
                  "description": "Nos convertiremos en expertos forenses para investigar el mayor crimen que se comete día a día en la web: la mala performance. \n\nEcharemos polvo a todas las huellas dactilares que deja nuestro javascript en el navegador, interrogaremos a todos los posibles culpables, para terminar descubriendo al «asesino» de la buena performance.\n\n¡Únete a nuestro escuadrón forense!",
                  "creationDate": 1484480642517,
                  "authors": [
                    {
                      "id": 98524001,
                      "uuid": "eduardosada1",
                      "name": "Eduardo Sada",
                      "avatar": "https://storage.googleapis.com/k-avatars/98524001-30368953",
                      "description": "Eduardo es Especialista Javascript en Kairós DS. Evangelista de Polymer, con más de 12 años de experiencia en desarrollo Front-end; hoy se dedica, según su madre, a «hacer caritas y botoncitos» de manera profesional. Suele dar charlas en eventos de programación para no pagar la entrada.",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      }
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "Español"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 22,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5734175839617024
              },
              {
                "id": 105124001,
                "start": "13:55",
                "end": "15:05",
                "contents": {
                  "type": "BREAK",
                  "title": "Lunch"
                },
                "userId": 69304001,
                "trackId": 5734175839617024
              },
              {
                "id": 99974002,
                "start": "15:05",
                "end": "15:50",
                "contents": {
                  "type": "TALK",
                  "id": 5756614627819520,
                  "title": "Un lenguaje para gobernarlos a todos",
                  "description": "Hace ahora más o menos 2 años, un grupo de irreductibles galos fueron encomendados con la tarea de construir desde cero el **primer metabook de taxis del mundo**. Algo que así a primera vista podría parecer sencillo, pero que en cuanto buceas un poco en los detalles te das cuenta de que se trata de una tarea hercúlea: no sólo se trata de construir un sistema cliente-servidor con unos cuantos endpoints debidamente protegidos, sino que también hay que modularizar e integrar proveedores, gestionar pagos, dar información en tiempo real sobre estado y localización del vehículo, etc. Seis personas trabajando en paralelo en 2 ubicaciones distintas durante 5 meses fueron suficientes para poner el sistema en producción. Incluyendo:\n- Un backend que expone el API con las operaciones necesarias para reservar/seguir/cancelar un taxi.\n- 10 módulos de integración con proveedores (como Cabify, eTaxi, ...)\n- Un sistema de autenticación para usuarios y aplicaciones\n- Una aplicación híbrida (iOS y Android) que se conecta el backend y te permite reservar un taxi.\n- Un panel de control que permite visualizar reservas, añadir proveedores, etc\n\nNuestra poción mágica fue **Javascript, un lenguaje para dominarlos a todos**: el backend (incluyendo el sistema de autenticación y la integración de proveedores) está escrito en **node.js**, la aplicación híbrida, en **Ionic** y el panel de control en **Angular 2** (sí, lo sé, esto es TypeScript ;-)).\n\nLa idea de la charla es repasar los factores y las prácticas que llevaron a un equipo tan pequeño a lograr unos resultados tan espectaculares en tan poco tiempo. Repasaré lo que implicó para nosotros compartir un mismo lenguaje en todos los elementos del sistema, las virtudes y defectos de la metodología agile, el papel de los test unitarios y del despliegue continuo y el precio que a veces se paga por ser un early adopter. Y si me da tiempo, además contaré el chiste de la vaca. En Javascript.",
                  "creationDate": 1483432684973,
                  "authors": [
                    {
                      "id": 93944001,
                      "uuid": "tufosa",
                      "name": "Diego Lafuente Garcia",
                      "avatar": "https://storage.googleapis.com/k-avatars/93944001-fa44fec5",
                      "description": "Desarrollo software desde mi más tierna infancia. De pequeño aprendí BASIC y a copiar los pokes del MicroManía. De ahí al C y al C++. Ya lo decía mi madre: empiezas probando la cerveza y acabas enganchado a la heroína. En ocasiones monto empresas: una [tienda de ropa en Madrid](http://makingthings.es), una [startup fracasada de viajes](http://www.bookaplan.com) y una [fundación para potenciar el talento en España](http://www.acelerame.org). Los últimos 7 años he estado vendiendo mi alma en cómodos plazos al diablo de Javascript: en su mayoría al de node.js, pero también al de Titanium, al de Ionic y al de Angular. Llevo casi dos años construyendo desde cero el primer meta-book de taxis del mundo. Desarrollado íntegramente con tecnologías Javascript.",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      },
                      "twitterAccount": "tufosa"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "Español"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 7,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5734175839617024
              },
              {
                "id": 97064002,
                "start": "15:55",
                "end": "16:40",
                "contents": {
                  "type": "TALK",
                  "id": 5661878118252544,
                  "title": "Invisible o desaparece",
                  "description": "JavaScript no es sólo para web.\n\nEl **futuro** es la computación ubicua, que es la integración de la informática en el entorno de la persona, de forma que los ordenadores no se perciban como objetos diferenciados. La idea es **interactuar** de manera **natural** con sus dispositivos y realizar cualquier tarea de manera completamente transparente, un paso más allá en el paradigma del uso de los ordenadores de sobremesa. La revolución invisible está aquí y tenemos que estar preparados.\n\nLa \"inteligencia ambiental\" que tan estrechamente ligada está al IoT se asocia erróneamente a C/C++, Java, Python y otros lenguajes, sin embargo hay un sinfín de dispositivos que permiten ser programados con JavaScript. En esta charla veremos la cantidad de dispositivos del mercado que pueden ser programados en JavaScript, y con esto como base, haremos una demo completa de cómo comunicar con todo tipo de artilugios que tengamos en casa.\n",
                  "creationDate": 1490051082357,
                  "authors": [
                    {
                      "id": 102044001,
                      "uuid": "julietsvq",
                      "name": "Juliet Moreiro Bockhop",
                      "avatar": "https://storage.googleapis.com/k-avatars/102044001-3619a2ba",
                      "description": "Ingeniero de Microsoft Dynamics 365 de día y programadora de cacharritos de noche, desde smart home devices a dispositivos controlados por voz y robots con mal genio, siempre aprovechando lo mejor de diferentes tecnologías.",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      },
                      "twitterAccount": "julietsvq"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "Español"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 8,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5734175839617024
              },
              {
                "id": 102874001,
                "start": "16:45",
                "end": "17:30",
                "contents": {
                  "type": "TALK",
                  "id": 6287536741679104,
                  "title": "Un paso más en seguridad FrontEnd con Web Crypto API",
                  "description": "# Introducción\n\nLa seguridad FrontEnd siempre ha sido un tema bastante olvidado en los desarrollos, dejandose muchas veces esta parte exclusivamente para el backend. Al ser el front la parte más accesible y a la vez vulnerable, los desarrolladores debemos tomar medidas, pues una fuerte seguridad puede filtrar en gran medida el número de ataques que llegan a back, así como detener otros casi por completo.  \n\n# Objetivo\nEl objetivo de esta charla es presentar y analizar la [Web Cryptography API](https://www.w3.org/TR/WebCryptoAPI/) que ya está implementada en algunos navegadores, ofreciendo soporte para algoritmos básicos de encriptación, así como firmado con mecanismos de claves públicas y privadas. Además de ayudar a los desarrolladores a asegurar la identidad de los usuarios en operaciones sensibles, puede ser utilizado para cantidad de acciones, como la comprobación de que los recursos enviados desde back son exactamente los mismos que recibimos en front.\n\n# Puntos de la charla\n * Introducción a la seguridad en Frontend\n * Problemas encontrados \n * Introducción a la Web Crypto API\n * Soluciones a problemas anteriores + ejemplos en código\n   * Transacciones sensibles\n   * Comprobación de recursos\n * Soporte de la API ",
                  "creationDate": 1484150518168,
                  "authors": [
                    {
                      "id": 96224001,
                      "uuid": "1joroji",
                      "name": "Jon Rojí",
                      "avatar": "https://storage.googleapis.com/k-avatars/96224001-5d2564e6",
                      "description": "Un tipo de gustos sencillos y pasión por JavaScript. Arquitecto front en Sngular, donde comparte su pasión por las arquitecturas web, propiciando historias de amor estricto entre desarrolladores y código. Defensor de lo estándar, crítico con el código del día anterior, enfocado actualmente en sacar el máximo partido a Polymer y Angular 2, actualmente desarrollando starter kits y arquitecturas de referencia en serenity-frontstack (https://github.com/serenity-frontstack) para el grupo santander con Angular 2 y Polymer. ",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      }
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "Español"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 15,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5734175839617024
              },
              {
                "id": 102034004,
                "start": "17:30",
                "end": "18:15",
                "contents": {
                  "type": "BREAK",
                  "title": "Coffee Break"
                },
                "userId": 69304001,
                "trackId": 5734175839617024
              },
              {
                "id": 103414002,
                "start": "18:15",
                "end": "19:00",
                "contents": {
                  "type": "TALK",
                  "id": 5706180169039872,
                  "title": "ES7 & ES8 vs V8",
                  "description": "Una revisión en profundidad de las características del último estándar de nuestro lenguaje favorito ES2016 (ES7) y de las ya incluidas en ES2017 (ES8, que saldrá a finales de Abril), incluidas las Funciones Asíncronas (que nos permiten gestionar la asincronía con mayor elegancia), los Array Buffers Compartidos y el objeto Atomics (los bloques de bajo nivel sobre los que construir abstracciones de concurrencia) y algunas características menores como nuevas propiedades de los prototipos de Object y String. \n\nRevisaremos cómo funciona el Comité T39, cómo genera las releases anuales de la especificación ECMA-262 y cómo éstas se integran en el motor de alto rendimiento de V8.\n\nUn viaje a las entrañas del presente y el futuro de JavaScript.",
                  "creationDate": 1485716342127,
                  "authors": [
                    {
                      "id": 5654710254043136,
                      "uuid": "rafaelcasusoromate",
                      "name": "Rafael Casuso Romate",
                      "avatar": "https://storage.googleapis.com/k-avatars/5654710254043136-5b938aa6",
                      "description": "CTO en Stay y CEO de SnowStorm con más de 10 años de experiencia desarrollando tanto Frontend como Backend, especializado en tecnologías como BackboneJS, ReactJS, VueJS y Arquitectura NodeJS aplicada a Inteligencias Conversacionales y Aplicaciones de Comunicación en Tiempo Real.",
                      "feedback": {
                        "ratingAverage": 4,
                        "entriesCount": 5
                      }
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "Español"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 21,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5734175839617024
              },
              {
                "id": 99964004,
                "start": "19:05",
                "end": "19:50",
                "contents": {
                  "type": "TALK",
                  "id": 5645498052509696,
                  "title": "Construcción de APIs con Swagger/OpenAPIs",
                  "description": "La definición de un contrato de API, permite paralelizar trabajos a los equipos de *backend* y *frontend*. Este último puede agilizar su parte empleado *mocks* sin esperar al equipo de *backend*.\n\nEn este contexto, [**Swagger**](http://swagger.io/) se ha convertido en un estándar de facto para la documentación, construcción y descubrimiento de APIs *RESTful* sobre HTTP. Recientemente a sido adoptado por la Linux Foundation como bajo el nombre de [**OpenAPIs**](https://www.openapis.org/) con el soporte de los principales fabricantes.\n\nVeremos una aproximación y las herramientas a emplear para  crear APIs sencillas y completas. Capaces de ser consumidas desde múltiples clientes derivando *proxies* nativos. \nTambién repasaremos las ventajas de incluir los principios de **HATEOAS** el diseño de APIs.\nSe mostrará como prototipar rápidamente APIs Swagger con Javascript y NodeJS a través de ejemplos. ",
                  "creationDate": 1484390258300,
                  "authors": [
                    {
                      "id": 69414001,
                      "uuid": "pjmolina",
                      "name": "Dr. Pedro J. Molina",
                      "avatar": "https://storage.googleapis.com/k-avatars/69414001-a135e59d",
                      "description": "@pmolinam \nFounder at Metadev",
                      "feedback": {
                        "ratingAverage": 3,
                        "entriesCount": 3
                      },
                      "twitterAccount": "pmolinam"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "Español"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 16,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5734175839617024
              },
              {
                "id": 97864001,
                "start": "19:55",
                "end": "20:40",
                "contents": {
                  "type": "BREAK",
                  "title": "Keynote by substack"
                },
                "userId": 69304001,
                "trackId": 5734175839617024
              },
              {
                "id": 103424002,
                "start": "20:40",
                "end": "21:00",
                "contents": {
                  "type": "TALK",
                  "id": 5700296332279808,
                  "title": "Closing",
                  "description": "We cannot send you off into the cold night without some kind words from our sponsors. And of course you will want to meet the team that made it all possible!",
                  "creationDate": 1490050691952,
                  "authors": [
                    {
                      "id": 6280336195452928,
                      "uuid": "alejandrofer",
                      "name": "Alex Fernandez",
                      "avatar": "https://storage.googleapis.com/k-avatars/6280336195452928-bcf2b383",
                      "description": "JSDayES organizer, involved in MadridJS and Node.js Madrid, and Master of Ceremonies for special occasions.",
                      "feedback": {
                        "ratingAverage": 4.17,
                        "entriesCount": 40
                      },
                      "twitterAccount": "pinchito"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "English"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 9,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5734175839617024
              }
            ]
          },
          {
            "id": 5741848530255872,
            "name": "2 International Track",
            "slots": [
              {
                "id": 103424003,
                "start": "10:45",
                "end": "11:30",
                "contents": {
                  "type": "BREAK",
                  "title": "Breakfast"
                },
                "userId": 69304001,
                "trackId": 5741848530255872
              },
              {
                "id": 99974003,
                "start": "11:30",
                "end": "12:15",
                "contents": {
                  "type": "TALK",
                  "id": 5151639224713216,
                  "title": "Progressive Image Rendering",
                  "description": "On a regular web page, images represent the largest assets. We might have heard about responsive images to serve the most suitable image for each screen. However, how and when we load them can have a great impact too.\n\nI will show you several techniques used by well known websites, based on placeholders, dominant colours, blurry images and lazy loading to improve user's perceived performance.\n\nThese techniques leverage several web technologies like CSS3, canvas and the recent IntersectionObserver API.",
                  "creationDate": 1485708669920,
                  "authors": [
                    {
                      "id": 101454005,
                      "uuid": "jmperez",
                      "name": "José Manuel Pérez Pérez",
                      "avatar": "https://storage.googleapis.com/k-avatars/101454005-e5dace8b",
                      "description": "José is a web developer at Spotify, where he works building Spotify's web player. He likes web performance optimisation and making sites load (and look) faster.",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      },
                      "twitterAccount": "jmperezperez"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "English"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 11,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5741848530255872
              },
              {
                "id": 104184001,
                "start": "12:20",
                "end": "13:05",
                "contents": {
                  "type": "TALK",
                  "id": 5170593989132288,
                  "title": "Changing live audio with the web-audio-api.",
                  "description": "As a guitar player, I usually use some effect-pedals to change the sound of my guitar. I started wondering: “What if, it would be possible to recreate these pedals using the web-audio-api?”. Well, it turns out, it is entirely possible to do so. This talk takes you through the basics of the web-audio-api and explains some of the audio-nodes I’ve used to change the live sound of my guitar. By the end of the talk, I hope the audience has some basic idea of how the web-audio-api works, and how to create some of the patterns usually found in guitar/audio effects.",
                  "creationDate": 1485856166925,
                  "authors": [
                    {
                      "id": 94644001,
                      "uuid": "sambellen",
                      "name": "Sam Bellen",
                      "avatar": "https://storage.googleapis.com/k-avatars/94644001-6ceadc53",
                      "description": "I'm Sam Bellen and I’m a front-end software engineer at madewithlove. \nI love to play with the web-audio-api and other lesser known browser api's.\nYou can find me on twitter as @sambego.",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      }
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "English"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 13,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5741848530255872
              },
              {
                "id": 99984001,
                "start": "13:10",
                "end": "13:55",
                "contents": {
                  "type": "TALK",
                  "id": 5756156408496128,
                  "title": "NodeOS: lightweight operating system for Node.js",
                  "description": "[NodeOS](https://github.com/NodeOS/NodeOS) is a free lightweight operating system built on top of the Linux kernel using Node.js for its userspace. Here I'm going to talk about it's use cases, architecture and the problems found developing an operating system from scratch using Javascript and how they have been solved.",
                  "creationDate": 1484517228748,
                  "authors": [
                    {
                      "id": 97544001,
                      "uuid": "piranna",
                      "name": "Jesús Leganés-Combarro",
                      "avatar": "https://storage.googleapis.com/k-avatars/97544001-fdb82ec0",
                      "description": "Geek and mad inventor since a child, I have been involved in almost all areas of computers and informatics. I have been a WebRTC pioneer with ShareIt! P2P webapp and a Node.js guru designing the APIs of Kurento media server, and now I'm involved as lead developer of NodeOS and working on my PhD. about processing tecniques of neurological microscopic images.",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      },
                      "twitterAccount": "el_piranna"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "English"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 6,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5741848530255872
              },
              {
                "id": 97864002,
                "start": "13:55",
                "end": "15:05",
                "contents": {
                  "type": "BREAK",
                  "title": "Lunch"
                },
                "userId": 69304001,
                "trackId": 5741848530255872
              },
              {
                "id": 97854002,
                "start": "15:05",
                "end": "15:50",
                "contents": {
                  "type": "TALK",
                  "id": 5161636834836480,
                  "title": "Reactive Animations with RxJS",
                  "description": "UI animations can be an incredible asset to the user experience, especially if they are meaningful and responsive to user input. In this session, we will discover some new and innovative techniques for creating reactive web animations declaratively, using RxJS. You will learn ways to add native-like transitions and smooth animations that respond to user input, in order to create a delightful experience for your users. And of course, there will be plenty of demos!",
                  "creationDate": 1484147859810,
                  "authors": [
                    {
                      "id": 93984002,
                      "uuid": "davidkpiano",
                      "name": "David Khourshid",
                      "avatar": "https://storage.googleapis.com/k-avatars/93984002-dbe72221",
                      "description": "David Khourshid is a Florida-based web developer, tech author, and international speaker. Also a fervent open-source contributor, he is passionate about JavaScript, CSS, Sass, functional programming, and cutting-edge front-end technologies. He is a frequent speaker at various conferences and local front-end meetups. When not behind a computer keyboard, he’s behind a piano keyboard or traveling.\n\nTwitter: @davidkpiano",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      },
                      "twitterAccount": "davidkpiano"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "English"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 17,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5741848530255872
              },
              {
                "id": 105094002,
                "start": "15:55",
                "end": "16:40",
                "contents": {
                  "type": "TALK",
                  "id": 5067764821655552,
                  "title": "Building Mobile Apps with Vue.js",
                  "description": "In this presentation we'll introduce **Vue.js**, setup a webpack build, extoll the virtues of its reactive data binding and composable interface all while building an Instagram like app. Using **Framework 7** to provide the basic UI for Android and iOS for those of us, like myself, who are CSS challenged.\n\nVue.js is a library for building interactive web interfaces. The goal of Vue.js is to provide the benefits of reactive data binding and composable view components with an API that is as simple as possible.\n\nFramework7 - is a free and open source mobile HTML framework to develop hybrid mobile apps or web apps with iOS & Android native look and feel. It is also an indispensable prototyping apps tool to show working app prototype as soon as possible in case you need to.",
                  "creationDate": 1485808882213,
                  "authors": [
                    {
                      "id": 102444001,
                      "uuid": "simonmacdonald",
                      "name": "Simon MacDonald",
                      "avatar": "https://storage.googleapis.com/k-avatars/102444001-511eabac",
                      "description": "Simon has over twenty years of development experience and has worked on a variety of projects including object oriented databases, police communication systems, speech recognition and unified messaging. His current focus is contributing to the open source PhoneGap project to enable developers to create cross platform mobile applications using Web technologies. Simon’s been building web applications since the days they were written using shell scripts and he still has nightmares about those dark days.",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      }
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "English"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 20,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5741848530255872
              },
              {
                "id": 103414003,
                "start": "16:45",
                "end": "17:30",
                "contents": {
                  "type": "TALK",
                  "id": 5707667569901568,
                  "title": "UX Patterns for Web Developers",
                  "description": "Are you willing to go the extra mile to make your UX shiny and joyful? Most of us web developers underestimate the importance of human-computer interaction.\n\nJoin this talk for developer-friendly UX patterns that you can start using in your everyday code.\n\nIn this talk, we will explore the best of both worlds: Nicole will talk about UX best practices to make your product much more powerful, and Jad will explain the technical perspective behind it by using the newest techniques of the modern web. \nWe will cover topics like performance, mobile optimization, offline experiences & more. ",
                  "creationDate": 1485190699591,
                  "authors": [
                    {
                      "id": 101394002,
                      "uuid": "nicolesaidy",
                      "name": "Nicole Saidy",
                      "avatar": "https://storage.googleapis.com/k-avatars/101394002-88199561",
                      "description": "Nicole is a web designer specialized in UI & UX. She’s currently a freelancer traveling around the world to share her knowledge and passion about web design by speaking at conferences & coaching at Le Wagon in Brussels, Amsterdam & Copenhagen.",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      },
                      "twitterAccount": "nicolesaidy"
                    },
                    {
                      "id": 101384002,
                      "uuid": "joubranjad",
                      "name": "Jad Joubran",
                      "avatar": "https://storage.googleapis.com/k-avatars/101384002-11a5b5a9",
                      "description": "Jad is a fullstack teacher and an active conference speaker.\n\nHe's on a mission to inspire developers around the world by coaching at Le Wagon coding bootcamp in Europe and regularly speaking at international conferences.\n\nLately, Jad's focus lies on spreading knowledge about Progressive Web Apps and mentoring developers through online courses, blog articles and workshops for startups & enterprises.",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      },
                      "twitterAccount": "JoubranJad"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "English"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 18,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5741848530255872
              },
              {
                "id": 97874001,
                "start": "17:30",
                "end": "18:15",
                "contents": {
                  "type": "BREAK",
                  "title": "Coffee Break"
                },
                "userId": 69304001,
                "trackId": 5741848530255872
              },
              {
                "id": 97864003,
                "start": "18:15",
                "end": "19:00",
                "contents": {
                  "type": "TALK",
                  "id": 5639082579329024,
                  "title": "Applying NASA coding guidelines to JavaScript or airspace is closer than you may think",
                  "description": "Jet Propulsion Laboratory – scientific institution making a lot of research and development for NASA. JPL have been developing software for most of unmanned missions in the field of deep space exploaration including such missons as Curiosity and Voyager. High level of autmatization and long duration of missions led to superior demands to software quality.\n\nAs a result of JPL amazing experience a set of code guidelines was developed and published recently. Since demands to web-driven software constantly increase and more critical tasks are entrusted to JavaScript, lets apply NASA coding guidelines to JavaScript / HTML applications for higher performance, reliability and the better world.",
                  "creationDate": 1485206029810,
                  "authors": [
                    {
                      "id": 101374002,
                      "uuid": "denisradin",
                      "name": "Denis Radin",
                      "avatar": "https://storage.googleapis.com/k-avatars/101374002-dedd0843",
                      "description": "Front-end engineer working on \"embedded JavaScript\" in Liberty Global (Ziggo, UPC). Passionate about performance optimization, mastering workshop http://challengingnative.com, organizing http://react.asmterdam and http://amsterdamjs.com . Launching JavaScript into space and stratosphere in spare time and believe this is a sunrise of interactive revolution.",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      }
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "English"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 6,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5741848530255872
              },
              {
                "id": 99964005,
                "start": "19:05",
                "end": "19:50",
                "contents": {
                  "type": "TALK",
                  "id": 5657767566114816,
                  "title": "Demystifying (JavaScript) engines",
                  "description": "How a JavaScript engine works? What are its basic components? How to measure its performance? What is JIT compilation? Stigmatization: is JavaScript fast enough? are some of the questions I think we currently fail to answer in a, somewhat, short and direct way.\n",
                  "creationDate": 1485899381834,
                  "authors": [
                    {
                      "id": 98794001,
                      "uuid": "alejandrooviedog",
                      "name": "Alejandro Oviedo García",
                      "avatar": "https://storage.googleapis.com/k-avatars/98794001-ef90114f",
                      "description": "Alejandro is a developer who loves learning new things. He is passionate about education, electronics, open-source, and community-driven events. These days, he also helps organize NodeConf Argentina and a local Node.js meetup.\n",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      }
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "Español"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 12,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5741848530255872
              }
            ]
          },
          {
            "id": 5747777464172544,
            "name": "3 Rising Stars",
            "slots": [
              {
                "id": 99974004,
                "start": "10:45",
                "end": "11:30",
                "contents": {
                  "type": "BREAK",
                  "title": "Breakfast"
                },
                "userId": 69304001,
                "trackId": 5747777464172544
              },
              {
                "id": 104184002,
                "start": "11:30",
                "end": "12:15",
                "contents": {
                  "type": "TALK",
                  "id": 5666073764429824,
                  "title": "¿Una plataforma de IoT sólo con JS? Es posible... y además, ¡barato!",
                  "description": "Hoy en día ya se está hablando mucho de Internet of Things, plataformas IoT y derivados, pero... ¿te has planteado alguna vez montar la tuya propia? ¿Crees que está fuera de tu alcance? Vente para ver cómo se puede elaborar con muy poco una plataforma IoT, donde capturaremos datos con sensores de luz, de temperatura o incluso la presencia de gas. ¿Y para desarrollar? ¡Suficiente con JavaScript! \n\nConoceremos también otros frameworks JS para interactuar con elementos hardware, a NodeJS como actor principal y veremos cómo poder darle la capacidad de controlar, por ejemplo, las luces de casa. \n\nVamos a montar algo chulo, y si el efecto demo lo permite, haremos uno de los ejemplos en directo con todos los asistentes, ¡no te lo pierdas!",
                  "creationDate": 1485721243387,
                  "authors": [
                    {
                      "id": 34544001,
                      "uuid": "jmanuelgarciagarcia",
                      "name": "José Manuel García García",
                      "avatar": "https://storage.googleapis.com/k-avatars/34544001-fd324c77",
                      "description": "Sema, con S, es como todos me conocen. Java developer en los inicios de programador, pero reconvertido ahora con el tiempo y las inquietudes a JavaScripter en todas sus variantes, desde el navegador hasta el backend pasando por todo aquello que sea capaz de interpretar y ejecutar código, compaginando ratos de aventuras con Android, cervezas y amigos.",
                      "feedback": {
                        "ratingAverage": 2.95,
                        "entriesCount": 38
                      }
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "Español"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 5,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5747777464172544
              },
              {
                "id": 99984002,
                "start": "12:20",
                "end": "13:05",
                "contents": {
                  "type": "TALK",
                  "id": 5759198319083520,
                  "title": "JavaScript en Java: diversas formas de ejecutar JavaScript desde la JVM",
                  "description": "Hace años, ejecutar JavaScript desde Java podía ser un capricho o una necesidad anecdótica. Pero hoy en día, con más y más proyectos nada triviales en JavaScript que no tienen una alternativa Java, es importante conocer qué posibilidades tenemos para ejecutar JavaScript desde Java y las ventajas e inconvenientes de cada una.\nTras un pequeño repaso de las soluciones tradionales como Rhino, veremos con algo más de detalle Nashorn, GraalVM y sobre todo J2V8.\n\nSe podría dudar si esta charla no es más adecuada para una conferencia de Java. Pero el propósito, que es tener más plataformas donde poder ejecutar JavaScript, supongo que será mejor recibido en una conferencia sobre JavaScript. Además, en tecnologías como GraalVM y J2V8, Java pasa a ser un actor secundario.",
                  "creationDate": 1485671436379,
                  "authors": [
                    {
                      "id": 100364001,
                      "uuid": "pedropalao",
                      "name": "Pedro Palao",
                      "avatar": "https://storage.googleapis.com/k-avatars/100364001-f8a09117",
                      "description": "Licenciado en Matemáticas, especialidad de Computación. Unos años como profesor en el Departamento de Informática de la Universidad Complutense. Luego programador en el Departamento de Seguridad Informática en Bankinter. Actualmente CTO en Logtrust (www.logtrust.com), una empresa dedicada a big data en tiempo real.",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      }
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "Español"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 3,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5747777464172544
              },
              {
                "id": 102034005,
                "start": "13:10",
                "end": "13:55",
                "contents": {
                  "type": "TALK",
                  "id": 5157646004912128,
                  "title": "Unveiling WebAssembly: what, why, how",
                  "description": "This year the browser vendors are placing a significant effort into developing WebAssembly. The aim of this talk is to answer whether it's relevant to your use case and how to use it to improve the performance of your application.\n\nWe will see what WebAssembly brings in comparison to existing technologies. We will write some C++ code and run it in browser. We will take a look at exposing functions and classes written in C++ to parts of application that are written in JavaScript. We will discuss using WebAssembly to optimize parts of application written in JavaScript. We will use some C++ libraries to do cool stuff in a browser. Finally I will invite you to explore WebAssembly yourself and show us what you came up with.\n",
                  "creationDate": 1485772060693,
                  "authors": [
                    {
                      "id": 101494005,
                      "uuid": "mdrolc",
                      "name": "Matjaz Drolc",
                      "avatar": "https://storage.googleapis.com/k-avatars/101494005-308ffbb0",
                      "description": "Developer at Viabix AB writing code for analysis of road measurements. Mostly working in Javascript and PHP, lately exploring C++ to gain extra performance.",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      },
                      "twitterAccount": "MatjazDrolc"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "English"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 10,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5747777464172544
              },
              {
                "id": 97064003,
                "start": "13:55",
                "end": "15:05",
                "contents": {
                  "type": "BREAK",
                  "title": "Lunch"
                },
                "userId": 69304001,
                "trackId": 5747777464172544
              },
              {
                "id": 102074003,
                "start": "15:05",
                "end": "15:50",
                "contents": {
                  "type": "TALK",
                  "id": 5764766475747328,
                  "title": "Creando una arquitectura de microservicios en node.js y Kubernetes",
                  "description": "Existe un creciente interés en la industria por el desarrollo de arquitecturas de microservicios, gracias a las muchas ventajas que ofrecen. Sin embargo, este nuevo paradigma supone un cambio de mentalidad a la hora de organizar nuestras aplicaciones y conlleva más trabajo de operaciones, creando así una barrera de entrada mayor frente a sistemas monolíticos.\n\nHablaremos de nuestra experiencia en **seedtag** migrando a una arquitectura de microservicios en Node.js y de los retos que aparecen a la hora de implementar un sistema que debe atender miles de peticiones por segundo. Repasaremos las técnicas y herramientas a nuestra disposición para crear una sistema ágil, mantenible y escalable utilizando Kubernetes como base.",
                  "creationDate": 1484329958840,
                  "authors": [
                    {
                      "id": 94484001,
                      "uuid": "paulgoldbaum",
                      "name": "Paul Goldbaum",
                      "avatar": "https://storage.googleapis.com/k-avatars/94484001-e4fcd499",
                      "description": "CTO en seedtag. Amante de la programación funcional y los sistemas distribuidos, me he movido siempre entre las áreas de programación y sistemas. Cat person.",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      },
                      "twitterAccount": "paulgoldbaum"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "Español"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 11,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5747777464172544
              },
              {
                "id": 105094003,
                "start": "15:55",
                "end": "16:40",
                "contents": {
                  "type": "TALK",
                  "id": 5658823322763264,
                  "title": "JavaScript para un Data Scientist",
                  "description": "En el auge de la disciplina **Data Science**, encontramos un escalón entre la rama de analítica de datos y la visualización de datos, y aunque hay herramientas que dan el paso a disminuir esta laguna, la herramienta fundamental es JavaScript. \nMostrar y hacer entender las conclusiones de una analítica es tan importante como el desarrollarla y por eso es importante para un *no desarrollador* tener este tipo de herramientas con las crear una visualización que muestre entereza y profesionalidad sin meterse en los *caminos oscuros* del JavaScript.\nEsto será una muestra de las necesidades y piedras en el camino de un *Data Scientist* que quería hacer una visualización bonita.",
                  "creationDate": 1485797039970,
                  "authors": [
                    {
                      "id": 76864001,
                      "uuid": "chucheria",
                      "name": "Bea Hernández",
                      "avatar": "https://storage.googleapis.com/k-avatars/76864001-bfbe022d",
                      "description": "Data Scientist @DatMean, founder & co-organizer of R-Ladies Madrid. Obsessed with beautiful data visualizations, weather data and human behaviour. Book worm, beer enthusiast, proud owner of two cats and one dog. ",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      },
                      "twitterAccount": "chucheria"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "Español"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 3,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5747777464172544
              },
              {
                "id": 106094003,
                "start": "16:45",
                "end": "17:30",
                "contents": {
                  "type": "TALK",
                  "id": 5731047492812800,
                  "title": "Redux a través de la música",
                  "description": "Uno de los grandes empeños del ser humano es comunicarse con las máquinas. Hasta tal punto que necesitábamos crear un estándar para que cualquier máquina pudiera entender la música... y ser capaz de tocarla. El estándar MIDI nació con este propósito, y hoy en día tiene más de 30 años.  Una melodía se puede codificar en un archivo MIDI (.mid), que\ncontiene una serie de mensajes que indican una modificación en el estado de la canción (un cambio de tempo, cuándo empieza el sonido de una nota, una subida de volumen...).\n\nUn buen día, me desperté queriendo aprender qué era eso de \"Redux\", y conforme leía la documentación, una idea me vino a la cabeza: Si Redux es un \"predictable state container\" (contenedor de estados predecibles), y un archivo MIDI se compone de mensajes que transforman el estado de una canción para crear una melodía... ¿no sería perfecto juntar ambos para hacer un reproductor de archivos MIDI basado en Redux?\n\nEn esta charla, mi objetivo es explicar las bases de Redux a través de la música, utilizando como ejemplo un reproductor simple de archivos MIDI.",
                  "creationDate": 1485870390531,
                  "authors": [
                    {
                      "id": 6325027678978048,
                      "uuid": "elenatorro",
                      "name": "Elena Torro",
                      "avatar": "https://storage.googleapis.com/k-avatars/6325027678978048-2047c051",
                      "description": "Programadora. En mi tiempo libre intento sin éxito mantener un blog personal y arreglar el cuello de botella de mi lista de TODO's, entre otros. Me interesa principalmente la educación a través de la tecnología. Actualmente trabajo como desarrolladora FrontEnd en myABCKit.",
                      "feedback": {
                        "ratingAverage": 3.65,
                        "entriesCount": 34
                      },
                      "twitterAccount": "Eletorro"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "Español"
                    ]
                  },
                  "totalVotes": 1,
                  "totalLikes": 8,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5747777464172544
              },
              {
                "id": 105124002,
                "start": "17:30",
                "end": "18:15",
                "contents": {
                  "type": "BREAK",
                  "title": "Coffee Break"
                },
                "userId": 69304001,
                "trackId": 5747777464172544
              },
              {
                "id": 97874002,
                "start": "18:15",
                "end": "19:00",
                "contents": {
                  "type": "TALK",
                  "id": 5715939408478208,
                  "title": "Gestión y monitorización de procesos con Runnerty",
                  "description": "## ¿Quién somos?\nCoderty es una empresa que se dedica al Software. Nos dedicamos tanto al desarrollo de aplicaciones para terceros como a dar soporte y soluciones a otros equipos de desarrollo.\n\n## ¿Cual es nuestra propuesta?\nPresentar Runnerty.\n\n## ¿Qué es Runnerty?\nRunnerty es una herramienta para la planificación de procesos que gestiona dependencias entre ellos, los monitoriza y se encarga de la notificación de eventos. También ofrece comunicación vía web service y un sistema ágil para el desarrollo de plugins personalizados.\n\n## ¿Se está usando Runnerty?\nRunnerty ya está en proyectos en producción desde hace más de un año. \n\nEn nuestros proyectos se encarga de tareas como revisar webs  y webservices para comprobar que están andando, gestionar procesos de ETL, procesamiento por lotes, automatizar deploys  o realizar copias de seguridad de Amazon EFS para subirlo a S3 entre otras muchas cosas y siempre nos mantiene informados, tanto de la finalización como de posibles errores que se puedan producir durante la ejecución de estas tareas vía mail, Telegram o Slack.\n\n## ¿En qué tecnología está desarrollado Runnerty?\n- ES6\n- NodeJS\n- Angular\n\n## ¿Cómo pensamos hacer la presentación?\nExplicaremos brevemente qué es Runnerty, la necesidad de la que surgió, casos de uso reales y un ejemplo básico tanto de uso como de creación de plugins. \n",
                  "creationDate": 1485891823239,
                  "authors": [
                    {
                      "id": 103164001,
                      "uuid": "alo",
                      "name": "Álvaro Quirós",
                      "avatar": "https://storage.googleapis.com/k-avatars/103164001-60116e18",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      },
                      "twitterAccount": "alodev"
                    },
                    {
                      "id": 43974005,
                      "uuid": "carlos5",
                      "name": "Carlos Carmona",
                      "avatar": "https://storage.googleapis.com/k-avatars/43974005-ab664b5a"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "Español"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 1,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5747777464172544
              },
              {
                "id": 102034006,
                "start": "19:05",
                "end": "19:50",
                "contents": {
                  "type": "TALK",
                  "id": 5707268272160768,
                  "title": "Javascript Legacy: Nadando en la tempestad",
                  "description": "Hoy en día en la comunidad de Javascript se discute mucho sobre programación funcional o el último framework de moda, pero la realidad es que el uso de Javascript en muchos proyectos ha ido creciendo de forma descontrolada, hasta dar lugar al temido Monstruo Spaghetti. \n\nHay que tener presente que desde el primer momento en que se escribe código este ya es legacy. Nuestro código será legacy para alguien.\n\nVamos a ver cómo:\n* Afrontar el reto de enfrentarse a un proyecto con un código legacy que ha crecido orgánicamente y no morir en el intento.\n* Hacer mejoras continuas sin que el presupuesto se vea comprometido.\n* Resolver incidencias de forma rápida y con éxito.\n* Analizar el código gradualmente hasta su total comprensión.\n\nCuando nos enfrentamos a uno de estos proyectos que nos devuelve de una bofetada a la realidad, ayuda tener una forma de enfrentarse a ello. \n",
                  "creationDate": 1485899736548,
                  "authors": [
                    {
                      "id": 98784001,
                      "uuid": "nataliav",
                      "name": "Natalia Vidal",
                      "avatar": "https://storage.googleapis.com/k-avatars/98784001-3ca80fb5",
                      "description": "Natalia Vidal\nHabiéndome dedicado durante muchos años al backend con incursiones al mundo web, recientemente he cambiado de tercio. En la actualidad hago desarrollo front en Tecnilógica y ayudo a preparar a las nuevas generaciones de desarrolladores web en Ironhack. Desenmarañar código es mi sino. \n\nJavier Estevez\nDesarrollador de software desde hace más de 10 años sobre todo en la parte de frontend. He visto la evolución y revolución de la programación en Javascript desde sus comienzos, el nacimiento de jQuery, las Rich Interfaces Applications, el ascenso de Flash y ActionScript, y finalmente la explosión de Javascript. Y, por supuesto, he luchado contra el código legacy en mil batallas. Actualmente lidero el equipo de desarrollo frontend de Tecnilógica.\n\n\n",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      }
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Talk"
                    ],
                    "Language": [
                      "Español"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 3,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5747777464172544
              }
            ]
          },
          {
            "id": 5171225886195712,
            "name": "4 Workshops",
            "slots": [
              {
                "id": 102074004,
                "start": "10:45",
                "end": "11:05",
                "contents": {
                  "type": "BREAK",
                  "title": "Breakfast"
                },
                "userId": 69304001,
                "trackId": 5171225886195712
              },
              {
                "id": 105094004,
                "start": "11:05",
                "end": "13:05",
                "contents": {
                  "type": "TALK",
                  "id": 5143832584781824,
                  "title": "React Crash Course!",
                  "description": "React is regarded as the premier way to build big, fast Web apps with JavaScript.\n\nHere is a short hands-on crash course designed to get you up to speed with React, brought to you by YLD.\n\nThe course is designed for complete beginners.\n\nBe sure to bring your own laptop or pair with someone else (which is even more fun!).",
                  "creationDate": 1485427018067,
                  "authors": [
                    {
                      "id": 103134001,
                      "uuid": "alunassertiva",
                      "name": "Daniela Matos de Carvalho",
                      "avatar": "https://storage.googleapis.com/k-avatars/103134001-bde173a5",
                      "description": "Daniela is a web development engineer that loves to play with Javascript. She is always searching to learn something new and gain new skills. She loves running, dancing, and photography, which makes her relax and observe the world. She is an organiser of the require-lx meetup and a mentor of Coderdojo LX, an organization that provides free education to youths by teaching them how awesome programming is!",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      }
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Workshop"
                    ],
                    "Language": [
                      "English"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 5,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5171225886195712
              },
              {
                "id": 103424005,
                "start": "13:55",
                "end": "15:05",
                "contents": {
                  "type": "BREAK",
                  "title": "Lunch"
                },
                "userId": 69304001,
                "trackId": 5171225886195712
              },
              {
                "id": 99974005,
                "start": "15:05",
                "end": "17:30",
                "contents": {
                  "type": "TALK",
                  "id": 5720595958333440,
                  "title": "Por fin: async / await",
                  "description": "Tras años de espera, por fin disponemos de una forma sencilla y elegante de gestionar a la asincronía en Javascript. Por medio de async / await podemos evitar realizar llamadas a callbacks anidados, el uso de interminables cadenas de promesas o librerías como co.\n\nDurante este taller se explicará como utilizar esta funcionalidad, descubriremos algunos de sus secretos y sobre todo, cómo sacarle todo el partido para que nuestros programas sean más sencillos y comprensibles.",
                  "creationDate": 1485736385153,
                  "authors": [
                    {
                      "id": 32594001,
                      "uuid": "pabloalmunia1",
                      "name": "Pablo Almunia",
                      "avatar": "https://storage.googleapis.com/k-avatars/32594001-ab6623c7",
                      "description": "Programador, arquitecto de sistemas, empresario y filosofo, en definitiva, un hombre extraño, pero apasionado en todo lo que hace."
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Workshop"
                    ],
                    "Language": [
                      "Español"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 11,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5171225886195712
              },
              {
                "id": 102034008,
                "start": "17:30",
                "end": "17:50",
                "contents": {
                  "type": "BREAK",
                  "title": "Coffee Break"
                },
                "userId": 69304001,
                "trackId": 5171225886195712
              },
              {
                "id": 97064005,
                "start": "17:50",
                "end": "19:50",
                "contents": {
                  "type": "TALK",
                  "id": 5686580354220032,
                  "title": "Web APIs You [Probably] Didn’t Know Existed",
                  "description": "You’ve probably heard about the amazing things that HTML5 can do. Maybe you already saved some data using Local Storage, fetched user coordinates using Geolocation, or even drew graphs and other objects using Canvas. But did you know **there are many more new JavaScript APIs in the Web Platform**? In this workshop, we’ll see how to leverage the power of those APIs in order to create better experiences for your users.",
                  "creationDate": 1490280717588,
                  "authors": [
                    {
                      "id": 95964001,
                      "uuid": "zenorochaliferay",
                      "name": "Zeno Rocha",
                      "avatar": "https://storage.googleapis.com/k-avatars/95964001-802d6f19",
                      "description": "Zeno Rocha is a Principal Developer Advocate at Liferay, Inc. He dedicates a lot of his time traveling to show how awesome HTML5 is, contributing to dozens of open source projects, and creating tools to help developers build great applications. Besides that, he's a member of the Google Developers Expert program.",
                      "feedback": {
                        "ratingAverage": 0,
                        "entriesCount": 0
                      },
                      "twitterAccount": "zenorocha"
                    }
                  ],
                  "state": "ASSIGNED",
                  "tags": {
                    "Type": [
                      "Workshop"
                    ],
                    "Language": [
                      "English"
                    ]
                  },
                  "totalVotes": 0,
                  "totalLikes": 6,
                  "feedback": {
                    "ratingAverage": 0,
                    "entriesCount": 0
                  }
                },
                "userId": 69304001,
                "trackId": 5171225886195712
              }
            ]
          }
        ]
      }
    ]
  };

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  public getSpeakers() {
    let authors = [];

    for (let day of this.data.days) {
      for (let track of day.tracks) {
        for (let slot of track.slots) {
          if ( (slot as any).contents && (slot as any).contents.authors ) {
            for (let author of (slot as any).contents.authors) {

              if (authors.length === 0)
                authors.push(author);
              else {
                if (!this.findAuthorById(authors, author.id)) {
                  authors.push(author);
                }
              }
            }
          }          
        }
      }
    }

    return authors;
  }

  public getTalksByAuthor(authorId) {
    let talks = [];

    for (let day of this.data.days) {
      for (let track of day.tracks) {
        for (let slot of track.slots) {
          if ((slot as any).contents && (slot as any).contents.authors) {
            for (let author of (slot as any).contents.authors) {
              if (author.id === authorId) {
                talks.push(slot);
              }
            }
          }
        }
      }
    }

    return talks;
  }

  public getDays() {
    return this.data.days;
  }

  public getDay(day: number) {
    
  }

  private findAuthorById(list, id) {
    for (let item of list) {
      if (item.id === id)
        return true;
    }

    return false;
  }
}
