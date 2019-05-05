import {Injectable} from '@angular/core';

@Injectable()
export class MainService {

  getMenuItem() {
    return ['About', 'Facts', 'Types', 'Contacts'];
  }

  getTypes() {
    return   [
      {
      key: 'sativa',
      profilePicture: '../../../assets/image/sativa.jpg',
      name: 'Sativa ',
      description: 'This species can grow quite tall (up to 25 feet) and has long, serrated light green leaves. ' +
      'Cannabis sativa L, more commonly known as hemp is typically grown for industrial use and is regulated to ensure the plants do not contain more than 0.3% THC.'
    },
      {
        key: 'indica',
        profilePicture: '../../../assets/image/indica.jpg',
        name: 'Indica ',
        description: 'This species is generally faster-growing, bushier and up to six feet shorter than Cannabis sativa, with dark green leaves. '
      },
      {
        key: 'ruderalis',
        profilePicture: '../../../assets/image/ruderalis.jpg',
        name: 'Ruderalis',
        description: 'This species is short, stalky and shaggier with light green leaves. It tends to be rugged and auto-flowering, which is good for breeders.'
      },
    ];
  }
}
