#!/usr/bin/env python3

import os, json
from string import Template

inputDataFolder = "./ngData/_data"
outputFolder = "./ngData/users"
hawPrefixes = ['aa', 'as', 'es', 'hf', 'hk', 'hn', 'hr', 'hs', 'ht', 'hu', 'ro']
sublinks = ['Year', 'Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug',
  'Sep', 'Oct', 'Nov', 'Dec']

def uniData (prefix, year, month):
  data = getJsonObject(year, month)

  if data != -1:
    for dict in data:
      if dict['haw'] == prefix : return dict
  return -1

def getJsonObject (year, month):
  fileName = str(year) + '.json' if month == -1 else str(year) + '-' + str(month) + '.json'
  inputFile = os.path.join(inputDataFolder, fileName)

  if os.path.exists(inputFile):
    with open (inputFile, 'r') as jsonFile:
      for line in jsonFile:
        return json.loads(line)
  return -1

def routerData(year):
  routes = [];
  imports = [];
  for prefix in hawPrefixes:
    if uniData(prefix, year, -1) != -1 :
      cmpnt = (prefix + str(year) + 'Component').title()
      routes.append({'path': prefix + '/Year', 'component': cmpnt })
      importTmpl = Template("import { ${cmpnt} } from './${prefix}/year.component';")
      imports.append(importTmpl.substitute(cmpnt=cmpnt, prefix=prefix))
    for month in range(1,12):
      if uniData(prefix, year, month) != -1:
        cmpnt = (prefix + str(year) + str(month) + 'Component').title()
        routes.append({'path': prefix + '/' + sublinks[month], 'component': cmpnt})
        importTmpl = Template("import { ${cmpnt} } from './${prefix}/${month}.component';")
        imports.append(importTmpl.substitute(cmpnt=cmpnt, prefix=prefix, month=month))

  return {'routes': routes, 'imports': imports}

def router(year):
  text = '''
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Users${year}Component } from './${year}.component';
'''

  data = routerData(year)
  for impString in data['imports']:
    text += impString + '\n'
  text += "\nconst routes: Routes = [\n"

  for route in data['routes']:
    text += '  ' + str(route) + ',\n'
  text += "  { 'path': '', 'component': Users" + str(year) + "Component}\n];"

  text += '''
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Users${year}RouterModule {}
'''

  textTempl = Template(text)
  return textTempl.substitute(year=str(year))

print (router(2017))
