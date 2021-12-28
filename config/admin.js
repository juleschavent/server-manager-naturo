module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7da752080339debd42d125cecc2866bf'),
  },
});
