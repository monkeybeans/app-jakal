function getSession() {
  let session = {};

  const sessionMatch = /jakal_session=(.*);?/.exec(document.cookie);
  if (sessionMatch) {
    session = JSON.parse(sessionMatch[1]);
  }

  return session;
}

function updateSessionCookie(sessionData) {
  const session = getSession();
  Object.assign(session, sessionData);
  const expireDate = new Date();
  expireDate.setMonth(expireDate.getMonth() + 1);

  document.cookie = `jakal_session=${JSON.stringify(session)};expires=${expireDate}`;
}

export {
  getSession,
  updateSessionCookie,
};
