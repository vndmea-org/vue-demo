const express = require('express');
const crypto = require('crypto');

const router = express.Router();

function encrypt(userName, pwd) {
  const hash = crypto.createHash('sha256');
  hash.update(userName + pwd);
  return hash.digest('hex');
}

// hash: encrypt('admin', '123456'),
// hash: encrypt('foruok', '888888'),
const userdb = [
  {
    userName: 'admin',
    hash: 'ac0e7d037817094e9e0b4441f9bae3209d67b02fa484917065f71b16109a1a78',
    last: ''
  },
  {
    userName: 'root',
    hash: 'e6765b49ef212e69ca93ee42401913df64486a21119f7d2c5cc89be00a62f670',
    last: ''
  }
];

// function getLastLoginTime(userName) {
//   for (let i = 0; i < userdb.length; i += 1) {
//     const user = userdb[i];
//     if (userName === user.userName) {
//       return user.last;
//     }
//   }
//   return '';
// }

// function updateLastLoginTime(userName) {
//   for (let i = 0; i < userdb.length; i += 1) {
//     const user = userdb[i];
//     if (userName === user.userName) {
//       user.last = Date().toString();
//       return;
//     }
//   }
// }

const map = {};

function authenticate(userName, hash) {
  for (let i = 0; i < userdb.length; i += 1) {
    const user = userdb[i];
    if (userName === user.userName) {
      if (hash === user.hash) {
        return 0;
      }
      return 1;
    }
  }

  return 2;
}

function isLogin(req) {
  if (req.cookies.account != null) {
    const account = req.cookies.account;
    const user = account.account;
    const hash = account.hash;
    if (authenticate(user, hash) === 0) {
      return true;
    }
  }
  return false;
}

function isExpired(req) {
  const userName = req.cookies.account.account;
  if (map[userName] === req.session.id) {
    return false;
  }
  return true;
}

router.requireAuthentication = function(req, res, next) {
  if (req.path === '/login') {
    next();
    return;
  }

  if (req.cookies.account != null) {
    const account = req.cookies.account;
    const user = account.account;
    const hash = account.hash;
    if (authenticate(user, hash) === 0) {
      next();
      return;
    }
  }
  res.redirect(`/login?${Date.now()}`);
};

router
  .get('/login', (req, res) => {
    if (isLogin(req) && !isExpired(req)) {
      res.redirect(`/userList?${Date.now()}`);
    } else {
      res.render('login');
    }
  })
  .post('/login', (req, res) => {
    const userName = req.body.login_username;
    const hash = encrypt(userName, req.body.login_password);
    switch (authenticate(userName, hash)) {
    case 0: {
      // updateLastLoginTime(userName);
      res.cookie('account', { account: userName, hash }, { httpOnly: true });
      const sid = req.cookies['connect.sid'];

      map[userName] = sid ? sid.replace(':', '.').split('.')[1] : '';
      res.redirect(`/userList?${Date.now()}`);
      break;
    }
    case 1:
      res.render('login', { msg: 'Wrong password.' });
      break;
    case 2:
      res.render('login', { msg: 'Not existed user.' });
      break;
    default:
      res.render('login');
    }
  });

router.get('/logout', (req, res) => {
  res.clearCookie('account');
  res.redirect(`/login?${Date.now()}`);
});

router.get('/userList', (req, res) => {
  res.render('userList', {
    msg: `Last login time: ${req.cookies.account.account}`,
    title: 'Succeed.',
    lastTime: `Last login time：${req.cookies.account.last}`
  });
});

module.exports = router;
