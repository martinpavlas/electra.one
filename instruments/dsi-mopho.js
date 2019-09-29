export default {
  'name': 'Generic MIDI',
  'instrument': 'cc',
  'categories': [
    {
      'id': 'setup',
      'label': 'Setup'
    },
    {
      'id': 'osc1',
      'label': 'Oscillator 1'
    },
    {
      'id': 'osc2',
      'label': 'Oscillator 2'
    },
    {
      'id': 'osc',
      'label': 'Oscillator common'
    },
    {
      'id': 'filter',
      'label': 'Filter'
    },
    {
      'id': 'vca',
      'label': 'VCA'
    }
  ],
  'overlays': [
    {
      'id': 1,
      'name': 'Op Modes',
      'items': [
        {
          'value': 0,
          'label': 'Stereo'
        },
        {
          'value': 1,
          'label': 'Mono'
        }
      ]
    },
    {
      'id': 2,
      'name': 'On / Off',
      'items': [
        {
          'value': 0,
          'label': 'Off'
        },
        {
          'value': 1,
          'label': 'On'
        }
      ]
    },
    {
      'id': 3,
      'name': 'Glide mode',
      'items': [
        {
          'value': 0,
          'label': 'Fixed Rate'
        },
        {
          'value': 1,
          'label': 'Fixed rate auto'
        },
        {
          'value': 2,
          'label': 'Fixed time'
        },
        {
          'value': 3,
          'label': 'Fixed time auto'
        }
      ]
    },
    {
      'id': 4,
      'name': 'Key assign',
      'items': [
        {
          'value': 0,
          'label': 'Low note'
        },
        {
          'value': 1,
          'label': 'Low note retrig'
        },
        {
          'value': 2,
          'label': 'High note'
        },
        {
          'value': 3,
          'label': 'High note retrig'
        },
        {
          'value': 4,
          'label': 'Last note'
        },
        {
          'value': 5,
          'label': 'Last note retrig'
        }
      ]
    },
    {
      'id': 5,
      'name': 'Filter type',
      'items': [
        {
          'value': 0,
          'label': '2-pole'
        },
        {
          'value': 1,
          'label': '4-pole'
        }
      ]
    }
  ],
  'parameters': [
    {
      'id': 384,
      'type': 'fader',
      'name': 'Transpose',
      'min': -12,
      'max': 12,
      'defaultValue': 0,
      'categoryId': 'setup'
    },
    {
      'id': 385,
      'type': 'fader',
      'name': 'Fine tune',
      'min': -50,
      'max': 50,
      'defaultValue': 0,
      'categoryId': 'setup'
    },
    {
      'id': 405,
      'type': 'list',
      'name': 'Fine tune',
      'overlayId': 1,
      'defaultValue': 0,
      'categoryId': 'setup'
    },
    {
      'id': 0,
      'type': 'fader',
      'name': 'Freq coarse',
      'min': 0,
      'max': 120,
      'defaultValue': 0,
      'categoryId': 'osc1'
    },
    {
      'id': 1,
      'type': 'fader',
      'name': 'Freq fine',
      'min': -50,
      'max': 50,
      'defaultValue': 0,
      'categoryId': 'osc1'
    },
    {
      'id': 2,
      'type': 'fader',
      'name': 'Shape',
      'min': 0,
      'max': 103,
      'defaultValue': 0,
      'categoryId': 'osc1'
    },
    {
      'id': 3,
      'type': 'fader',
      'name': 'Glide',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'osc1'
    },
    {
      'id': 4,
      'type': 'list',
      'name': 'Key on/off',
      'overlayId': 2,
      'defaultValue': 0,
      'categoryId': 'osc1'
    },
    {
      'id': 114,
      'type': 'fader',
      'name': 'Sub osc level',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'osc1'
    },

    {
      'id': 5,
      'type': 'fader',
      'name': 'Freq coarse',
      'min': 0,
      'max': 120,
      'defaultValue': 0,
      'categoryId': 'osc2'
    },
    {
      'id': 6,
      'type': 'fader',
      'name': 'Freq fine',
      'min': -50,
      'max': 50,
      'defaultValue': 0,
      'categoryId': 'osc2'
    },
    {
      'id': 7,
      'type': 'fader',
      'name': 'Shape',
      'min': 0,
      'max': 103,
      'defaultValue': 0,
      'categoryId': 'osc2'
    },
    {
      'id': 8,
      'type': 'fader',
      'name': 'Glide',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'osc2'
    },
    {
      'id': 9,
      'type': 'list',
      'name': 'Key on/off',
      'overlayId': 2,
      'defaultValue': 0,
      'categoryId': 'osc2'
    },
    {
      'id': 115,
      'type': 'fader',
      'name': 'Sub osc level',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'osc2'
    },
    {
      'id': 10,
      'type': 'list',
      'name': 'Sync',
      'overlayId': 2,
      'defaultValue': 0,
      'categoryId': 'osc'
    },
    {
      'id': 11,
      'type': 'list',
      'name': 'Glide mode',
      'overlayId': 3,
      'defaultValue': 0,
      'categoryId': 'osc'
    },
    {
      'id': 12,
      'type': 'fader',
      'name': 'Osc sloop',
      'min': 0,
      'max': 5,
      'defaultValue': 0,
      'categoryId': 'osc'
    },
    {
      'id': 93,
      'type': 'fader',
      'name': 'Pitchbend range',
      'min': 0,
      'max': 12,
      'defaultValue': 2,
      'categoryId': 'setup'
    },
    {
      'id': 96,
      'type': 'list',
      'name': 'Key assign',
      'overlayId': 4,
      'defaultValue': 0,
      'categoryId': 'setup'
    },
    {
      'id': 13,
      'type': 'fader',
      'name': 'Osc 1/2 mix',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'osc'
    },
    {
      'id': 14,
      'type': 'fader',
      'name': 'Noise level',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'osc'
    },
    {
      'id': 116,
      'type': 'fader',
      'name': 'Ext in level',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'osc'
    },

    {
      'id': 15,
      'type': 'fader',
      'name': 'Cutoff',
      'min': 0,
      'max': 164,
      'defaultValue': 0,
      'categoryId': 'filter'
    },
    {
      'id': 16,
      'type': 'fader',
      'name': 'Resonance',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'filter'
    },
    {
      'id': 17,
      'type': 'fader',
      'name': 'Key amount',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'filter'
    },
    {
      'id': 18,
      'type': 'fader',
      'name': 'Audio modulation',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'filter'
    },
    {
      'id': 19,
      'type': 'list',
      'name': 'Filter type',
      'overlayId': 5,
      'defaultValue': 0,
      'categoryId': 'filter'
    },
    {
      'id': 20,
      'type': 'fader',
      'name': 'Env amount',
      'min': -127,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'filter'
    },
    {
      'id': 21,
      'type': 'fader',
      'name': 'Env velocity',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'filter'
    },
    {
      'id': 22,
      'type': 'fader',
      'name': 'Env delay',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'filter'
    },
    {
      'id': 23,
      'type': 'fader',
      'name': 'Env attack',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'filter'
    },
    {
      'id': 24,
      'type': 'fader',
      'name': 'Env decay',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'filter'
    },
    {
      'id': 25,
      'type': 'fader',
      'name': 'Env sustain',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'filter'
    },
    {
      'id': 26,
      'type': 'fader',
      'name': 'Env release',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'filter'
    },

    {
      'id': 27,
      'type': 'fader',
      'name': 'Env init level',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'vca'
    },
    {
      'id': 30,
      'type': 'fader',
      'name': 'Env amount',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'vca'
    },
    {
      'id': 31,
      'type': 'fader',
      'name': 'Env velocity',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'vca'
    },
    {
      'id': 32,
      'type': 'fader',
      'name': 'Env delay',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'vca'
    },
    {
      'id': 33,
      'type': 'fader',
      'name': 'Env attack',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'vca'
    },
    {
      'id': 34,
      'type': 'fader',
      'name': 'Env decay',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'vca'
    },
    {
      'id': 35,
      'type': 'fader',
      'name': 'Env sustain',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'vca'
    },
    {
      'id': 36,
      'type': 'fader',
      'name': 'Env release',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'vca'
    },
    {
      'id': 29,
      'type': 'fader',
      'name': 'Voice volume',
      'min': 0,
      'max': 127,
      'defaultValue': 0,
      'categoryId': 'vca'
    }
  ]
}
