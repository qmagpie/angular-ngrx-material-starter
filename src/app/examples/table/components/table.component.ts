import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  family: string;
  bondingType: string;
  standardState: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.00794,
    symbol: 'H',
    family: 'nonmetal',
    bondingType: 'diatomic',
    standardState: 'gas'
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.002602,
    symbol: 'He',
    family: 'noble gas',
    bondingType: 'atomic',
    standardState: 'gas'
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    family: 'alkali metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.012182,
    symbol: 'Be',
    family: 'alkaline earth metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    family: 'metalloid',
    bondingType: 'covalent network',
    standardState: 'solid'
  },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    family: 'nonmetal',
    bondingType: 'covalent network',
    standardState: 'solid'
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    family: 'nonmetal',
    bondingType: 'diatomic',
    standardState: 'gas'
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    family: 'nonmetal',
    bondingType: 'diatomic',
    standardState: 'gas'
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984032,
    symbol: 'F',
    family: 'halogen',
    bondingType: 'atomic',
    standardState: 'gas'
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    family: 'noble gas',
    bondingType: 'atomic',
    standardState: 'gas'
  },
  {
    position: 11,
    name: 'Sodium',
    weight: 22.98976928,
    symbol: 'Na',
    family: 'alkali metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 12,
    name: 'Magnesium',
    weight: 24.305,
    symbol: 'Mg',
    family: 'alkaline earth metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 13,
    name: 'Aluminum or Aluminium',
    weight: 26.9815386,
    symbol: 'Al',
    family: 'metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 14,
    name: 'Silicon',
    weight: 28.0855,
    symbol: 'Si',
    family: 'metalloid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 15,
    name: 'Phosphorus',
    weight: 30.973762,
    symbol: 'P',
    family: 'nonmetal',
    bondingType: 'covalent network',
    standardState: 'solid'
  },
  {
    position: 16,
    name: 'Sulfur',
    weight: 32.065,
    symbol: 'S',
    family: 'nonmetal',
    bondingType: 'covalent network',
    standardState: 'solid'
  },
  {
    position: 17,
    name: 'Chlorine',
    weight: 35.453,
    symbol: 'Cl',
    family: 'halogen',
    bondingType: 'covalent network',
    standardState: 'gas'
  },
  {
    position: 18,
    name: 'Argon',
    weight: 39.948,
    symbol: 'Ar',
    family: 'noble gas',
    bondingType: 'atomic',
    standardState: 'gas'
  },
  {
    position: 19,
    name: 'Potassium',
    weight: 39.0983,
    symbol: 'K',
    family: 'alkali metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 20,
    name: 'Calcium',
    weight: 40.078,
    symbol: 'Ca',
    family: 'alkaline earth metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 21,
    name: 'Scandium',
    weight: 44.955912,
    symbol: 'Sc',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 22,
    name: 'Titanium',
    weight: 47.867,
    symbol: 'Ti',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 23,
    name: 'Vanadium',
    weight: 50.9415,
    symbol: 'V',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 24,
    name: 'Chromium',
    weight: 51.9961,
    symbol: 'Cr',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 25,
    name: 'Manganese',
    weight: 54.938045,
    symbol: 'Mn',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 26,
    name: 'Iron',
    weight: 55.845,
    symbol: 'Fe',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 27,
    name: 'Cobalt',
    weight: 58.933195,
    symbol: 'Co',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 28,
    name: 'Nickel',
    weight: 58.6934,
    symbol: 'Ni',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 29,
    name: 'Copper',
    weight: 63.546,
    symbol: 'Cu',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 30,
    name: 'Zinc',
    weight: 65.38,
    symbol: 'Zn',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 31,
    name: 'Gallium',
    weight: 69.723,
    symbol: 'Ga',
    family: 'metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 32,
    name: 'Germanium',
    weight: 72.64,
    symbol: 'Ge',
    family: 'metalloid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 33,
    name: 'Arsenic',
    weight: 74.9216,
    symbol: 'As',
    family: 'metalloid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 34,
    name: 'Selenium',
    weight: 78.96,
    symbol: 'Se',
    family: 'nonmetal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 35,
    name: 'Bromine',
    weight: 79.904,
    symbol: 'Br',
    family: 'halogen',
    bondingType: 'covalent network',
    standardState: 'liquid'
  },
  {
    position: 36,
    name: 'Krypton',
    weight: 83.798,
    symbol: 'Kr',
    family: 'noble gas',
    bondingType: 'atomic',
    standardState: 'gas'
  },
  {
    position: 37,
    name: 'Rubidium',
    weight: 85.4678,
    symbol: 'Rb',
    family: 'alkali metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 38,
    name: 'Strontium',
    weight: 87.62,
    symbol: 'Sr',
    family: 'alkaline earth metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 39,
    name: 'Yttrium',
    weight: 88.90585,
    symbol: 'Y',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 40,
    name: 'Zirconium',
    weight: 91.224,
    symbol: 'Zr',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 41,
    name: 'Niobium',
    weight: 92.90638,
    symbol: 'Nb',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 42,
    name: 'Molybdenum',
    weight: 95.96,
    symbol: 'Mo',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 43,
    name: 'Technetium',
    weight: 98.0,
    symbol: 'Tc',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 44,
    name: 'Ruthenium',
    weight: 101.07,
    symbol: 'Ru',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 45,
    name: 'Rhodium',
    weight: 102.9055,
    symbol: 'Rh',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 46,
    name: 'Palladium',
    weight: 106.42,
    symbol: 'Pd',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 47,
    name: 'Silver',
    weight: 107.8682,
    symbol: 'Ag',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 48,
    name: 'Cadmium',
    weight: 112.411,
    symbol: 'Cd',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 49,
    name: 'Indium',
    weight: 114.818,
    symbol: 'In',
    family: 'metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 50,
    name: 'Tin',
    weight: 118.71,
    symbol: 'Sn',
    family: 'metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 51,
    name: 'Antimony',
    weight: 121.76,
    symbol: 'Sb',
    family: 'metalloid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 52,
    name: 'Tellurium',
    weight: 127.6,
    symbol: 'Te',
    family: 'metalloid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 53,
    name: 'Iodine',
    weight: 126.90447,
    symbol: 'I',
    family: 'halogen',
    bondingType: 'covalent network',
    standardState: 'solid'
  },
  {
    position: 54,
    name: 'Xenon',
    weight: 131.293,
    symbol: 'Xe',
    family: 'noble gas',
    bondingType: 'atomic',
    standardState: 'gas'
  },
  {
    position: 55,
    name: 'Cesium',
    weight: 132.9054519,
    symbol: 'Cs',
    family: 'alkali metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 56,
    name: 'Barium',
    weight: 137.327,
    symbol: 'Ba',
    family: 'alkaline earth metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 57,
    name: 'Lanthanum',
    weight: 138.90547,
    symbol: 'La',
    family: 'lanthanoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 58,
    name: 'Cerium',
    weight: 140.116,
    symbol: 'Ce',
    family: 'lanthanoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 59,
    name: 'Praseodymium',
    weight: 140.90765,
    symbol: 'Pr',
    family: 'lanthanoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 60,
    name: 'Neodymium',
    weight: 144.242,
    symbol: 'Nd',
    family: 'lanthanoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 61,
    name: 'Promethium',
    weight: 145.0,
    symbol: 'Pm',
    family: 'lanthanoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 62,
    name: 'Samarium',
    weight: 150.36,
    symbol: 'Sm',
    family: 'lanthanoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 63,
    name: 'Europium',
    weight: 151.964,
    symbol: 'Eu',
    family: 'lanthanoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 64,
    name: 'Gadolinium',
    weight: 157.25,
    symbol: 'Gd',
    family: 'lanthanoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 65,
    name: 'Terbium',
    weight: 158.92535,
    symbol: 'Tb',
    family: 'lanthanoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 66,
    name: 'Dysprosium',
    weight: 162.5,
    symbol: 'Dy',
    family: 'lanthanoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 67,
    name: 'Holmium',
    weight: 164.93032,
    symbol: 'Ho',
    family: 'lanthanoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 68,
    name: 'Erbium',
    weight: 167.259,
    symbol: 'Er',
    family: 'lanthanoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 69,
    name: 'Thulium',
    weight: 168.93421,
    symbol: 'Tm',
    family: 'lanthanoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 70,
    name: 'Ytterbium',
    weight: 173.054,
    symbol: 'Yb',
    family: 'lanthanoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 71,
    name: 'Lutetium',
    weight: 174.9668,
    symbol: 'Lu',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 72,
    name: 'Hafnium',
    weight: 178.49,
    symbol: 'Hf',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 73,
    name: 'Tantalum',
    weight: 180.94788,
    symbol: 'Ta',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 74,
    name: 'Tungsten',
    weight: 183.84,
    symbol: 'W',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 75,
    name: 'Rhenium',
    weight: 186.207,
    symbol: 'Re',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 76,
    name: 'Osmium',
    weight: 190.23,
    symbol: 'Os',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 77,
    name: 'Iridium',
    weight: 192.217,
    symbol: 'Ir',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 78,
    name: 'Platinum',
    weight: 195.084,
    symbol: 'Pt',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 79,
    name: 'Gold',
    weight: 196.966569,
    symbol: 'Au',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 80,
    name: 'Mercury',
    weight: 200.59,
    symbol: 'Hg',
    family: 'transition metal',
    bondingType: 'metallic',
    standardState: 'liquid'
  },
  {
    position: 81,
    name: 'Thallium',
    weight: 204.3833,
    symbol: 'Tl',
    family: 'metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 82,
    name: 'Lead',
    weight: 207.2,
    symbol: 'Pb',
    family: 'metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 83,
    name: 'Bismuth',
    weight: 208.9804,
    symbol: 'Bi',
    family: 'metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 84,
    name: 'Polonium',
    weight: 209.0,
    symbol: 'Po',
    family: 'metalloid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 85,
    name: 'Astatine',
    weight: 210.0,
    symbol: 'At',
    family: 'halogen',
    bondingType: 'covalent network',
    standardState: 'solid'
  },
  {
    position: 86,
    name: 'Radon',
    weight: 222.0,
    symbol: 'Rn',
    family: 'noble gas',
    bondingType: 'atomic',
    standardState: 'gas'
  },
  {
    position: 87,
    name: 'Francium',
    weight: 223.0,
    symbol: 'Fr',
    family: 'alkali metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 88,
    name: 'Radium',
    weight: 226.0,
    symbol: 'Ra',
    family: 'alkaline earth metal',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 89,
    name: 'Actinium',
    weight: 227.0,
    symbol: 'Ac',
    family: 'actinoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 90,
    name: 'Thorium',
    weight: 232.03806,
    symbol: 'Th',
    family: 'actinoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 91,
    name: 'Protactinium',
    weight: 231.03588,
    symbol: 'Pa',
    family: 'actinoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 92,
    name: 'Uranium',
    weight: 238.02891,
    symbol: 'U',
    family: 'actinoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 93,
    name: 'Neptunium',
    weight: 237.0,
    symbol: 'Np',
    family: 'actinoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 94,
    name: 'Plutonium',
    weight: 244.0,
    symbol: 'Pu',
    family: 'actinoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 95,
    name: 'Americium',
    weight: 243.0,
    symbol: 'Am',
    family: 'actinoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 96,
    name: 'Curium',
    weight: 247.0,
    symbol: 'Cm',
    family: 'actinoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 97,
    name: 'Berkelium',
    weight: 247.0,
    symbol: 'Bk',
    family: 'actinoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 98,
    name: 'Californium',
    weight: 251.0,
    symbol: 'Cf',
    family: 'actinoid',
    bondingType: 'metallic',
    standardState: 'solid'
  },
  {
    position: 99,
    name: 'Einsteinium',
    weight: 252.0,
    symbol: 'Es',
    family: 'actinoid',
    bondingType: '',
    standardState: 'solid'
  },
  {
    position: 100,
    name: 'Fermium',
    weight: 257.0,
    symbol: 'Fm',
    family: 'actinoid',
    bondingType: '',
    standardState: ''
  },
  {
    position: 101,
    name: 'Mendelevium',
    weight: 258.0,
    symbol: 'Md',
    family: 'actinoid',
    bondingType: '',
    standardState: ''
  },
  {
    position: 102,
    name: 'Nobelium',
    weight: 259.0,
    symbol: 'No',
    family: 'actinoid',
    bondingType: '',
    standardState: ''
  },
  {
    position: 103,
    name: 'Lawrencium',
    weight: 262.0,
    symbol: 'Lr',
    family: 'transition metal',
    bondingType: '',
    standardState: ''
  },
  {
    position: 104,
    name: 'Rutherfordium',
    weight: 267.0,
    symbol: 'Rf',
    family: 'transition metal',
    bondingType: '',
    standardState: ''
  },
  {
    position: 105,
    name: 'Dubnium',
    weight: 268.0,
    symbol: 'Db',
    family: 'transition metal',
    bondingType: '',
    standardState: ''
  },
  {
    position: 106,
    name: 'Seaborgium',
    weight: 271.0,
    symbol: 'Sg',
    family: 'transition metal',
    bondingType: '',
    standardState: ''
  },
  {
    position: 107,
    name: 'Bohrium',
    weight: 272.0,
    symbol: 'Bh',
    family: 'transition metal',
    bondingType: '',
    standardState: ''
  },
  {
    position: 108,
    name: 'Hassium',
    weight: 270.0,
    symbol: 'Hs',
    family: 'transition metal',
    bondingType: '',
    standardState: ''
  },
  {
    position: 109,
    name: 'Meitnerium',
    weight: 276.0,
    symbol: 'Mt',
    family: 'transition metal',
    bondingType: '',
    standardState: ''
  },
  {
    position: 110,
    name: 'Darmstadtium',
    weight: 281.0,
    symbol: 'Ds',
    family: 'transition metal',
    bondingType: '',
    standardState: ''
  },
  {
    position: 111,
    name: 'Roentgenium',
    weight: 280.0,
    symbol: 'Rg',
    family: 'transition metal',
    bondingType: '',
    standardState: ''
  },
  {
    position: 112,
    name: 'Copernicium',
    weight: 285.0,
    symbol: 'Cn',
    family: 'transition metal',
    bondingType: '',
    standardState: ''
  },
  {
    position: 113,
    name: 'Ununtrium',
    weight: 284.0,
    symbol: 'Uut',
    family: 'metal',
    bondingType: '',
    standardState: ''
  },
  {
    position: 114,
    name: 'Ununquadium',
    weight: 289.0,
    symbol: 'Uuq',
    family: 'metal',
    bondingType: '',
    standardState: ''
  },
  {
    position: 115,
    name: 'Ununpentium',
    weight: 288.0,
    symbol: 'Uup',
    family: 'halogen',
    bondingType: '',
    standardState: ''
  },
  {
    position: 116,
    name: 'Ununhexium',
    weight: 293.0,
    symbol: 'Uuh',
    family: 'noble gas',
    bondingType: '',
    standardState: ''
  },
  {
    position: 117,
    name: 'Ununseptium',
    weight: null,
    symbol: 'Uus',
    family: 'alkali metal',
    bondingType: '',
    standardState: ''
  },
  {
    position: 118,
    name: 'Ununoctium',
    weight: 294.0,
    symbol: 'Uuo',
    family: 'alkaline earth metal',
    bondingType: '',
    standardState: ''
  }
];

@Component({
  selector: 'anms-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
