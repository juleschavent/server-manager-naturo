'use strict';

/**
 * traitement service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::traitement.traitement');
