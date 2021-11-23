export default function (context) {
  console.log('check login middleware', context.store.getters.token)
  console.log('check login isAuthenticated', context.store.getters.isAuthenticated)
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/auth')
  }
}
