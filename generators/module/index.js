const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  writing() {
    const name = this.options.name || 'module';
    const titleCase = string => string.charAt(0).toUpperCase() + string.slice(1);
    const lowerCase = string => string.charAt(0).toLowerCase() + string.slice(1);
    const path = this.options.dir ? `app/${this.options.dir}` : `app/${lowerCase(name)}`;
    const typings = this.options.dir ? this.options.dir.split('/').reduce(prev => `../${prev}`, '../../typings/index.d.ts') : '../../typings/index.d.ts';
    const props = {
      moduleName: lowerCase(name),
      componentName: lowerCase(name),
      directiveName: lowerCase(name),
      serviceName: titleCase(name),
      filterName: lowerCase(name),
      className: titleCase(name),
      modules: this.config.get('props').modules,
      js: this.config.get('props').js,
      framework: 'angular1',
      name,
      typings,
      templateUrl: this.config.get('props').modules === 'systemjs' ? `src/${path}/${name}.html` : `${path}/${name}.html`
    };
    this.copyTemplate(`src/app/component.js`, `src/${path}/${name}Component.js`, props);
    this.copyTemplate(`src/app/component.spec.js`, `src/${path}/${name}Component.spec.js`, props);
    this.copyTemplate('src/app/component.html', `src/${path}/${name}.html`, props);
    this.copyTemplate(`src/app/directive.js`, `src/${path}/${name}Directive.js`, props);
    this.copyTemplate(`src/app/directive.spec.js`, `src/${path}/${name}Directive.spec.js`, props);
    this.copyTemplate(`src/app/service.js`, `src/${path}/${name}Service.js`, props);
    this.copyTemplate(`src/app/service.spec.js`, `src/${path}/${name}Service.spec.js`, props);
    this.copyTemplate(`src/app/filter.js`, `src/${path}/${name}Filter.js`, props);
    this.copyTemplate(`src/app/filter.spec.js`, `src/${path}/${name}Filter.spec.js`, props);
    this.copyTemplate(`src/app/index.js`, `src/${path}/index.js`, props);
    this.copyTemplate(`src/app/style.css`, `src/${path}/style.css`, props);
    this.copyTemplate(`src/app/style.sass`, `src/${path}/style.sass`, props);
    this.copyTemplate(`src/app/style.scss`, `src/${path}/style.scss`, props);
    this.copyTemplate(`src/app/style.less`, `src/${path}/style.less`, props);
    this.copyTemplate(`src/app/style.styl`, `src/${path}/style.styl`, props);
  }
});
