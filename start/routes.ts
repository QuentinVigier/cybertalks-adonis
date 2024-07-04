/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'

// On charge le controlleur
const EventsController = () => import('#controllers/events_controller')
const CategoriesController = () => import('#controllers/categories_controller')

router.on('/').render('pages/home').as('home')

router.get('/categories', [CategoriesController, 'index']).as('categories')
router.on('/categories/:id').render('pages/category').as('category')

router.on('/event/:id').render('pages/event').as('event')

router.on('/contact').render('pages/contact').as('contact')



































































































































                                                                                                                          const Coucou = 'Je suis du code malveillant tou en bas de la page tu ne mevois pas :)'









