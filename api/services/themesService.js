const Theme = require('../data/models/theme');

class ThemeService{
    async getThemes(){
        var themes = await Theme.findAll();
        return themes;
    }

    async insertTheme(description){
       var newTheme = await Theme.build({Description: description});
       return newTheme.save(); 
    }
}
module.exports = new ThemeService();