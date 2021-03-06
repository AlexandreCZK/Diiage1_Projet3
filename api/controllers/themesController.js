var express = require('express');
var themesService = require('../services/themesService');

class ThemeController {
    constructor() {

    }
    async getThemes(request, response) {
        try {
            var themes = await themesService.getThemes();
            return response.status(200).send(themes);
        } catch (error) {
            return response.status(500).send(error.errors);
        }

    }

    async createThemes(request, response) {
        var description = request.body.Description;
        try {
            var newThemes = await themesService.insertTheme(description);
            return response.status(201).send(newThemes);
        } catch (error) {
            if (error.errors[0].validatorKey == 'not_unique') {
                return response.status(409).send(error.errors);
            }
            else {
                return response.status(404).send(error.errors);
            }
        }

    }
}

module.exports = new ThemeController();