// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { Pony } from './app/pony';
import { Race } from './app/race';

declare const require: any;

// // First, initialize the Angular testing environment.
// getTestBed().initTestEnvironment(
//   BrowserDynamicTestingModule,
//   platformBrowserDynamicTesting()
// );
// // Then we find all the tests.
// const context = require.context('./', true, /\.spec\.ts$/);
// // And load the modules.
// context.keys().map(context);

it('test unit', () => {
  const s = 'real value';
  expect(s).toBe('real value');
});

it('test pony', () => {
  const p = new Pony();
  expect(p.id).toBe(0);
});

// Vérifier qu'une course a bien une liste de pony instanciée

it('test poniesRace', () => {
  const r = new Race;
  expect(r.poniesRace).toBeDefined;
});

// Vérifier qu'une course n'a pas de pony à la création

it('test ponyCreation', () => {
  const c = new Race;
  expect(c.poniesRace.length).toBe(0);
});

// Vérifier le nom par défaut d'un pony

it('test ponyDefaultName', () => {
  const pn = new Pony;
  expect(pn.name).toBe('nom');
});

// Vérifier la date par défaut d'une course

it('test raceDefaultDate', () => {
  const rd = new Race;
  expect(rd.date).toEqual(new Date());
});

// karma : moteur de tests
// jasmine : rassemble toutes les fonctions
//    fonction la plus importante : expect
// compatible avec tout le JS
// lancer un test sur angular : ng test