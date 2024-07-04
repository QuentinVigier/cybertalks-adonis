import type { HttpContext, Request } from '@adonisjs/core/http'

export default class PagesController {

    async contact({ view }: HttpContext) {
        return view.render('pages/contact', {
            pageTitle: 'Nous Contacter',
    })
}
}