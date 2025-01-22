import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const uddPreset = definePreset(Aura, {
    semantic: {
      primary: {
        50: '{violet.50}',
        100: '{violet.100}',
        200: '{violet.200}',
        300: '{violet.300}',
        400: '{violet.400}',
        500: '{violet.500}',
        600: '{violet.600}',
        700: '{violet.700}',
        800: '{violet.800}',
        900: '{violet.900}',
        950: '{violet.950}',
      },
      focusRing: {
        width: '2px',
        style: 'dashed',
        color: '{primary.color}',
        offset: '1px'
      },
      colorScheme: {
        light: {
          primary: {
            color: '{violet.600}',
            inverseColor: '#ffffff',
            hoverColor: '{violet.600}',
            activeColor: '{violet.800}',
          },
          highlight: {
            background: '{violet.300}',
            focusBackground: '{violet.700}',
            color: '#ffffff',
            focusColor: '#ffffff',
          },
        }
      },
    },
});