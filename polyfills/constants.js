export var RTLD_LAZY = 1;
export var RTLD_NOW = 2;
export var RTLD_GLOBAL = 256;
export var RTLD_LOCAL = 0;
export var RTLD_DEEPBIND = 8;
export var E2BIG = 7;
export var EACCES = 13;
export var EADDRINUSE = 98;
export var EADDRNOTAVAIL = 99;
export var EAFNOSUPPORT = 97;
export var EAGAIN = 11;
export var EALREADY = 114;
export var EBADF = 9;
export var EBADMSG = 74;
export var EBUSY = 16;
export var ECANCELED = 125;
export var ECHILD = 10;
export var ECONNABORTED = 103;
export var ECONNREFUSED = 111;
export var ECONNRESET = 104;
export var EDEADLK = 35;
export var EDESTADDRREQ = 89;
export var EDOM = 33;
export var EDQUOT = 122;
export var EEXIST = 17;
export var EFAULT = 14;
export var EFBIG = 27;
export var EHOSTUNREACH = 113;
export var EIDRM = 43;
export var EILSEQ = 84;
export var EINPROGRESS = 115;
export var EINTR = 4;
export var EINVAL = 22;
export var EIO = 5;
export var EISCONN = 106;
export var EISDIR = 21;
export var ELOOP = 40;
export var EMFILE = 24;
export var EMLINK = 31;
export var EMSGSIZE = 90;
export var EMULTIHOP = 72;
export var ENAMETOOLONG = 36;
export var ENETDOWN = 100;
export var ENETRESET = 102;
export var ENETUNREACH = 101;
export var ENFILE = 23;
export var ENOBUFS = 105;
export var ENODATA = 61;
export var ENODEV = 19;
export var ENOENT = 2;
export var ENOEXEC = 8;
export var ENOLCK = 37;
export var ENOLINK = 67;
export var ENOMEM = 12;
export var ENOMSG = 42;
export var ENOPROTOOPT = 92;
export var ENOSPC = 28;
export var ENOSR = 63;
export var ENOSTR = 60;
export var ENOSYS = 38;
export var ENOTCONN = 107;
export var ENOTDIR = 20;
export var ENOTEMPTY = 39;
export var ENOTSOCK = 88;
export var ENOTSUP = 95;
export var ENOTTY = 25;
export var ENXIO = 6;
export var EOPNOTSUPP = 95;
export var EOVERFLOW = 75;
export var EPERM = 1;
export var EPIPE = 32;
export var EPROTO = 71;
export var EPROTONOSUPPORT = 93;
export var EPROTOTYPE = 91;
export var ERANGE = 34;
export var EROFS = 30;
export var ESPIPE = 29;
export var ESRCH = 3;
export var ESTALE = 116;
export var ETIME = 62;
export var ETIMEDOUT = 110;
export var ETXTBSY = 26;
export var EWOULDBLOCK = 11;
export var EXDEV = 18;
export var PRIORITY_LOW = 19;
export var PRIORITY_BELOW_NORMAL = 10;
export var PRIORITY_NORMAL = 0;
export var PRIORITY_ABOVE_NORMAL = -7;
export var PRIORITY_HIGH = -14;
export var PRIORITY_HIGHEST = -20;
export var SIGHUP = 1;
export var SIGINT = 2;
export var SIGQUIT = 3;
export var SIGILL = 4;
export var SIGTRAP = 5;
export var SIGABRT = 6;
export var SIGIOT = 6;
export var SIGBUS = 7;
export var SIGFPE = 8;
export var SIGKILL = 9;
export var SIGUSR1 = 10;
export var SIGSEGV = 11;
export var SIGUSR2 = 12;
export var SIGPIPE = 13;
export var SIGALRM = 14;
export var SIGTERM = 15;
export var SIGCHLD = 17;
export var SIGSTKFLT = 16;
export var SIGCONT = 18;
export var SIGSTOP = 19;
export var SIGTSTP = 20;
export var SIGTTIN = 21;
export var SIGTTOU = 22;
export var SIGURG = 23;
export var SIGXCPU = 24;
export var SIGXFSZ = 25;
export var SIGVTALRM = 26;
export var SIGPROF = 27;
export var SIGWINCH = 28;
export var SIGIO = 29;
export var SIGPOLL = 29;
export var SIGPWR = 30;
export var SIGSYS = 31;
export var UV_FS_SYMLINK_DIR = 1;
export var UV_FS_SYMLINK_JUNCTION = 2;
export var O_RDONLY = 0;
export var O_WRONLY = 1;
export var O_RDWR = 2;
export var UV_DIRENT_UNKNOWN = 0;
export var UV_DIRENT_FILE = 1;
export var UV_DIRENT_DIR = 2;
export var UV_DIRENT_LINK = 3;
export var UV_DIRENT_FIFO = 4;
export var UV_DIRENT_SOCKET = 5;
export var UV_DIRENT_CHAR = 6;
export var UV_DIRENT_BLOCK = 7;
export var S_IFMT = 61440;
export var S_IFREG = 32768;
export var S_IFDIR = 16384;
export var S_IFCHR = 8192;
export var S_IFBLK = 24576;
export var S_IFIFO = 4096;
export var S_IFLNK = 40960;
export var S_IFSOCK = 49152;
export var O_CREAT = 64;
export var O_EXCL = 128;
export var UV_FS_O_FILEMAP = 0;
export var O_NOCTTY = 256;
export var O_TRUNC = 512;
export var O_APPEND = 1024;
export var O_DIRECTORY = 65536;
export var O_NOATIME = 262144;
export var O_NOFOLLOW = 131072;
export var O_SYNC = 1052672;
export var O_DSYNC = 4096;
export var O_DIRECT = 16384;
export var O_NONBLOCK = 2048;
export var S_IRWXU = 448;
export var S_IRUSR = 256;
export var S_IWUSR = 128;
export var S_IXUSR = 64;
export var S_IRWXG = 56;
export var S_IRGRP = 32;
export var S_IWGRP = 16;
export var S_IXGRP = 8;
export var S_IRWXO = 7;
export var S_IROTH = 4;
export var S_IWOTH = 2;
export var S_IXOTH = 1;
export var F_OK = 0;
export var R_OK = 4;
export var W_OK = 2;
export var X_OK = 1;
export var UV_FS_COPYFILE_EXCL = 1;
export var COPYFILE_EXCL = 1;
export var UV_FS_COPYFILE_FICLONE = 2;
export var COPYFILE_FICLONE = 2;
export var UV_FS_COPYFILE_FICLONE_FORCE = 4;
export var COPYFILE_FICLONE_FORCE = 4;
export var OPENSSL_VERSION_NUMBER = 269488351;
export var SSL_OP_ALL = 2147485780;
export var SSL_OP_ALLOW_NO_DHE_KEX = 1024;
export var SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION = 262144;
export var SSL_OP_CIPHER_SERVER_PREFERENCE = 4194304;
export var SSL_OP_CISCO_ANYCONNECT = 32768;
export var SSL_OP_COOKIE_EXCHANGE = 8192;
export var SSL_OP_CRYPTOPRO_TLSEXT_BUG = 2147483648;
export var SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS = 2048;
export var SSL_OP_EPHEMERAL_RSA = 0;
export var SSL_OP_LEGACY_SERVER_CONNECT = 4;
export var SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER = 0;
export var SSL_OP_MICROSOFT_SESS_ID_BUG = 0;
export var SSL_OP_MSIE_SSLV2_RSA_PADDING = 0;
export var SSL_OP_NETSCAPE_CA_DN_BUG = 0;
export var SSL_OP_NETSCAPE_CHALLENGE_BUG = 0;
export var SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG = 0;
export var SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG = 0;
export var SSL_OP_NO_COMPRESSION = 131072;
export var SSL_OP_NO_ENCRYPT_THEN_MAC = 524288;
export var SSL_OP_NO_QUERY_MTU = 4096;
export var SSL_OP_NO_RENEGOTIATION = 1073741824;
export var SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION = 65536;
export var SSL_OP_NO_SSLv2 = 0;
export var SSL_OP_NO_SSLv3 = 33554432;
export var SSL_OP_NO_TICKET = 16384;
export var SSL_OP_NO_TLSv1 = 67108864;
export var SSL_OP_NO_TLSv1_1 = 268435456;
export var SSL_OP_NO_TLSv1_2 = 134217728;
export var SSL_OP_NO_TLSv1_3 = 536870912;
export var SSL_OP_PKCS1_CHECK_1 = 0;
export var SSL_OP_PKCS1_CHECK_2 = 0;
export var SSL_OP_PRIORITIZE_CHACHA = 2097152;
export var SSL_OP_SINGLE_DH_USE = 0;
export var SSL_OP_SINGLE_ECDH_USE = 0;
export var SSL_OP_SSLEAY_080_CLIENT_DH_BUG = 0;
export var SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG = 0;
export var SSL_OP_TLS_BLOCK_PADDING_BUG = 0;
export var SSL_OP_TLS_D5_BUG = 0;
export var SSL_OP_TLS_ROLLBACK_BUG = 8388608;
export var ENGINE_METHOD_RSA = 1;
export var ENGINE_METHOD_DSA = 2;
export var ENGINE_METHOD_DH = 4;
export var ENGINE_METHOD_RAND = 8;
export var ENGINE_METHOD_EC = 2048;
export var ENGINE_METHOD_CIPHERS = 64;
export var ENGINE_METHOD_DIGESTS = 128;
export var ENGINE_METHOD_PKEY_METHS = 512;
export var ENGINE_METHOD_PKEY_ASN1_METHS = 1024;
export var ENGINE_METHOD_ALL = 65535;
export var ENGINE_METHOD_NONE = 0;
export var DH_CHECK_P_NOT_SAFE_PRIME = 2;
export var DH_CHECK_P_NOT_PRIME = 1;
export var DH_UNABLE_TO_CHECK_GENERATOR = 4;
export var DH_NOT_SUITABLE_GENERATOR = 8;
export var ALPN_ENABLED = 1;
export var RSA_PKCS1_PADDING = 1;
export var RSA_SSLV23_PADDING = 2;
export var RSA_NO_PADDING = 3;
export var RSA_PKCS1_OAEP_PADDING = 4;
export var RSA_X931_PADDING = 5;
export var RSA_PKCS1_PSS_PADDING = 6;
export var RSA_PSS_SALTLEN_DIGEST = -1;
export var RSA_PSS_SALTLEN_MAX_SIGN = -2;
export var RSA_PSS_SALTLEN_AUTO = -2;
export var defaultCoreCipherList = "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA";
export var TLS1_VERSION = 769;
export var TLS1_1_VERSION = 770;
export var TLS1_2_VERSION = 771;
export var TLS1_3_VERSION = 772;
export var POINT_CONVERSION_COMPRESSED = 2;
export var POINT_CONVERSION_UNCOMPRESSED = 4;
export var POINT_CONVERSION_HYBRID = 6;
export default {
  RTLD_LAZY: RTLD_LAZY,
  RTLD_NOW: RTLD_NOW,
  RTLD_GLOBAL: RTLD_GLOBAL,
  RTLD_LOCAL: RTLD_LOCAL,
  RTLD_DEEPBIND: RTLD_DEEPBIND,
  E2BIG: E2BIG,
  EACCES: EACCES,
  EADDRINUSE: EADDRINUSE,
  EADDRNOTAVAIL: EADDRNOTAVAIL,
  EAFNOSUPPORT: EAFNOSUPPORT,
  EAGAIN: EAGAIN,
  EALREADY: EALREADY,
  EBADF: EBADF,
  EBADMSG: EBADMSG,
  EBUSY: EBUSY,
  ECANCELED: ECANCELED,
  ECHILD: ECHILD,
  ECONNABORTED: ECONNABORTED,
  ECONNREFUSED: ECONNREFUSED,
  ECONNRESET: ECONNRESET,
  EDEADLK: EDEADLK,
  EDESTADDRREQ: EDESTADDRREQ,
  EDOM: EDOM,
  EDQUOT: EDQUOT,
  EEXIST: EEXIST,
  EFAULT: EFAULT,
  EFBIG: EFBIG,
  EHOSTUNREACH: EHOSTUNREACH,
  EIDRM: EIDRM,
  EILSEQ: EILSEQ,
  EINPROGRESS: EINPROGRESS,
  EINTR: EINTR,
  EINVAL: EINVAL,
  EIO: EIO,
  EISCONN: EISCONN,
  EISDIR: EISDIR,
  ELOOP: ELOOP,
  EMFILE: EMFILE,
  EMLINK: EMLINK,
  EMSGSIZE: EMSGSIZE,
  EMULTIHOP: EMULTIHOP,
  ENAMETOOLONG: ENAMETOOLONG,
  ENETDOWN: ENETDOWN,
  ENETRESET: ENETRESET,
  ENETUNREACH: ENETUNREACH,
  ENFILE: ENFILE,
  ENOBUFS: ENOBUFS,
  ENODATA: ENODATA,
  ENODEV: ENODEV,
  ENOENT: ENOENT,
  ENOEXEC: ENOEXEC,
  ENOLCK: ENOLCK,
  ENOLINK: ENOLINK,
  ENOMEM: ENOMEM,
  ENOMSG: ENOMSG,
  ENOPROTOOPT: ENOPROTOOPT,
  ENOSPC: ENOSPC,
  ENOSR: ENOSR,
  ENOSTR: ENOSTR,
  ENOSYS: ENOSYS,
  ENOTCONN: ENOTCONN,
  ENOTDIR: ENOTDIR,
  ENOTEMPTY: ENOTEMPTY,
  ENOTSOCK: ENOTSOCK,
  ENOTSUP: ENOTSUP,
  ENOTTY: ENOTTY,
  ENXIO: ENXIO,
  EOPNOTSUPP: EOPNOTSUPP,
  EOVERFLOW: EOVERFLOW,
  EPERM: EPERM,
  EPIPE: EPIPE,
  EPROTO: EPROTO,
  EPROTONOSUPPORT: EPROTONOSUPPORT,
  EPROTOTYPE: EPROTOTYPE,
  ERANGE: ERANGE,
  EROFS: EROFS,
  ESPIPE: ESPIPE,
  ESRCH: ESRCH,
  ESTALE: ESTALE,
  ETIME: ETIME,
  ETIMEDOUT: ETIMEDOUT,
  ETXTBSY: ETXTBSY,
  EWOULDBLOCK: EWOULDBLOCK,
  EXDEV: EXDEV,
  PRIORITY_LOW: PRIORITY_LOW,
  PRIORITY_BELOW_NORMAL: PRIORITY_BELOW_NORMAL,
  PRIORITY_NORMAL: PRIORITY_NORMAL,
  PRIORITY_ABOVE_NORMAL: PRIORITY_ABOVE_NORMAL,
  PRIORITY_HIGH: PRIORITY_HIGH,
  PRIORITY_HIGHEST: PRIORITY_HIGHEST,
  SIGHUP: SIGHUP,
  SIGINT: SIGINT,
  SIGQUIT: SIGQUIT,
  SIGILL: SIGILL,
  SIGTRAP: SIGTRAP,
  SIGABRT: SIGABRT,
  SIGIOT: SIGIOT,
  SIGBUS: SIGBUS,
  SIGFPE: SIGFPE,
  SIGKILL: SIGKILL,
  SIGUSR1: SIGUSR1,
  SIGSEGV: SIGSEGV,
  SIGUSR2: SIGUSR2,
  SIGPIPE: SIGPIPE,
  SIGALRM: SIGALRM,
  SIGTERM: SIGTERM,
  SIGCHLD: SIGCHLD,
  SIGSTKFLT: SIGSTKFLT,
  SIGCONT: SIGCONT,
  SIGSTOP: SIGSTOP,
  SIGTSTP: SIGTSTP,
  SIGTTIN: SIGTTIN,
  SIGTTOU: SIGTTOU,
  SIGURG: SIGURG,
  SIGXCPU: SIGXCPU,
  SIGXFSZ: SIGXFSZ,
  SIGVTALRM: SIGVTALRM,
  SIGPROF: SIGPROF,
  SIGWINCH: SIGWINCH,
  SIGIO: SIGIO,
  SIGPOLL: SIGPOLL,
  SIGPWR: SIGPWR,
  SIGSYS: SIGSYS,
  UV_FS_SYMLINK_DIR: UV_FS_SYMLINK_DIR,
  UV_FS_SYMLINK_JUNCTION: UV_FS_SYMLINK_JUNCTION,
  O_RDONLY: O_RDONLY,
  O_WRONLY: O_WRONLY,
  O_RDWR: O_RDWR,
  UV_DIRENT_UNKNOWN: UV_DIRENT_UNKNOWN,
  UV_DIRENT_FILE: UV_DIRENT_FILE,
  UV_DIRENT_DIR: UV_DIRENT_DIR,
  UV_DIRENT_LINK: UV_DIRENT_LINK,
  UV_DIRENT_FIFO: UV_DIRENT_FIFO,
  UV_DIRENT_SOCKET: UV_DIRENT_SOCKET,
  UV_DIRENT_CHAR: UV_DIRENT_CHAR,
  UV_DIRENT_BLOCK: UV_DIRENT_BLOCK,
  S_IFMT: S_IFMT,
  S_IFREG: S_IFREG,
  S_IFDIR: S_IFDIR,
  S_IFCHR: S_IFCHR,
  S_IFBLK: S_IFBLK,
  S_IFIFO: S_IFIFO,
  S_IFLNK: S_IFLNK,
  S_IFSOCK: S_IFSOCK,
  O_CREAT: O_CREAT,
  O_EXCL: O_EXCL,
  UV_FS_O_FILEMAP: UV_FS_O_FILEMAP,
  O_NOCTTY: O_NOCTTY,
  O_TRUNC: O_TRUNC,
  O_APPEND: O_APPEND,
  O_DIRECTORY: O_DIRECTORY,
  O_NOATIME: O_NOATIME,
  O_NOFOLLOW: O_NOFOLLOW,
  O_SYNC: O_SYNC,
  O_DSYNC: O_DSYNC,
  O_DIRECT: O_DIRECT,
  O_NONBLOCK: O_NONBLOCK,
  S_IRWXU: S_IRWXU,
  S_IRUSR: S_IRUSR,
  S_IWUSR: S_IWUSR,
  S_IXUSR: S_IXUSR,
  S_IRWXG: S_IRWXG,
  S_IRGRP: S_IRGRP,
  S_IWGRP: S_IWGRP,
  S_IXGRP: S_IXGRP,
  S_IRWXO: S_IRWXO,
  S_IROTH: S_IROTH,
  S_IWOTH: S_IWOTH,
  S_IXOTH: S_IXOTH,
  F_OK: F_OK,
  R_OK: R_OK,
  W_OK: W_OK,
  X_OK: X_OK,
  UV_FS_COPYFILE_EXCL: UV_FS_COPYFILE_EXCL,
  COPYFILE_EXCL: COPYFILE_EXCL,
  UV_FS_COPYFILE_FICLONE: UV_FS_COPYFILE_FICLONE,
  COPYFILE_FICLONE: COPYFILE_FICLONE,
  UV_FS_COPYFILE_FICLONE_FORCE: UV_FS_COPYFILE_FICLONE_FORCE,
  COPYFILE_FICLONE_FORCE: COPYFILE_FICLONE_FORCE,
  OPENSSL_VERSION_NUMBER: OPENSSL_VERSION_NUMBER,
  SSL_OP_ALL: SSL_OP_ALL,
  SSL_OP_ALLOW_NO_DHE_KEX: SSL_OP_ALLOW_NO_DHE_KEX,
  SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION,
  SSL_OP_CIPHER_SERVER_PREFERENCE: SSL_OP_CIPHER_SERVER_PREFERENCE,
  SSL_OP_CISCO_ANYCONNECT: SSL_OP_CISCO_ANYCONNECT,
  SSL_OP_COOKIE_EXCHANGE: SSL_OP_COOKIE_EXCHANGE,
  SSL_OP_CRYPTOPRO_TLSEXT_BUG: SSL_OP_CRYPTOPRO_TLSEXT_BUG,
  SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS,
  SSL_OP_EPHEMERAL_RSA: SSL_OP_EPHEMERAL_RSA,
  SSL_OP_LEGACY_SERVER_CONNECT: SSL_OP_LEGACY_SERVER_CONNECT,
  SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER,
  SSL_OP_MICROSOFT_SESS_ID_BUG: SSL_OP_MICROSOFT_SESS_ID_BUG,
  SSL_OP_MSIE_SSLV2_RSA_PADDING: SSL_OP_MSIE_SSLV2_RSA_PADDING,
  SSL_OP_NETSCAPE_CA_DN_BUG: SSL_OP_NETSCAPE_CA_DN_BUG,
  SSL_OP_NETSCAPE_CHALLENGE_BUG: SSL_OP_NETSCAPE_CHALLENGE_BUG,
  SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG,
  SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG,
  SSL_OP_NO_COMPRESSION: SSL_OP_NO_COMPRESSION,
  SSL_OP_NO_ENCRYPT_THEN_MAC: SSL_OP_NO_ENCRYPT_THEN_MAC,
  SSL_OP_NO_QUERY_MTU: SSL_OP_NO_QUERY_MTU,
  SSL_OP_NO_RENEGOTIATION: SSL_OP_NO_RENEGOTIATION,
  SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION,
  SSL_OP_NO_SSLv2: SSL_OP_NO_SSLv2,
  SSL_OP_NO_SSLv3: SSL_OP_NO_SSLv3,
  SSL_OP_NO_TICKET: SSL_OP_NO_TICKET,
  SSL_OP_NO_TLSv1: SSL_OP_NO_TLSv1,
  SSL_OP_NO_TLSv1_1: SSL_OP_NO_TLSv1_1,
  SSL_OP_NO_TLSv1_2: SSL_OP_NO_TLSv1_2,
  SSL_OP_NO_TLSv1_3: SSL_OP_NO_TLSv1_3,
  SSL_OP_PKCS1_CHECK_1: SSL_OP_PKCS1_CHECK_1,
  SSL_OP_PKCS1_CHECK_2: SSL_OP_PKCS1_CHECK_2,
  SSL_OP_PRIORITIZE_CHACHA: SSL_OP_PRIORITIZE_CHACHA,
  SSL_OP_SINGLE_DH_USE: SSL_OP_SINGLE_DH_USE,
  SSL_OP_SINGLE_ECDH_USE: SSL_OP_SINGLE_ECDH_USE,
  SSL_OP_SSLEAY_080_CLIENT_DH_BUG: SSL_OP_SSLEAY_080_CLIENT_DH_BUG,
  SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG,
  SSL_OP_TLS_BLOCK_PADDING_BUG: SSL_OP_TLS_BLOCK_PADDING_BUG,
  SSL_OP_TLS_D5_BUG: SSL_OP_TLS_D5_BUG,
  SSL_OP_TLS_ROLLBACK_BUG: SSL_OP_TLS_ROLLBACK_BUG,
  ENGINE_METHOD_RSA: ENGINE_METHOD_RSA,
  ENGINE_METHOD_DSA: ENGINE_METHOD_DSA,
  ENGINE_METHOD_DH: ENGINE_METHOD_DH,
  ENGINE_METHOD_RAND: ENGINE_METHOD_RAND,
  ENGINE_METHOD_EC: ENGINE_METHOD_EC,
  ENGINE_METHOD_CIPHERS: ENGINE_METHOD_CIPHERS,
  ENGINE_METHOD_DIGESTS: ENGINE_METHOD_DIGESTS,
  ENGINE_METHOD_PKEY_METHS: ENGINE_METHOD_PKEY_METHS,
  ENGINE_METHOD_PKEY_ASN1_METHS: ENGINE_METHOD_PKEY_ASN1_METHS,
  ENGINE_METHOD_ALL: ENGINE_METHOD_ALL,
  ENGINE_METHOD_NONE: ENGINE_METHOD_NONE,
  DH_CHECK_P_NOT_SAFE_PRIME: DH_CHECK_P_NOT_SAFE_PRIME,
  DH_CHECK_P_NOT_PRIME: DH_CHECK_P_NOT_PRIME,
  DH_UNABLE_TO_CHECK_GENERATOR: DH_UNABLE_TO_CHECK_GENERATOR,
  DH_NOT_SUITABLE_GENERATOR: DH_NOT_SUITABLE_GENERATOR,
  ALPN_ENABLED: ALPN_ENABLED,
  RSA_PKCS1_PADDING: RSA_PKCS1_PADDING,
  RSA_SSLV23_PADDING: RSA_SSLV23_PADDING,
  RSA_NO_PADDING: RSA_NO_PADDING,
  RSA_PKCS1_OAEP_PADDING: RSA_PKCS1_OAEP_PADDING,
  RSA_X931_PADDING: RSA_X931_PADDING,
  RSA_PKCS1_PSS_PADDING: RSA_PKCS1_PSS_PADDING,
  RSA_PSS_SALTLEN_DIGEST: RSA_PSS_SALTLEN_DIGEST,
  RSA_PSS_SALTLEN_MAX_SIGN: RSA_PSS_SALTLEN_MAX_SIGN,
  RSA_PSS_SALTLEN_AUTO: RSA_PSS_SALTLEN_AUTO,
  defaultCoreCipherList: defaultCoreCipherList,
  TLS1_VERSION: TLS1_VERSION,
  TLS1_1_VERSION: TLS1_1_VERSION,
  TLS1_2_VERSION: TLS1_2_VERSION,
  TLS1_3_VERSION: TLS1_3_VERSION,
  POINT_CONVERSION_COMPRESSED: POINT_CONVERSION_COMPRESSED,
  POINT_CONVERSION_UNCOMPRESSED: POINT_CONVERSION_UNCOMPRESSED,
  POINT_CONVERSION_HYBRID: POINT_CONVERSION_HYBRID
};
