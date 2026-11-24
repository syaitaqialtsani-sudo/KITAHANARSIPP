/**
 * ============================================================================
 * HANARSIP (Hanoco Arsip) - ALL-IN-ONE SINGLE FILE DEPLOYMENT
 * PT. Hanoco Interior Arsitektur
 *
 * CARA PAKAI (SUPER PRAKTIS):
 * 1. Buka Google Sheets DB_HANARSIP -> Ekstensi -> Apps Script.
 * 2. Cukup ganti seluruh isi Code.gs dengan KODE INI (HANYA 1 FILE INI!).
 * 3. Pilih fungsi setupSistem -> klik Run.
 * 4. Klik Deploy -> New deployment -> Web app -> Deploy. Selesai!
 * ============================================================================
 */

function doGet(e) {
  return HtmlService.createHtmlOutput(getAppHtml())
    .setTitle('HANARSIP - PT. Hanoco Interior Arsitektur')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, shrink-to-fit=no')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getAppHtml() {
  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HANARSIP - PT. Hanoco Interior Arsitektur</title>
  <!-- Bootstrap 5 CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<!-- Bootstrap Icons -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
<!-- Google Fonts: Plus Jakarta Sans -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<style>
  :root {
    --navy-dark: #0B1F3A;
    --navy-primary: #16325C;
    --navy-light: #1E4580;
    --navy-subtle: #EEF4FC;
    --bg-page: #F4F6F9;
    --card-bg: #FFFFFF;
    --text-primary: #1E293B;
    --text-muted: #64748B;
    --border-color: #E2E8F0;
    --sidebar-width: 260px;
    --sidebar-collapsed-width: 70px;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: var(--bg-page);
    color: var(--text-primary);
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  /* ==========================================================================
     LAYOUT STRUCTURE & SIDEBAR
     ========================================================================== */
  #app-wrapper {
    display: flex;
    min-height: 100vh;
  }

  #sidebar {
    width: var(--sidebar-width);
    background-color: var(--navy-dark);
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  }

  .sidebar-header {
    padding: 20px 18px;
    display: flex;
    align-items: center;
    gap: 12px;
    background: linear-gradient(180deg, rgba(22, 50, 92, 0.4) 0%, rgba(11, 31, 58, 0) 100%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .brand-logo-icon {
    width: 42px;
    height: 42px;
    background: linear-gradient(135deg, #16325C 0%, #2563EB 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 800;
    color: #FFFFFF;
    box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3);
  }

  .brand-title {
    font-weight: 800;
    font-size: 1.15rem;
    letter-spacing: 0.5px;
    line-height: 1.2;
    color: #FFFFFF;
    margin: 0;
  }

  .brand-subtitle {
    font-size: 0.68rem;
    color: #94A3B8;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }

  .sidebar-menu {
    flex-grow: 1;
    overflow-y: auto;
    padding: 15px 12px;
  }

  .menu-category {
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #64748B;
    margin: 18px 8px 6px 8px;
  }

  .sidebar-nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    margin-bottom: 4px;
    color: #CBD5E1;
    text-decoration: none;
    border-radius: 8px;
    font-size: 0.88rem;
    font-weight: 500;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .sidebar-nav-item i {
    font-size: 1.15rem;
    width: 22px;
    text-align: center;
  }

  .sidebar-nav-item:hover {
    color: #FFFFFF;
    background-color: rgba(255, 255, 255, 0.08);
  }

  .sidebar-nav-item.active {
    color: #FFFFFF;
    background: linear-gradient(90deg, var(--navy-primary) 0%, var(--navy-light) 100%);
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(22, 50, 92, 0.5);
  }

  .sidebar-footer {
    padding: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    background-color: rgba(0, 0, 0, 0.15);
  }

  .user-badge {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .user-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: var(--navy-light);
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.9rem;
  }

  /* ==========================================================================
     MAIN CONTENT & TOPBAR
     ========================================================================== */
  #main-content {
    margin-left: var(--sidebar-width);
    flex-grow: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    transition: margin-left 0.3s ease;
  }

  .topbar {
    background-color: #FFFFFF;
    border-bottom: 1px solid var(--border-color);
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1020;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
  }

  .page-container {
    padding: 24px;
    flex-grow: 1;
  }

  /* ==========================================================================
     CARD & COMPONENT STYLING
     ========================================================================== */
  .card-custom {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(11, 31, 58, 0.03);
    margin-bottom: 24px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .card-header-custom {
    background-color: #FFFFFF;
    border-bottom: 1px solid var(--border-color);
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .card-header-custom h5 {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--navy-dark);
    margin: 0;
  }

  /* Metric Stat Cards */
  .stat-card {
    border-radius: 12px;
    padding: 20px;
    background: #FFFFFF;
    border: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    gap: 16px;
    position: relative;
    overflow: hidden;
  }

  .stat-card::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: var(--navy-primary);
  }

  .stat-card.stat-warning::after { background-color: #F59E0B; }
  .stat-card.stat-danger::after { background-color: #EF4444; }
  .stat-card.stat-success::after { background-color: #10B981; }
  .stat-card.stat-info::after { background-color: #06B6D4; }

  .stat-icon {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    background-color: var(--navy-subtle);
    color: var(--navy-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
  }

  .stat-number {
    font-size: 1.7rem;
    font-weight: 800;
    line-height: 1.1;
    color: var(--navy-dark);
    margin: 0;
  }

  .stat-label {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 0;
  }

  /* ==========================================================================
     BUTTONS & CONTROLS
     ========================================================================== */
  .btn-navy {
    background-color: var(--navy-dark);
    border-color: var(--navy-dark);
    color: #FFFFFF;
    font-weight: 600;
    border-radius: 8px;
    padding: 8px 18px;
    transition: all 0.2s ease;
  }

  .btn-navy:hover, .btn-navy:focus {
    background-color: var(--navy-primary);
    border-color: var(--navy-primary);
    color: #FFFFFF;
    box-shadow: 0 4px 10px rgba(11, 31, 58, 0.2);
  }

  .btn-navy-secondary {
    background-color: var(--navy-primary);
    border-color: var(--navy-primary);
    color: #FFFFFF;
    font-weight: 600;
    border-radius: 8px;
    padding: 8px 18px;
  }

  .btn-navy-secondary:hover {
    background-color: var(--navy-light);
    color: #FFFFFF;
  }

  .btn-outline-navy {
    border-color: var(--navy-primary);
    color: var(--navy-primary);
    font-weight: 600;
    border-radius: 8px;
  }

  .btn-outline-navy:hover {
    background-color: var(--navy-primary);
    color: #FFFFFF;
  }

  /* ==========================================================================
     TABLE & BADGE STYLING
     ========================================================================== */
  .table-custom {
    margin-bottom: 0;
  }

  .table-custom thead th {
    background-color: var(--navy-dark);
    color: #FFFFFF;
    font-size: 0.82rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 12px 14px;
    border: none;
    vertical-align: middle;
  }

  .table-custom tbody td {
    padding: 12px 14px;
    font-size: 0.88rem;
    vertical-align: middle;
    border-bottom: 1px solid var(--border-color);
  }

  .table-custom tbody tr:hover {
    background-color: #F8FAFC;
  }

  /* Status Badges */
  .badge-status {
    padding: 5px 10px;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  .badge-aktif { background-color: #DEF7EC; color: #03543F; }
  .badge-inaktif { background-color: #F3F4F6; color: #374151; }
  .badge-musnah { background-color: #FDE8E8; color: #9B1C1C; }
  .badge-permanen { background-color: #E1EFFE; color: #1E429F; }

  .badge-menunggu { background-color: #FEF3C7; color: #92400E; }
  .badge-disetujui { background-color: #D1FAE5; color: #065F46; }
  .badge-dipinjam { background-color: #DBEAFE; color: #1E40AF; }
  .badge-ditolak { background-color: #FEE2E2; color: #991B1B; }
  .badge-selesai { background-color: #E0E7FF; color: #3730A3; }
  .badge-terlambat { background-color: #FEE2E2; color: #B91C1C; font-weight: 700; }

  .badge-akses-umum { background-color: #E0F2FE; color: #0369A1; }
  .badge-akses-terbatas { background-color: #FEF3C7; color: #B45309; }
  .badge-akses-rahasia { background-color: #FEE2E2; color: #B91C1C; font-weight: 700; }

  /* ==========================================================================
     AUTH / LOGIN OVERLAY VIEW
     ========================================================================== */
  #login-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #071527 0%, #0B1F3A 50%, #16325C 100%);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .login-card {
    width: 100%;
    max-width: 440px;
    background: #FFFFFF;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    padding: 36px 32px;
  }

  .login-brand-icon {
    width: 60px;
    height: 60px;
    border-radius: 14px;
    background: linear-gradient(135deg, var(--navy-dark) 0%, var(--navy-primary) 100%);
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    margin: 0 auto 16px auto;
    box-shadow: 0 6px 16px rgba(11, 31, 58, 0.25);
  }

  /* ==========================================================================
     RESPONSIVE DRAWER & MOBILE
     ========================================================================== */
  .sidebar-backdrop {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1035;
  }

  @media (max-width: 991.98px) {
    #sidebar {
      transform: translateX(-100%);
    }

    #sidebar.show {
      transform: translateX(0);
    }

    .sidebar-backdrop.show {
      display: block;
    }

    #main-content {
      margin-left: 0;
    }

    .page-container {
      padding: 16px;
    }
  }

  /* ==========================================================================
     PRINT STYLING (LABEL QR & LAPORAN)
     ========================================================================== */
  @media print {
    body {
      background: #FFFFFF !important;
      color: #000000 !important;
    }

    #sidebar, .topbar, .btn, .modal, .pagination, .no-print, .alert {
      display: none !important;
    }

    #main-content {
      margin: 0 !important;
      padding: 0 !important;
    }

    .page-container {
      padding: 0 !important;
    }

    .print-only {
      display: block !important;
    }

    /* Sticker Label Format (80mm x 50mm) */
    .qr-label-box {
      width: 78mm;
      height: 48mm;
      margin: 0 auto;
      border: 2px dashed #000;
      padding: 6px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      page-break-inside: avoid;
    }

    .qr-label-header {
      text-align: center;
      border-bottom: 1px solid #000;
      padding-bottom: 3px;
    }

    .qr-label-header h6 {
      font-size: 8pt;
      font-weight: bold;
      margin: 0;
    }

    .qr-label-body {
      display: flex;
      gap: 6px;
      align-items: center;
      flex-grow: 1;
      padding: 4px 0;
    }

    .qr-label-img {
      width: 32mm;
      height: 32mm;
      object-fit: contain;
    }

    .qr-label-info {
      font-size: 6.5pt;
      line-height: 1.25;
      overflow: hidden;
    }

    .qr-label-info b {
      display: inline-block;
      width: 50px;
    }

    .qr-label-footer {
      font-size: 6pt;
      text-align: center;
      border-top: 1px solid #000;
      padding-top: 2px;
    }

    /* Laporan Cetak Format A4 */
    .report-print-sheet {
      padding: 20mm;
      font-size: 10pt;
    }

    .report-print-sheet table {
      width: 100%;
      border-collapse: collapse;
      margin: 15px 0;
    }

    .report-print-sheet th, .report-print-sheet td {
      border: 1px solid #333;
      padding: 6px 8px;
    }

    .report-print-sheet th {
      background-color: #E2E8F0 !important;
      -webkit-print-color-adjust: exact;
    }
  }

  .print-only {
    display: none;
  }
</style>

</head>
<body>
<div id="login-overlay">
    <div class="login-card">
      <div class="text-center">
        <div class="login-brand-icon">
          <i class="bi bi-safe2"></i>
        </div>
        <h4 class="fw-bold mb-1" style="color: #0B1F3A; letter-spacing: 0.5px;">HANARSIP</h4>
        <p class="text-muted small mb-4">Sistem Kearsipan Digital PT. Hanoco Interior Arsitektur</p>
      </div>

      <form id="formLogin">
        <div class="mb-3">
          <label class="form-label small fw-semibold text-muted">Username Pengguna</label>
          <div class="input-group">
            <span class="input-group-text bg-light border-end-0"><i class="bi bi-person text-navy"></i></span>
            <input type="text" id="loginUsername" class="form-control border-start-0 ps-0" placeholder="Masukkan username" required autocomplete="username">
          </div>
        </div>

        <div class="mb-4">
          <label class="form-label small fw-semibold text-muted">Kata Sandi (Password)</label>
          <div class="input-group">
            <span class="input-group-text bg-light border-end-0"><i class="bi bi-lock text-navy"></i></span>
            <input type="password" id="loginPassword" class="form-control border-start-0 ps-0" placeholder="Masukkan password" required autocomplete="current-password">
          </div>
        </div>

        <button type="submit" id="btnLogin" class="btn btn-navy w-100 py-2 mb-3">
          <i class="bi bi-box-arrow-in-right me-2"></i>Masuk ke Sistem
        </button>
      </form>

      <div class="border-top pt-3 text-center">
        <small class="text-muted d-block mb-1">Kredensial Bawaan Sistem:</small>
        <span class="badge bg-light text-dark border font-monospace">admin / Admin#Hanoco2026!</span>
      </div>
    </div>
  </div>

  <!-- ========================================================================
       MAIN APP WRAPPER (SIDEBAR + TOPBAR + CONTENT)
       ======================================================================== -->
  <div id="app-wrapper" style="display: none;">

    <!-- Backdrop untuk Mobile Drawer -->
    <div id="sidebarBackdrop" class="sidebar-backdrop"></div>

    <!-- SIDEBAR NAVIGATION -->
    <nav id="sidebar">
      <div class="sidebar-header">
        <div class="brand-logo-icon">H</div>
        <div>
          <h1 class="brand-title">HANARSIP</h1>
          <p class="brand-subtitle">Hanoco Interior Arsitektur</p>
        </div>
      </div>

      <div class="sidebar-menu">
        <div class="menu-category">Utama</div>
        <a href="#" class="sidebar-nav-item active" data-view="dashboard">
          <i class="bi bi-speedometer2"></i>
          <span>Dashboard</span>
        </a>
        <a href="#" class="sidebar-nav-item" data-view="pencarian">
          <i class="bi bi-search"></i>
          <span>Pencarian Arsip</span>
        </a>
        <a href="#" class="sidebar-nav-item" data-view="arsip">
          <i class="bi bi-archive"></i>
          <span>Arsip Digital</span>
        </a>

        <div class="menu-category">Layanan Kearsipan</div>
        <a href="#" class="sidebar-nav-item" data-view="peminjaman">
          <i class="bi bi-arrow-left-right"></i>
          <span>Peminjaman & Akses</span>
        </a>
        <a href="#" class="sidebar-nav-item" data-view="tatanaskah">
          <i class="bi bi-journal-richtext"></i>
          <span>Tata Naskah Dinas</span>
        </a>
        <a href="#" class="sidebar-nav-item" data-view="laporan" data-role-allowed="Admin,Petugas,Pimpinan">
          <i class="bi bi-file-earmark-bar-graph"></i>
          <span>Laporan & Rekap</span>
        </a>

        <div class="menu-category" data-role-allowed="Admin">Administrasi & Kontrol</div>
        <a href="#" class="sidebar-nav-item" data-view="master" data-role-allowed="Admin">
          <i class="bi bi-diagram-3"></i>
          <span>Master Data</span>
        </a>
        <a href="#" class="sidebar-nav-item" data-view="users" data-role-allowed="Admin">
          <i class="bi bi-people"></i>
          <span>Manajemen Pengguna</span>
        </a>
        <a href="#" class="sidebar-nav-item" data-view="logs" data-role-allowed="Admin">
          <i class="bi bi-shield-check"></i>
          <span>Log Audit Trail</span>
        </a>
        <a href="#" class="sidebar-nav-item" onclick="lakukanBackupManual(); return false;" data-role-allowed="Admin">
          <i class="bi bi-cloud-arrow-up"></i>
          <span>Backup Database</span>
        </a>

        <div class="menu-category">Akun Saya</div>
        <a href="#" class="sidebar-nav-item" data-view="profil">
          <i class="bi bi-person-circle"></i>
          <span>Profil & Keamanan</span>
        </a>
        <a href="#" class="sidebar-nav-item text-danger" onclick="doLogout(); return false;">
          <i class="bi bi-box-arrow-left"></i>
          <span>Keluar (Logout)</span>
        </a>
      </div>

      <div class="sidebar-footer">
        <div class="user-badge">
          <div class="user-avatar" id="sidebarUserAvatar">A</div>
          <div class="overflow-hidden">
            <div class="fw-bold small text-truncate text-white" id="sidebarUserName">Administrator</div>
            <div class="text-muted small text-truncate" id="sidebarUserRole" style="font-size: 0.72rem;">Admin</div>
          </div>
        </div>
      </div>
    </nav>

    <!-- MAIN CONTENT AREA -->
    <div id="main-content">

      <!-- TOPBAR HEADER -->
      <header class="topbar">
        <div class="d-flex align-items-center gap-3">
          <button id="btnToggleSidebar" class="btn btn-sm btn-outline-navy d-lg-none">
            <i class="bi bi-list fs-5"></i>
          </button>
          <div>
            <h6 class="mb-0 fw-bold" style="color: #0B1F3A;">PT. HANOCO INTERIOR ARSITEKTUR</h6>
            <small class="text-muted d-none d-sm-inline">Sistem Kearsipan & Manajemen Berkas Digital</small>
          </div>
        </div>

        <!-- Widget Jam Digital Real-Time WIB -->
        <div class="d-flex align-items-center gap-2 px-3 py-1 bg-light border rounded-pill shadow-xs mx-auto mx-md-0">
          <i class="bi bi-clock-history text-navy fs-5"></i>
          <div class="text-start">
            <div id="digitalClockTime" class="fw-bold text-navy font-monospace" style="font-size: 0.92rem; letter-spacing: 0.5px; line-height: 1.1;">--:--:-- WIB</div>
            <small id="digitalClockDate" class="text-muted d-none d-sm-block" style="font-size: 0.68rem; margin-top: 1px;">-</small>
          </div>
        </div>

        <div class="d-flex align-items-center gap-3">
          <div class="text-end d-none d-md-block">
            <div class="fw-bold small" id="topbarUserName">Nama Pengguna</div>
            <span class="badge bg-navy" id="topbarUserRole">Role</span>
          </div>
          <button class="btn btn-sm btn-outline-danger" onclick="doLogout()" title="Keluar">
            <i class="bi bi-box-arrow-right"></i>
          </button>
        </div>
      </header>

      <!-- PAGE CONTENT CONTAINER -->
      <main class="page-container">

        <!-- ==================================================================
             VIEW: DASHBOARD
             ================================================================== -->
        <section id="view-dashboard" class="view-section">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <div>
              <h4 class="fw-bold mb-1" style="color: #0B1F3A;">Dashboard Kearsipan</h4>
              <p class="text-muted small mb-0">Ringkasan status arsip, statistik klasifikasi, dan pemantauan peminjaman</p>
            </div>
            <div>
              <button class="btn btn-sm btn-outline-navy" onclick="loadDashboardData()">
                <i class="bi bi-arrow-clockwise me-1"></i> Perbarui Data
              </button>
            </div>
          </div>

          <!-- 5 Kartu Metrik Ringkasan -->
          <div class="row g-3 mb-4">
            <div class="col-12 col-sm-6 col-xl">
              <div class="stat-card">
                <div class="stat-icon"><i class="bi bi-archive-fill"></i></div>
                <div>
                  <h3 class="stat-number" id="statTotalArsip">0</h3>
                  <p class="stat-label">Total Arsip</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-xl">
              <div class="stat-card stat-success">
                <div class="stat-icon"><i class="bi bi-calendar-check"></i></div>
                <div>
                  <h3 class="stat-number" id="statArsipBulanIni">0</h3>
                  <p class="stat-label">Bulan Ini</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-xl">
              <div class="stat-card stat-info">
                <div class="stat-icon"><i class="bi bi-journal-arrow-up"></i></div>
                <div>
                  <h3 class="stat-number" id="statSedangDipinjam">0</h3>
                  <p class="stat-label">Sedang Dipinjam</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-xl">
              <div class="stat-card stat-danger">
                <div class="stat-icon"><i class="bi bi-exclamation-triangle-fill"></i></div>
                <div>
                  <h3 class="stat-number" id="statPinjamanTerlambat">0</h3>
                  <p class="stat-label">Terlambat</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-xl">
              <div class="stat-card stat-warning">
                <div class="stat-icon"><i class="bi bi-hourglass-split"></i></div>
                <div>
                  <h3 class="stat-number" id="statArsipRetensi">0</h3>
                  <p class="stat-label">Jatuh Retensi</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Grafik Interaktif Chart.js (Navy Blue Themed) -->
          <div class="row g-4 mb-4">
            <div class="col-12 col-lg-5">
              <div class="card-custom h-100">
                <div class="card-header-custom">
                  <h5><i class="bi bi-pie-chart-fill me-2 text-navy"></i>Distribusi Klasifikasi</h5>
                </div>
                <div class="p-3" style="position: relative; height: 280px;">
                  <canvas id="chartKlasifikasiCanvas"></canvas>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-7">
              <div class="card-custom h-100">
                <div class="card-header-custom">
                  <h5><i class="bi bi-bar-chart-line-fill me-2 text-navy"></i>Tren Penambahan Arsip (6 Bulan)</h5>
                </div>
                <div class="p-3" style="position: relative; height: 280px;">
                  <canvas id="chartTrenCanvas"></canvas>
                </div>
              </div>
            </div>
          </div>

          <!-- Tabel Arsip Terbaru & Peminjaman Jatuh Tempo -->
          <div class="row g-4">
            <div class="col-12 col-lg-7">
              <div class="card-custom">
                <div class="card-header-custom">
                  <h5><i class="bi bi-clock-history me-2 text-navy"></i>5 Arsip Terbaru</h5>
                  <button class="btn btn-sm btn-link text-navy text-decoration-none p-0" onclick="switchView('arsip')">Lihat Semua &raquo;</button>
                </div>
                <div class="table-responsive">
                  <table class="table table-custom">
                    <thead>
                      <tr>
                        <th>ID Arsip</th>
                        <th>Judul & Perihal</th>
                        <th>Klasifikasi</th>
                        <th>Tanggal</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody id="tableDashboardArsipTerbaru"></tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-5">
              <div class="card-custom">
                <div class="card-header-custom">
                  <h5><i class="bi bi-alarm me-2 text-danger"></i>Pinjaman Jatuh Tempo / Terlambat</h5>
                  <button class="btn btn-sm btn-link text-navy text-decoration-none p-0" onclick="switchView('peminjaman')">Semua &raquo;</button>
                </div>
                <div class="table-responsive">
                  <table class="table table-custom">
                    <thead>
                      <tr>
                        <th>ID Pinjam</th>
                        <th>Peminjam</th>
                        <th>Status</th>
                        <th>Rencana Kembali</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody id="tableDashboardPinjamanTempo"></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ==================================================================
             VIEW: PENCARIAN ARSIP (DEDICATED SEARCH PORTAL)
             ================================================================== -->
        <section id="view-pencarian" class="view-section" style="display: none;">
          <div class="mb-4">
            <h4 class="fw-bold mb-1" style="color: #0B1F3A;">Pencarian Arsip Digital</h4>
            <p class="text-muted small mb-0">Temukan dokumen kearsipan, gambar kerja proyek, kontrak, dan surat dengan cepat</p>
          </div>

          <!-- Hero Search Box Card -->
          <div class="card-custom p-4 mb-4" style="background: linear-gradient(135deg, #0B1F3A 0%, #16325C 100%); color: #FFFFFF;">
            <div class="row justify-content-center">
              <div class="col-12 col-lg-10">
                <label class="form-label text-white-50 small fw-bold mb-2 text-uppercase" style="letter-spacing: 0.5px;"><i class="bi bi-search me-1"></i>Katalog & Mesin Pencarian Dokumen</label>
                <div class="input-group input-group-lg shadow-sm">
                  <span class="input-group-text bg-white border-0"><i class="bi bi-search text-navy fs-5"></i></span>
                  <input type="text" id="cariPortalKeyword" class="form-control border-0 ps-1" placeholder="Ketik kata kunci, nomor surat, perihal, atau nama proyek..." onkeyup="if(event.key === 'Enter') eksekusiPencarianPortal()">
                  <button class="btn btn-warning fw-bold px-4" type="button" onclick="eksekusiPencarianPortal()">
                    <i class="bi bi-arrow-right-circle me-1"></i> Cari Arsip
                  </button>
                </div>

                <!-- Quick Filter Tags / Badges -->
                <div class="d-flex flex-wrap align-items-center gap-2 mt-3">
                  <span class="small text-white-50">Filter Cepat:</span>
                  <button type="button" class="btn btn-sm btn-outline-light rounded-pill py-0 px-3 active quick-tag-btn" onclick="setQuickSearchTag('', this)">Semua Dokumen</button>
                  <button type="button" class="btn btn-sm btn-outline-light rounded-pill py-0 px-3 quick-tag-btn" onclick="setQuickSearchTag('PRY', this)"><i class="bi bi-building me-1"></i>Proyek (PRY)</button>
                  <button type="button" class="btn btn-sm btn-outline-light rounded-pill py-0 px-3 quick-tag-btn" onclick="setQuickSearchTag('KOR', this)"><i class="bi bi-envelope me-1"></i>Surat (KOR)</button>
                  <button type="button" class="btn btn-sm btn-outline-light rounded-pill py-0 px-3 quick-tag-btn" onclick="setQuickSearchTag('KEU', this)"><i class="bi bi-cash-coin me-1"></i>Keuangan (KEU)</button>
                  <button type="button" class="btn btn-sm btn-outline-light rounded-pill py-0 px-3 quick-tag-btn" onclick="setQuickSearchTag('LGL', this)"><i class="bi bi-shield-check me-1"></i>Legal (LGL)</button>
                  <button type="button" class="btn btn-sm btn-outline-light rounded-pill py-0 px-3 quick-tag-btn" onclick="setQuickSearchJenis('Gambar Kerja / DED', this)"><i class="bi bi-rulers me-1"></i>Gambar DED</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Filter Lanjutan / Filter Multi-Kriteria -->
          <div class="card-custom p-3 mb-4">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <span class="fw-bold small text-navy"><i class="bi bi-sliders me-1"></i>Filter Lanjutan Spesifik</span>
              <button class="btn btn-sm btn-link text-muted p-0 text-decoration-none" onclick="resetPencarianPortal()">
                <i class="bi bi-arrow-counterclockwise me-1"></i>Reset Filter
              </button>
            </div>
            <div class="row g-2">
              <div class="col-6 col-md-3">
                <label class="form-label small text-muted mb-1">Klasifikasi</label>
                <select id="cariPortalKlasifikasi" class="form-select form-select-sm select-klasifikasi" data-include-all="true" onchange="eksekusiPencarianPortal()"></select>
              </div>
              <div class="col-6 col-md-3">
                <label class="form-label small text-muted mb-1">Proyek Terkait</label>
                <select id="cariPortalProyek" class="form-select form-select-sm select-proyek" data-include-all="true" onchange="eksekusiPencarianPortal()"></select>
              </div>
              <div class="col-6 col-md-2">
                <label class="form-label small text-muted mb-1">Jenis Arsip</label>
                <select id="cariPortalJenis" class="form-select form-select-sm" onchange="eksekusiPencarianPortal()">
                  <option value="">Semua Jenis</option>
                  <option value="Surat Masuk">Surat Masuk</option>
                  <option value="Surat Keluar">Surat Keluar</option>
                  <option value="Kontrak / SPK">Kontrak / SPK</option>
                  <option value="Gambar Kerja / DED">Gambar Kerja / DED</option>
                  <option value="Laporan Proyek">Laporan Proyek</option>
                  <option value="Dokumen Keuangan">Dokumen Keuangan</option>
                  <option value="Legalitas & Izin">Legalitas & Izin</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div class="col-6 col-md-2">
                <label class="form-label small text-muted mb-1">Tingkat Akses</label>
                <select id="cariPortalAkses" class="form-select form-select-sm" onchange="eksekusiPencarianPortal()">
                  <option value="">Semua Akses</option>
                  <option value="Umum">Umum</option>
                  <option value="Terbatas">Terbatas</option>
                  <option value="Rahasia">Rahasia</option>
                </select>
              </div>
              <div class="col-6 col-md-2">
                <label class="form-label small text-muted mb-1">Tahun Dokumen</label>
                <input type="number" id="cariPortalTahun" class="form-control form-control-sm" placeholder="cth: 2026" onchange="eksekusiPencarianPortal()">
              </div>
            </div>
          </div>

          <!-- Area Hasil Pencarian -->
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h6 class="fw-bold mb-0 text-navy" id="pencarianHasilInfo">Hasil Pencarian: Memuat...</h6>
            <div class="btn-group btn-group-sm" role="group">
              <button type="button" class="btn btn-outline-navy active" id="btnViewModeCard" onclick="switchHasilViewMode('card')">
                <i class="bi bi-grid-fill me-1"></i> Kartu
              </button>
              <button type="button" class="btn btn-outline-navy" id="btnViewModeTable" onclick="switchHasilViewMode('table')">
                <i class="bi bi-table me-1"></i> Tabel
              </button>
            </div>
          </div>

          <!-- Container Grid Kartu Hasil -->
          <div id="pencarianHasilGrid" class="row g-3 mb-4"></div>

          <!-- Container Tabel Hasil (Alternatif) -->
          <div id="pencarianHasilTableWrapper" class="card-custom mb-4" style="display: none;">
            <div class="table-responsive">
              <table class="table table-custom">
                <thead>
                  <tr>
                    <th>ID Arsip</th>
                    <th>Judul & No Dokumen</th>
                    <th>Klasifikasi</th>
                    <th>Proyek</th>
                    <th>Akses</th>
                    <th>Lokasi Fisik</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody id="pencarianHasilTableBody"></tbody>
              </table>
            </div>
          </div>

          <div class="d-flex justify-content-end mb-4" id="pencarianPagination"></div>
        </section>

        <!-- ==================================================================
             VIEW: ARSIP DIGITAL
             ================================================================== -->
        <section id="view-arsip" class="view-section" style="display: none;">
          <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
            <div>
              <h4 class="fw-bold mb-1" style="color: #0B1F3A;">Manajemen Arsip Digital</h4>
              <p class="text-muted small mb-0" id="arsipTotalCounter">Pencarian berkas kearsipan proyek dan umum</p>
            </div>
            <div class="d-flex gap-2">
              <button class="btn btn-outline-secondary btn-sm" onclick="AppState.arsipFilter.includeDeleted = !AppState.arsipFilter.includeDeleted; loadArsipData();" data-role-allowed="Admin">
                <i class="bi bi-trash3 me-1"></i> Tempat Sampah
              </button>
              <button class="btn btn-navy btn-sm" onclick="bukaModalTambahArsip()" data-role-allowed="Admin,Petugas">
                <i class="bi bi-plus-circle me-1"></i> Tambah Arsip Baru
              </button>
            </div>
          </div>

          <!-- Filter & Pencarian Berlapis -->
          <div class="card-custom p-3 mb-4">
            <div class="row g-2 align-items-center">
              <div class="col-12 col-md-4">
                <div class="input-group input-group-sm">
                  <span class="input-group-text bg-white"><i class="bi bi-search text-muted"></i></span>
                  <input type="text" id="filterKeyword" class="form-control" placeholder="Cari ID, Judul, No Dokumen, Lokasi..." onkeyup="if(event.key === 'Enter') terapkanFilterArsip()">
                </div>
              </div>
              <div class="col-6 col-md-2">
                <select id="filterKlasifikasi" class="form-select form-select-sm select-klasifikasi" data-include-all="true"></select>
              </div>
              <div class="col-6 col-md-2">
                <select id="filterProyek" class="form-select form-select-sm select-proyek" data-include-all="true"></select>
              </div>
              <div class="col-6 col-md-2">
                <select id="filterJenis" class="form-select form-select-sm">
                  <option value="">Semua Jenis</option>
                  <option value="Surat Masuk">Surat Masuk</option>
                  <option value="Surat Keluar">Surat Keluar</option>
                  <option value="Kontrak / SPK">Kontrak / SPK</option>
                  <option value="Gambar Kerja / DED">Gambar Kerja / DED</option>
                  <option value="Laporan Proyek">Laporan Proyek</option>
                  <option value="Dokumen Keuangan">Dokumen Keuangan</option>
                  <option value="Legalitas & Izin">Legalitas & Izin</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div class="col-6 col-md-2">
                <select id="filterAkses" class="form-select form-select-sm">
                  <option value="">Semua Tingkat Akses</option>
                  <option value="Umum">Umum</option>
                  <option value="Terbatas">Terbatas</option>
                  <option value="Rahasia">Rahasia</option>
                </select>
              </div>
              <div class="col-6 col-md-2">
                <select id="filterStatus" class="form-select form-select-sm">
                  <option value="">Semua Status</option>
                  <option value="Aktif">Aktif</option>
                  <option value="Inaktif">Inaktif</option>
                  <option value="Permanen">Permanen</option>
                  <option value="Musnah">Musnah</option>
                </select>
              </div>
              <div class="col-6 col-md-2">
                <input type="number" id="filterTahun" class="form-control form-control-sm" placeholder="Tahun Dokumen (cth: 2026)">
              </div>
              <div class="col-12 col-md-4 d-flex gap-2">
                <button class="btn btn-sm btn-navy flex-grow-1" onclick="terapkanFilterArsip()">
                  <i class="bi bi-funnel me-1"></i> Terapkan Filter
                </button>
                <button class="btn btn-sm btn-outline-secondary" onclick="resetFilterArsip()" title="Reset Filter">
                  <i class="bi bi-arrow-counterclockwise"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Tabel Arsip -->
          <div class="card-custom">
            <div class="table-responsive">
              <table class="table table-custom">
                <thead>
                  <tr>
                    <th>ID Arsip</th>
                    <th>Judul & Nomor Dokumen</th>
                    <th>Klasifikasi</th>
                    <th>Proyek</th>
                    <th>Akses</th>
                    <th>Status</th>
                    <th>Lokasi Fisik</th>
                    <th style="min-width: 130px;">Aksi</th>
                  </tr>
                </thead>
                <tbody id="tableArsipBody"></tbody>
              </table>
            </div>
            <div class="p-3 d-flex justify-content-end border-top" id="arsipPagination"></div>
          </div>
        </section>

        <!-- ==================================================================
             VIEW: PEMINJAMAN & AKSES
             ================================================================== -->
        <section id="view-peminjaman" class="view-section" style="display: none;">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <div>
              <h4 class="fw-bold mb-1" style="color: #0B1F3A;">Peminjaman & Akses Digital</h4>
              <p class="text-muted small mb-0">Alur pengajuan fisik, hak akses Google Drive sementara, dan pengembalian</p>
            </div>
            <div>
              <button class="btn btn-navy btn-sm" onclick="bukaModalAjukanPinjam()">
                <i class="bi bi-send-plus me-1"></i> Ajukan Peminjaman
              </button>
            </div>
          </div>

          <div class="card-custom">
            <div class="table-responsive">
              <table class="table table-custom">
                <thead>
                  <tr>
                    <th>ID Pinjam</th>
                    <th>ID & Judul Arsip</th>
                    <th>Peminjam</th>
                    <th>Jenis</th>
                    <th>Status</th>
                    <th>Tgl Pengajuan</th>
                    <th>Rencana Kembali</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody id="tablePeminjamanBody"></tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- ==================================================================
             VIEW: TATA NASKAH DINAS (TND)
             ================================================================== -->
        <section id="view-tatanaskah" class="view-section" style="display: none;">
          <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
            <div>
              <h4 class="fw-bold mb-1" style="color: #0B1F3A;">Tata Naskah Dinas (TND)</h4>
              <p class="text-muted small mb-0">Penomoran surat resmi otomatis, buku agenda persuratan, dan pembuatan naskah dinas standar</p>
            </div>
            <div>
              <button class="btn btn-navy btn-sm" onclick="switchTNDTab('buat')">
                <i class="bi bi-file-earmark-plus me-1"></i> Buat Naskah Baru
              </button>
            </div>
          </div>

          <!-- Metrik Ringkasan Naskah Dinas -->
          <div class="row g-3 mb-4">
            <div class="col-12 col-sm-6 col-xl-3">
              <div class="stat-card">
                <div class="stat-icon"><i class="bi bi-journal-text"></i></div>
                <div>
                  <h3 class="stat-number" id="tndStatTotal">0</h3>
                  <p class="stat-label">Total Naskah Dinas</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-xl-3">
              <div class="stat-card stat-info">
                <div class="stat-icon"><i class="bi bi-chat-left-text-fill"></i></div>
                <div>
                  <h3 class="stat-number" id="tndStatND">0</h3>
                  <p class="stat-label">Nota Dinas (ND)</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-xl-3">
              <div class="stat-card stat-success">
                <div class="stat-icon"><i class="bi bi-file-earmark-check-fill"></i></div>
                <div>
                  <h3 class="stat-number" id="tndStatST">0</h3>
                  <p class="stat-label">Surat Tugas (ST)</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-xl-3">
              <div class="stat-card stat-warning">
                <div class="stat-icon"><i class="bi bi-award-fill"></i></div>
                <div>
                  <h3 class="stat-number" id="tndStatBAST">0</h3>
                  <p class="stat-label">BAST & Keputusan</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigasi Tab Modul TND -->
          <ul class="nav nav-tabs mb-4" id="tndTabList" role="tablist">
            <li class="nav-item">
              <button class="nav-link active text-navy fw-bold" id="tab-tnd-agenda-btn" onclick="switchTNDTab('agenda')" type="button">
                <i class="bi bi-book me-1"></i> Buku Agenda Persuratan
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link text-navy fw-bold" id="tab-tnd-buat-btn" onclick="switchTNDTab('buat')" type="button">
                <i class="bi bi-pencil-square me-1"></i> Buat Naskah Dinas Baru
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link text-navy fw-bold" id="tab-tnd-pedoman-btn" onclick="switchTNDTab('pedoman')" type="button">
                <i class="bi bi-info-circle me-1"></i> Pedoman Format & Kaidah Penomoran
              </button>
            </li>
          </ul>

          <!-- KONTEN TAB 1: BUKU AGENDA PERSURATAN -->
          <div id="tabContentTNDAgenda" class="tnd-tab-content">
            <div class="card-custom p-3 mb-3">
              <div class="row g-2 align-items-center">
                <div class="col-12 col-md-4">
                  <div class="input-group input-group-sm">
                    <span class="input-group-text bg-white"><i class="bi bi-search text-muted"></i></span>
                    <input type="text" id="filterTNDKeyword" class="form-control" placeholder="Cari nomor naskah, perihal, penerima..." onkeyup="if(event.key === 'Enter') loadDaftarNaskah()">
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <select id="filterTNDJenis" class="form-select form-select-sm" onchange="loadDaftarNaskah()">
                    <option value="">Semua Jenis Naskah</option>
                    <option value="ND">Nota Dinas (ND)</option>
                    <option value="SRT">Surat Keluar / Dinas (SRT)</option>
                    <option value="ST">Surat Tugas (ST)</option>
                    <option value="SK">Surat Keputusan (SK)</option>
                    <option value="BAST">Berita Acara (BAST)</option>
                    <option value="MEMO">Memorandum Internal (MEMO)</option>
                  </select>
                </div>
                <div class="col-6 col-md-3">
                  <select id="filterTNDDivisi" class="form-select form-select-sm" onchange="loadDaftarNaskah()">
                    <option value="">Semua Divisi Pembuat</option>
                    <option value="DIR">DIR - Direksi & Manajemen</option>
                    <option value="ARS">ARS - Arsitektur & Desain</option>
                    <option value="PRY">PRY - Proyek & Konstruksi</option>
                    <option value="KEU">KEU - Keuangan & Pajak</option>
                    <option value="SDM">SDM - Sumber Daya Manusia</option>
                    <option value="LGL">LGL - Legalitas & Kontrak</option>
                  </select>
                </div>
                <div class="col-12 col-md-2 d-flex gap-2">
                  <button class="btn btn-navy btn-sm flex-grow-1" onclick="loadDaftarNaskah()">
                    <i class="bi bi-funnel me-1"></i> Filter
                  </button>
                  <button class="btn btn-outline-secondary btn-sm" onclick="resetFilterTND()" title="Reset">
                    <i class="bi bi-arrow-counterclockwise"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="card-custom">
              <div class="table-responsive">
                <table class="table table-custom">
                  <thead>
                    <tr>
                      <th>Nomor Naskah Resmi</th>
                      <th>Jenis & Divisi</th>
                      <th>Tanggal</th>
                      <th>Perihal & Tujuan</th>
                      <th>Penandatangan</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody id="tableTNDBody"></tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- KONTEN TAB 2: BUAT NASKAH BARU (GENERATOR & DRAFTER) -->
          <div id="tabContentTNDBuat" class="tnd-tab-content" style="display: none;">
            <div class="card-custom p-4">
              <h5 class="fw-bold mb-3 text-navy"><i class="bi bi-file-earmark-diff me-2"></i>Formulir Penerbitan & Penomoran Naskah Dinas</h5>
              <p class="text-muted small mb-4">Nomor resmi naskah akan dihitung dan digenerate otomatis secara atomik sesuai kaidah baku PT. Hanoco Interior Arsitektur.</p>

              <form id="formBuatTND">
                <div class="row g-3">
                  <div class="col-12 col-md-4">
                    <label class="form-label small fw-semibold">Jenis Naskah Dinas <span class="text-danger">*</span></label>
                    <select id="buatTNDJenis" class="form-select form-select-sm" onchange="updateTNDTemplatePreview()" required>
                      <option value="Nota Dinas|ND">Nota Dinas (ND - Internal)</option>
                      <option value="Surat Tugas|ST">Surat Tugas (ST - Penugasan)</option>
                      <option value="Surat Dinas Keluar|SRT">Surat Dinas Keluar (SRT - Eksternal)</option>
                      <option value="Berita Acara|BAST">Berita Acara Serah Terima (BAST)</option>
                      <option value="Surat Keputusan|SK">Surat Keputusan Direksi (SK)</option>
                      <option value="Memorandum|MEMO">Memorandum Internal (MEMO)</option>
                    </select>
                  </div>

                  <div class="col-12 col-md-4">
                    <label class="form-label small fw-semibold">Divisi Pembuat / Unit Kerja <span class="text-danger">*</span></label>
                    <select id="buatTNDDivisi" class="form-select form-select-sm" onchange="updateTNDTemplatePreview()" required>
                      <option value="DIR">DIR - Direksi & Eksekutif</option>
                      <option value="ARS">ARS - Arsitektur & Desain Interior</option>
                      <option value="PRY">PRY - Manajemen Proyek & Konstruksi</option>
                      <option value="KEU">KEU - Keuangan, Akuntansi & Perpajakan</option>
                      <option value="SDM">SDM - SDM, Umum & Kearsipan</option>
                      <option value="LGL">LGL - Legalitas, Izin & Kontrak</option>
                    </select>
                  </div>

                  <div class="col-12 col-md-4">
                    <label class="form-label small fw-semibold">Tanggal Surat / Naskah <span class="text-danger">*</span></label>
                    <input type="date" id="buatTNDTanggal" class="form-control form-control-sm" required onchange="updateTNDTemplatePreview()">
                  </div>

                  <div class="col-12">
                    <div class="p-3 bg-light rounded border d-flex flex-wrap align-items-center justify-content-between gap-2">
                      <div>
                        <small class="text-muted d-block fw-bold"><i class="bi bi-hash me-1"></i>Estimasi Format Nomor Naskah Resmi:</small>
                        <span id="previewEstimasiNomor" class="fw-bold font-monospace fs-6 text-navy">--/HIA-DIR/ND/XI/2026</span>
                      </div>
                      <span class="badge bg-navy-subtle text-navy border">Format Standar TND PT. HIA</span>
                    </div>
                  </div>

                  <div class="col-12 col-md-8">
                    <label class="form-label small fw-semibold">Perihal / Hal Naskah <span class="text-danger">*</span></label>
                    <input type="text" id="buatTNDPerihal" class="form-control form-control-sm" placeholder="cth: Penyampaian Laporan Kemajuan Proyek Interior Mega Persada" required>
                  </div>

                  <div class="col-12 col-md-4">
                    <label class="form-label small fw-semibold">Sifat Naskah Dinas</label>
                    <select id="buatTNDSifat" class="form-select form-select-sm">
                      <option value="Biasa">Biasa</option>
                      <option value="Penting">Penting</option>
                      <option value="Segera">Segera</option>
                      <option value="Rahasia">Rahasia</option>
                    </select>
                  </div>

                  <div class="col-12 col-md-6">
                    <label class="form-label small fw-semibold">Tujuan / Penerima Naskah <span class="text-danger">*</span></label>
                    <input type="text" id="buatTNDPenerima" class="form-control form-control-sm" placeholder="cth: Kepala Divisi Proyek / Direktur Utama PT Mega Persada" required>
                  </div>

                  <div class="col-12 col-md-6">
                    <label class="form-label small fw-semibold">Penandatangan Naskah (Nama & Jabatan) <span class="text-danger">*</span></label>
                    <input type="text" id="buatTNDPenandatangan" class="form-control form-control-sm" placeholder="cth: Ir. Hendra Gunawan (Direktur Utama)" required>
                  </div>

                  <div class="col-12 col-md-6">
                    <label class="form-label small fw-semibold">Lampiran (Jika Ada)</label>
                    <input type="text" id="buatTNDLampiran" class="form-control form-control-sm" placeholder="cth: 1 (satu) Berkas Dokumen DED">
                  </div>

                  <div class="col-12 col-md-6">
                    <label class="form-label small fw-semibold">Tembusan (Jika Ada)</label>
                    <input type="text" id="buatTNDTembusan" class="form-control form-control-sm" placeholder="cth: 1. Dewan Komisaris; 2. Bagian Keuangan">
                  </div>

                  <div class="col-12">
                    <label class="form-label small fw-semibold">Batang Tubuh / Isi Ringkas Naskah <span class="text-danger">*</span></label>
                    <textarea id="buatTNDIsi" class="form-control form-control-sm font-monospace" rows="6" placeholder="Tuliskan isi resmi naskah dinas di sini..." required></textarea>
                  </div>

                  <div class="col-12">
                    <div class="form-check form-switch p-3 bg-light rounded border">
                      <input class="form-check-input ms-0 me-2" type="checkbox" id="buatTNDArsipOtomatis" checked>
                      <label class="form-check-label fw-bold text-navy small" for="buatTNDArsipOtomatis">
                        <i class="bi bi-box-seam me-1"></i> Otomatis Daftarkan Naskah Ini ke Database Kearsipan HANARSIP
                      </label>
                      <small class="text-muted d-block ms-4">Sistem akan secara otomatis merekam naskah ini ke sheet Arsip dengan kode klasifikasi yang sesuai.</small>
                    </div>
                  </div>

                  <div class="col-12 d-flex justify-content-end gap-2 mt-4">
                    <button type="button" class="btn btn-sm btn-outline-secondary px-3" onclick="switchTNDTab('agenda')">Batal</button>
                    <button type="submit" class="btn btn-sm btn-navy px-4">
                      <i class="bi bi-send-check me-1"></i> Terbitkan & Beri Nomor Resmi
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <!-- KONTEN TAB 3: PEDOMAN & KAIDAH PENOMORAN -->
          <div id="tabContentTNDPedoman" class="tnd-tab-content" style="display: none;">
            <div class="card-custom p-4">
              <h5 class="fw-bold text-navy mb-3"><i class="bi bi-journal-bookmark me-2"></i>Kaidah Baku Tata Naskah Dinas PT. Hanoco Interior Arsitektur</h5>
              
              <div class="alert alert-light border mb-4">
                <h6 class="fw-bold text-navy mb-1"><i class="bi bi-regex me-1"></i>Format Standar Penomoran Naskah:</h6>
                <div class="font-monospace fs-5 text-primary my-2">[Nomor_Urut_3_Digit] / HIA-[Kode_Divisi] / [Kode_Jenis_Naskah] / [Bulan_Romawi] / [Tahun]</div>
                <small class="text-muted">Contoh: <b>001/HIA-DIR/ND/XI/2026</b> (Nota Dinas pertama dari Direksi pada bulan November 2026)</small>
              </div>

              <div class="row g-4">
                <div class="col-12 col-md-6">
                  <h6 class="fw-bold text-navy border-bottom pb-2">1. Daftar Kode Jenis Naskah Dinas</h6>
                  <table class="table table-sm small">
                    <thead><tr><th>Kode</th><th>Jenis Naskah</th><th>Penggunaan</th></tr></thead>
                    <tbody>
                      <tr><td><span class="badge bg-navy">SRT</span></td><td>Surat Dinas Resmi</td><td>Surat keluar resmi untuk pihak eksternal/klien</td></tr>
                      <tr><td><span class="badge bg-navy">ND</span></td><td>Nota Dinas</td><td>Komunikasi naskah dinas internal antar divisi</td></tr>
                      <tr><td><span class="badge bg-navy">ST</span></td><td>Surat Tugas</td><td>Penugasan resmi personil untuk proyek/lapangan</td></tr>
                      <tr><td><span class="badge bg-navy">SK</span></td><td>Surat Keputusan</td><td>Keputusan pimpinan/direksi yang mengikat</td></tr>
                      <tr><td><span class="badge bg-navy">BAST</span></td><td>Berita Acara</td><td>Serah terima pekerjaan desain / fisik proyek</td></tr>
                      <tr><td><span class="badge bg-navy">MEMO</span></td><td>Memorandum</td><td>Pemberitahuan / instruksi internal singkat</td></tr>
                    </tbody>
                  </table>
                </div>

                <div class="col-12 col-md-6">
                  <h6 class="fw-bold text-navy border-bottom pb-2">2. Daftar Kode Divisi / Unit Kerja</h6>
                  <table class="table table-sm small">
                    <thead><tr><th>Kode</th><th>Divisi / Unit Kerja</th><th>Wewenang Naskah</th></tr></thead>
                    <tbody>
                      <tr><td><span class="badge bg-light text-dark border">DIR</span></td><td>Direksi & Manajemen</td><td>SK, Surat Tugas Direksi, Kontrak Utama</td></tr>
                      <tr><td><span class="badge bg-light text-dark border">ARS</span></td><td>Arsitektur & Desain</td><td>Nota Dinas Teknis, Persetujuan Konsep Desain</td></tr>
                      <tr><td><span class="badge bg-light text-dark border">PRY</span></td><td>Proyek & Konstruksi</td><td>BAST, Surat Tugas Lapangan, Laporan Proyek</td></tr>
                      <tr><td><span class="badge bg-light text-dark border">KEU</span></td><td>Keuangan & Pajak</td><td>Surat Tagihan, Nota Dinas Anggaran, Kwitansi</td></tr>
                      <tr><td><span class="badge bg-light text-dark border">SDM</span></td><td>SDM & Umum</td><td>Surat Keterangan Karyawan, Surat Izin</td></tr>
                      <tr><td><span class="badge bg-light text-dark border">LGL</span></td><td>Legalitas & Kontrak</td><td>SPK, Surat Kuasa, Perjanjian Kerahasiaan (NDA)</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ==================================================================
             VIEW: LAPORAN & REKAP
             ================================================================== -->
        <section id="view-laporan" class="view-section" style="display: none;">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <div>
              <h4 class="fw-bold mb-1" style="color: #0B1F3A;">Laporan & Rekapitulasi Kearsipan</h4>
              <p class="text-muted small mb-0" id="laporanTotalLabel">Rekapitulasi periodik dan ekspor ke PDF siap cetak</p>
            </div>
            <button class="btn btn-navy btn-sm" onclick="cetakLaporanPDF()">
              <i class="bi bi-printer me-1"></i> Cetak / Ekspor PDF
            </button>
          </div>

          <div class="card-custom p-3 mb-4">
            <div class="row g-2 align-items-end">
              <div class="col-6 col-md-2">
                <label class="form-label small fw-semibold text-muted mb-1">Dari Tanggal</label>
                <input type="date" id="laporanTglMulai" class="form-control form-control-sm">
              </div>
              <div class="col-6 col-md-2">
                <label class="form-label small fw-semibold text-muted mb-1">Sampai Tanggal</label>
                <input type="date" id="laporanTglSelesai" class="form-control form-control-sm">
              </div>
              <div class="col-6 col-md-2">
                <label class="form-label small fw-semibold text-muted mb-1">Klasifikasi</label>
                <select id="laporanKlasifikasi" class="form-select form-select-sm select-klasifikasi" data-include-all="true"></select>
              </div>
              <div class="col-6 col-md-2">
                <label class="form-label small fw-semibold text-muted mb-1">Jenis Arsip</label>
                <select id="laporanJenis" class="form-select form-select-sm">
                  <option value="">Semua Jenis</option>
                  <option value="Surat Masuk">Surat Masuk</option>
                  <option value="Surat Keluar">Surat Keluar</option>
                  <option value="Kontrak / SPK">Kontrak / SPK</option>
                  <option value="Gambar Kerja / DED">Gambar Kerja / DED</option>
                  <option value="Laporan Proyek">Laporan Proyek</option>
                  <option value="Dokumen Keuangan">Dokumen Keuangan</option>
                  <option value="Legalitas & Izin">Legalitas & Izin</option>
                </select>
              </div>
              <div class="col-6 col-md-2">
                <label class="form-label small fw-semibold text-muted mb-1">Status Arsip</label>
                <select id="laporanStatus" class="form-select form-select-sm">
                  <option value="">Semua Status</option>
                  <option value="Aktif">Aktif</option>
                  <option value="Inaktif">Inaktif</option>
                  <option value="Permanen">Permanen</option>
                  <option value="Musnah">Musnah</option>
                </select>
              </div>
              <div class="col-6 col-md-2">
                <button class="btn btn-navy btn-sm w-100" onclick="generateLaporan()">
                  <i class="bi bi-funnel me-1"></i> Tampilkan
                </button>
              </div>
            </div>
          </div>

          <div class="card-custom">
            <div class="table-responsive">
              <table class="table table-custom">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>ID Arsip</th>
                    <th>Nomor & Judul Dokumen</th>
                    <th>Klasifikasi</th>
                    <th>Tanggal</th>
                    <th>Akses</th>
                    <th>Lokasi Fisik</th>
                  </tr>
                </thead>
                <tbody id="tableLaporanBody"></tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- ==================================================================
             VIEW: MASTER DATA (ADMIN ONLY)
             ================================================================== -->
        <section id="view-master" class="view-section" style="display: none;">
          <h4 class="fw-bold mb-1" style="color: #0B1F3A;">Master Data Sistem</h4>
          <p class="text-muted small mb-4">Pengaturan klasifikasi kearsipan, jadwal retensi, dan daftar proyek</p>

          <ul class="nav nav-tabs mb-3" id="masterTabs" role="tablist">
            <li class="nav-item">
              <button class="nav-link active text-navy fw-bold" id="klasifikasi-tab" data-bs-toggle="tab" data-bs-target="#tab-klasifikasi" type="button">Master Klasifikasi (JRA)</button>
            </li>
            <li class="nav-item">
              <button class="nav-link text-navy fw-bold" id="proyek-tab" data-bs-toggle="tab" data-bs-target="#tab-proyek" type="button">Master Proyek</button>
            </li>
          </ul>

          <div class="tab-content">
            <!-- Tab Klasifikasi -->
            <div class="tab-pane fade show active" id="tab-klasifikasi">
              <div class="card-custom">
                <div class="card-header-custom">
                  <h5>Daftar Klasifikasi Kearsipan (KOR, PRY, KEU, SDM, AST, LGL)</h5>
                  <button class="btn btn-navy btn-sm" onclick="bukaModalTambahKlasifikasi()">
                    <i class="bi bi-plus-lg me-1"></i> Tambah Klasifikasi
                  </button>
                </div>
                <div class="table-responsive">
                  <table class="table table-custom">
                    <thead>
                      <tr>
                        <th>Kode</th>
                        <th>Nama Klasifikasi</th>
                        <th>Retensi Aktif</th>
                        <th>Retensi Inaktif</th>
                        <th>Nasib Akhir</th>
                        <th>Akses Bawaan</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody id="tableMasterKlasifikasiBody"></tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Tab Proyek -->
            <div class="tab-pane fade" id="tab-proyek">
              <div class="card-custom">
                <div class="card-header-custom">
                  <h5>Daftar Proyek Desain & Arsitektur</h5>
                  <button class="btn btn-navy btn-sm" onclick="bukaModalTambahProyek()">
                    <i class="bi bi-plus-lg me-1"></i> Tambah Proyek
                  </button>
                </div>
                <div class="table-responsive">
                  <table class="table table-custom">
                    <thead>
                      <tr>
                        <th>ID Proyek</th>
                        <th>Nama Proyek</th>
                        <th>Klien</th>
                        <th>Lokasi</th>
                        <th>Layanan</th>
                        <th>Status</th>
                        <th>PIC</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody id="tableMasterProyekBody"></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ==================================================================
             VIEW: MANAJEMEN PENGGUNA (ADMIN ONLY)
             ================================================================== -->
        <section id="view-users" class="view-section" style="display: none;">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <div>
              <h4 class="fw-bold mb-1" style="color: #0B1F3A;">Manajemen Pengguna</h4>
              <p class="text-muted small mb-0">Kelola akun, peran wewenang (RBAC), dan reset keamanan kata sandi</p>
            </div>
            <button class="btn btn-navy btn-sm" onclick="bukaModalTambahUser()">
              <i class="bi bi-person-plus me-1"></i> Tambah Pengguna Baru
            </button>
          </div>

          <div class="card-custom">
            <div class="table-responsive">
              <table class="table table-custom">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Nama & Email</th>
                    <th>Divisi</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Login Terakhir</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody id="tableUsersBody"></tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- ==================================================================
             VIEW: AUDIT TRAIL LOG (ADMIN ONLY)
             ================================================================== -->
        <section id="view-logs" class="view-section" style="display: none;">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <div>
              <h4 class="fw-bold mb-1" style="color: #0B1F3A;">Log Audit Trail Aktivitas</h4>
              <p class="text-muted small mb-0">Catatan riwayat seluruh aktivitas penting sistem untuk akuntabilitas</p>
            </div>
            <button class="btn btn-outline-navy btn-sm" onclick="loadAuditLogsData()">
              <i class="bi bi-arrow-clockwise me-1"></i> Refresh Log
            </button>
          </div>

          <div class="card-custom">
            <div class="table-responsive">
              <table class="table table-custom">
                <thead>
                  <tr>
                    <th>Waktu (WIB)</th>
                    <th>Pengguna</th>
                    <th>Modul</th>
                    <th>Aksi</th>
                    <th>ID Objek</th>
                    <th>Detail</th>
                    <th>Hasil</th>
                  </tr>
                </thead>
                <tbody id="tableLogsBody"></tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- ==================================================================
             VIEW: PROFIL & GANTI PASSWORD
             ================================================================== -->
        <section id="view-profil" class="view-section" style="display: none;">
          <h4 class="fw-bold mb-1" style="color: #0B1F3A;">Profil & Keamanan Akun</h4>
          <p class="text-muted small mb-4">Kelola informasi pribadi dan perbarui kata sandi akun Anda</p>

          <div class="row g-4">
            <div class="col-12 col-md-5">
              <div class="card-custom p-4 text-center">
                <div class="user-avatar mx-auto mb-3" style="width: 72px; height: 72px; font-size: 28px;">
                  <i class="bi bi-person"></i>
                </div>
                <h5 class="fw-bold mb-1" id="profilNama">-</h5>
                <p class="text-muted small mb-3" id="profilUsername">@username</p>
                <div class="text-start border-top pt-3">
                  <div class="mb-2"><small class="text-muted d-block">Alamat Email:</small><span class="fw-semibold" id="profilEmail">-</span></div>
                  <div class="mb-2"><small class="text-muted d-block">Divisi / Bagian:</small><span class="fw-semibold" id="profilDivisi">-</span></div>
                  <div class="mb-2"><small class="text-muted d-block">Peran (Role):</small><span class="fw-semibold" id="profilRole">-</span></div>
                  <div><small class="text-muted d-block">Sesi Dimulai:</small><span class="small text-muted" id="profilLoginTerakhir">-</span></div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-7">
              <div class="card-custom p-4">
                <h5 class="fw-bold mb-3" style="color: #0B1F3A;"><i class="bi bi-shield-lock me-2"></i>Ubah Kata Sandi (Password)</h5>
                <form id="formGantiPasswordProfil">
                  <div class="mb-3">
                    <label class="form-label small fw-semibold text-muted">Password Saat Ini</label>
                    <input type="password" id="profilPassLama" class="form-control" required>
                  </div>
                  <div class="mb-3">
                    <label class="form-label small fw-semibold text-muted">Password Baru (Min. 8 karakter)</label>
                    <input type="password" id="profilPassBaru" class="form-control" minlength="8" required>
                  </div>
                  <div class="mb-4">
                    <label class="form-label small fw-semibold text-muted">Konfirmasi Password Baru</label>
                    <input type="password" id="profilPassKonfirm" class="form-control" minlength="8" required>
                  </div>
                  <button type="submit" class="btn btn-navy">
                    <i class="bi bi-check-circle me-1"></i> Simpan Password Baru
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  </div>

  <!-- ========================================================================
       MODALS KUMPULAN FORM & DETAIL
       ======================================================================== -->

  <!-- Modal Form Tambah / Ubah Arsip -->
  <div class="modal fade" id="modalFormArsip" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <form id="formArsip">
          <div class="modal-header bg-navy text-white">
            <h5 class="modal-title" id="modalArsipTitle">Tambah Dokumen Arsip Baru</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <input type="hidden" id="arsipEditId">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label small fw-semibold">Jenis Dokumen Arsip <span class="text-danger">*</span></label>
                <select id="arsipJenis" class="form-select form-select-sm" required>
                  <option value="">-- Pilih Jenis --</option>
                  <option value="Surat Masuk">Surat Masuk</option>
                  <option value="Surat Keluar">Surat Keluar</option>
                  <option value="Kontrak / SPK">Kontrak / SPK</option>
                  <option value="Gambar Kerja / DED">Gambar Kerja / DED</option>
                  <option value="Laporan Proyek">Laporan Proyek</option>
                  <option value="Dokumen Keuangan">Dokumen Keuangan</option>
                  <option value="Legalitas & Izin">Legalitas & Izin</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div class="col-md-6">
                <label class="form-label small fw-semibold">Kode Klasifikasi <span class="text-danger">*</span></label>
                <select id="arsipKlasifikasi" class="form-select form-select-sm select-klasifikasi" required></select>
              </div>

              <div class="col-md-6">
                <label class="form-label small fw-semibold">Nomor Dokumen Resmi <span class="text-danger">*</span></label>
                <input type="text" id="arsipNomorDokumen" class="form-control form-control-sm" placeholder="cth: 045/HIA-DIR/SPK/X/2026" required>
              </div>

              <div class="col-md-6">
                <label class="form-label small fw-semibold">Tanggal Dokumen <span class="text-danger">*</span></label>
                <input type="date" id="arsipTanggalDokumen" class="form-control form-control-sm" required>
              </div>

              <div class="col-12">
                <label class="form-label small fw-semibold">Judul / Perihal Arsip <span class="text-danger">*</span></label>
                <textarea id="arsipJudul" class="form-control form-control-sm" rows="2" placeholder="Jelaskan ringkas subjek perihal dokumen arsip ini..." required></textarea>
              </div>

              <div class="col-md-6">
                <label class="form-label small fw-semibold">Pihak Terkait (Instansi / Klien / Vendor)</label>
                <input type="text" id="arsipPihakTerkait" class="form-control form-control-sm" placeholder="cth: PT Mega Persada / Bpk. Hendra">
              </div>

              <div class="col-md-6">
                <label class="form-label small fw-semibold">Kaitkan ke Proyek</label>
                <select id="arsipProyek" class="form-select form-select-sm select-proyek"></select>
              </div>

              <div class="col-md-4">
                <label class="form-label small fw-semibold">Lokasi Fisik (Ruang/Lemari/Box)</label>
                <input type="text" id="arsipLokasiFisik" class="form-control form-control-sm" placeholder="cth: Lemari B, Rak 3, Box 12">
              </div>

              <div class="col-md-4">
                <label class="form-label small fw-semibold">Tingkat Akses Dokumen</label>
                <select id="arsipAkses" class="form-select form-select-sm">
                  <option value="Umum">Umum</option>
                  <option value="Terbatas">Terbatas</option>
                  <option value="Rahasia">Rahasia</option>
                </select>
              </div>

              <div class="col-md-4">
                <label class="form-label small fw-semibold">Status Arsip</label>
                <select id="arsipStatus" class="form-select form-select-sm">
                  <option value="Aktif">Aktif</option>
                  <option value="Inaktif">Inaktif</option>
                  <option value="Permanen">Permanen</option>
                  <option value="Musnah">Musnah</option>
                </select>
              </div>

              <div class="col-12">
                <div class="p-2 bg-light rounded border">
                  <small class="text-muted d-block fw-bold mb-1"><i class="bi bi-info-circle me-1"></i>Estimasi Tanggal Retensi Otomatis:</small>
                  <span id="arsipInfoRetensi" class="small text-navy fw-semibold">-</span>
                </div>
              </div>

              <div class="col-12">
                <label class="form-label small fw-semibold">Unggah Berkas Berkas Digital</label>
                <input type="file" id="arsipFileInput" class="form-control form-control-sm" accept=".pdf,.jpg,.jpeg,.png,.docx,.xlsx">
                <small class="text-muted" id="arsipFileHelp">Format didukung: PDF, JPG, PNG, DOCX, XLSX (Maks. 20 MB)</small>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-dismiss="modal">Batal</button>
            <button type="submit" class="btn btn-sm btn-navy">
              <i class="bi bi-save me-1"></i> Simpan Arsip
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Modal Pratinjau Naskah Dinas (Kop Surat Resmi PT. Hanoco) -->
  <div class="modal fade" id="modalPratinjauNaskahDinas" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header bg-navy text-white">
          <h5 class="modal-title"><i class="bi bi-file-earmark-text me-2"></i>Pratinjau Format Tata Naskah Dinas Resmi</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body p-4 bg-light">
          
          <!-- Lembar Naskah Dinas Format Kertas Standar (Kop Surat PT. Hanoco) -->
          <div id="lembarNaskahDinasResmi" class="bg-white p-5 border shadow-sm mx-auto" style="max-width: 720px; min-height: 850px; font-family: 'Times New Roman', Times, serif; color: #000; line-height: 1.5;">
            
            <!-- Kop Surat Resmi -->
            <div style="border-bottom: 3px double #000; padding-bottom: 12px; margin-bottom: 24px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="width: 75px; vertical-align: middle; text-align: center;">
                    <div style="width: 65px; height: 65px; background: #0B1F3A; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; color: #FFFFFF; font-size: 32px; font-weight: bold; font-family: Arial, sans-serif;">
                      H
                    </div>
                  </td>
                  <td style="vertical-align: middle; text-align: center; padding: 0 10px;">
                    <h3 style="margin: 0; font-size: 16pt; font-weight: bold; color: #0B1F3A; font-family: Arial, sans-serif; letter-spacing: 1px;">PT. HANOCO INTERIOR ARSITEKTUR</h3>
                    <p style="margin: 2px 0; font-size: 9pt; font-family: Arial, sans-serif; font-weight: bold;">Jasa Desain Interior, Arsitektur & Pelaksanaan Fit-Out Gedung</p>
                    <p style="margin: 0; font-size: 8pt; font-family: Arial, sans-serif; color: #444;">Gedung Hanoco Square Lt. 5, Jl. TB Simatupang No. 88, Jakarta Selatan 12430 | Telp: (021) 789-2026 | Email: sekretariat@hanoco.co.id</p>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Judul Jenis Naskah -->
            <div class="text-center mb-4" id="tndPreviewJudulContainer">
              <h4 id="tndPreviewJudulNaskah" style="margin: 0; font-weight: bold; text-decoration: underline; font-size: 14pt; letter-spacing: 1px;">NOTA DINAS</h4>
              <p id="tndPreviewNomorNaskah" style="margin: 4px 0 0 0; font-size: 11pt; font-family: Arial, sans-serif; font-weight: bold;">Nomor: 001/HIA-DIR/ND/XI/2026</p>
            </div>

            <!-- Metadata Header Naskah -->
            <table id="tndPreviewMetaTable" style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 11pt;">
              <tr><td style="width: 100px; padding: 3px 0;">Kepada Yth.</td><td style="width: 15px; text-align: center;">:</td><td id="tndPreviewTujuan" style="font-weight: bold;">-</td></tr>
              <tr><td style="padding: 3px 0;">Dari</td><td style="text-align: center;">:</td><td id="tndPreviewDari">-</td></tr>
              <tr><td style="padding: 3px 0;">Tanggal</td><td style="text-align: center;">:</td><td id="tndPreviewTanggal">-</td></tr>
              <tr><td style="padding: 3px 0;">Sifat</td><td style="text-align: center;">:</td><td id="tndPreviewSifat">-</td></tr>
              <tr><td style="padding: 3px 0;">Lampiran</td><td style="text-align: center;">:</td><td id="tndPreviewLampiran">-</td></tr>
              <tr><td style="padding: 3px 0; vertical-align: top;">Perihal</td><td style="text-align: center; vertical-align: top;">:</td><td id="tndPreviewPerihal" style="font-weight: bold; vertical-align: top;">-</td></tr>
            </table>

            <hr style="border-top: 1px solid #000; margin: 15px 0 20px 0;">

            <!-- Isi Batang Tubuh Naskah -->
            <div id="tndPreviewIsi" style="font-size: 11pt; text-align: justify; white-space: pre-line; margin-bottom: 40px; min-height: 200px;">
              -
            </div>

            <!-- Blok Penandatangan & Stempel Digital -->
            <div style="display: flex; justify-content: flex-end; margin-top: 40px; page-break-inside: avoid;">
              <div style="text-align: center; width: 260px;">
                <p id="tndPreviewTtdKotaTgl" style="margin: 0; font-size: 11pt;">Jakarta, -</p>
                <p id="tndPreviewTtdJabatan" style="margin: 4px 0 0 0; font-size: 11pt; font-weight: bold;">PT. HANOCO INTERIOR ARSITEKTUR</p>
                
                <div style="margin: 15px 0;">
                  <img id="tndPreviewQrSeal" src="" style="width: 75px; height: 75px;" alt="QR Keabsahan">
                  <small style="display: block; font-size: 7pt; color: #555; margin-top: 2px;">Tersertifikasi Digital TND</small>
                </div>

                <p id="tndPreviewTtdNama" style="margin: 0; font-weight: bold; text-decoration: underline; font-size: 11pt;">-</p>
              </div>
            </div>

            <!-- Tembusan -->
            <div id="tndPreviewTembusanContainer" style="margin-top: 40px; font-size: 9pt; border-top: 1px dashed #aaa; padding-top: 10px;">
              <b>Tembusan Yth:</b>
              <div id="tndPreviewTembusan">-</div>
            </div>

          </div>
        </div>
        <div class="modal-footer d-flex justify-content-between">
          <div>
            <button type="button" class="btn btn-sm btn-outline-primary" id="btnTNDHubungkanArsip" onclick="hubungkanNaskahTerbukaKeArsip()">
              <i class="bi bi-box-seam me-1"></i> Daftarkan ke Arsip Digital
            </button>
          </div>
          <div class="d-flex gap-2">
            <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Tutup</button>
            <button type="button" class="btn btn-sm btn-navy" onclick="cetakNaskahDinasResmi()">
              <i class="bi bi-printer me-1"></i> Cetak Dokumen Resmi (PDF)
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Detail Arsip -->
  <div class="modal fade" id="modalDetailArsip" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header bg-navy text-white">
          <h5 class="modal-title">Detail Berkas Arsip: <span id="detailArsipId" class="fw-bold"></span></h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-4">
          <div class="row g-4">
            <div class="col-12 col-lg-5">
              <h5 class="fw-bold text-navy mb-2" id="detailArsipJudul">-</h5>
              <table class="table table-sm small mb-3">
                <tr><td class="text-muted" style="width: 130px;">Nomor Dokumen:</td><td class="fw-semibold" id="detailArsipNoDokumen">-</td></tr>
                <tr><td class="text-muted">Jenis Arsip:</td><td id="detailArsipJenis">-</td></tr>
                <tr><td class="text-muted">Klasifikasi:</td><td id="detailArsipKlasifikasi">-</td></tr>
                <tr><td class="text-muted">Tanggal Dokumen:</td><td id="detailArsipTanggal">-</td></tr>
                <tr><td class="text-muted">Pihak Terkait:</td><td id="detailArsipPihakTerkait">-</td></tr>
                <tr><td class="text-muted">Proyek Terkait:</td><td id="detailArsipProyek">-</td></tr>
                <tr><td class="text-muted">Lokasi Fisik:</td><td class="fw-semibold text-primary" id="detailArsipLokasi">-</td></tr>
                <tr><td class="text-muted">Tingkat Akses:</td><td><span class="badge bg-secondary" id="detailArsipAkses">-</span></td></tr>
                <tr><td class="text-muted">Status:</td><td id="detailArsipStatus">-</td></tr>
                <tr><td class="text-muted">Jatuh Retensi:</td><td class="text-danger fw-bold" id="detailArsipRetensi">-</td></tr>
                <tr><td class="text-muted">Penginput:</td><td class="text-muted small" id="detailArsipDiinputOleh">-</td></tr>
              </table>

              <div class="d-flex flex-wrap gap-2">
                <button type="button" class="btn btn-sm btn-navy" id="btnDetailPinjamCepat">
                  <i class="bi bi-box-arrow-in-right me-1"></i> Ajukan Pinjam
                </button>
                <button type="button" class="btn btn-sm btn-outline-navy" id="btnDetailCetakLabel">
                  <i class="bi bi-qr-code me-1"></i> Cetak Label QR
                </button>
              </div>
            </div>

            <div class="col-12 col-lg-7">
              <h6 class="fw-bold text-navy mb-2"><i class="bi bi-file-earmark-pdf me-1"></i>Pratinjau Berkas Digital</h6>
              <div id="detailArsipPreviewContainer"></div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Tutup</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Cetak Label QR Code -->
  <div class="modal fade" id="modalCetakQR" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-navy text-white">
          <h5 class="modal-title"><i class="bi bi-qr-code me-2"></i>Label Kearsipan & QR Code</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body p-4 text-center">
          <div class="border rounded p-3 bg-light d-inline-block text-start mb-3" style="max-width: 320px;">
            <div class="d-flex gap-3 align-items-center mb-2 border-bottom pb-2">
              <img id="qrLabelImg" src="" style="width: 90px; height: 90px;" alt="QR Code">
              <div>
                <small class="text-muted d-block">PT. HANOCO</small>
                <span class="fw-bold text-navy d-block" id="qrLabelIdArsip">-</span>
                <span class="badge bg-light text-dark border" id="qrLabelKlasifikasi">-</span>
              </div>
            </div>
            <div class="small">
              <div><b>No:</b> <span id="qrLabelNoDokumen">-</span></div>
              <div class="text-truncate"><b>Hal:</b> <span id="qrLabelJudul">-</span></div>
              <div><b>Lok:</b> <span id="qrLabelLokasi">-</span></div>
              <div><b>Ret:</b> <span id="qrLabelRetensi">-</span></div>
            </div>
          </div>
          <p class="text-muted small">Label ini siap dicetak langsung ke printer label atau kertas stiker (80mm x 50mm).</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Tutup</button>
          <button type="button" class="btn btn-sm btn-navy" onclick="eksekusiCetakLabel()">
            <i class="bi bi-printer me-1"></i> Cetak Label Sekarang
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Ajukan Peminjaman -->
  <div class="modal fade" id="modalAjukanPinjam" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form id="formAjukanPinjam">
          <div class="modal-header bg-navy text-white">
            <h5 class="modal-title">Pengajuan Peminjaman Arsip</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body p-4">
            <div class="mb-3">
              <label class="form-label small fw-semibold">ID Arsip yang Dipinjam <span class="text-danger">*</span></label>
              <input type="text" id="pinjamIdArsip" class="form-control form-control-sm" placeholder="cth: HIA/PRY/2026/0001" required>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold">Bentuk Peminjaman <span class="text-danger">*</span></label>
              <select id="pinjamJenis" class="form-select form-select-sm" required>
                <option value="Fisik">Dokumen Fisik (Ambil di Ruang Arsip)</option>
                <option value="Digital">Akses Digital (Hak Lihat Google Drive Sementara)</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold">Keperluan Peminjaman <span class="text-danger">*</span></label>
              <textarea id="pinjamKeperluan" class="form-control form-control-sm" rows="3" placeholder="Tuliskan keperluan detail penggunaan arsip..." required></textarea>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold">Tanggal Rencana Kembali <span class="text-danger">*</span></label>
              <input type="date" id="pinjamTglKembali" class="form-control form-control-sm" required>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Batal</button>
            <button type="submit" class="btn btn-sm btn-navy">Kirim Pengajuan</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Modal Proses Persetujuan Peminjaman -->
  <div class="modal fade" id="modalProsesPersetujuan" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-navy text-white">
          <h5 class="modal-title">Verifikasi Persetujuan Peminjaman</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body p-4">
          <input type="hidden" id="persetujuanIdPinjam">
          <div class="alert alert-info py-2 small" id="persetujuanInfoArsip"></div>
          <div class="alert alert-danger py-2 small" id="persetujuanWarningRahasia" style="display: none;"></div>

          <div class="mb-3">
            <label class="form-label small fw-semibold">Catatan Petugas / Pimpinan (Opsional)</label>
            <textarea id="persetujuanCatatan" class="form-control form-control-sm" rows="3" placeholder="Catatan persetujuan atau alasan jika ditolak..."></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-sm btn-outline-danger" onclick="prosesAksiPersetujuan('TOLAK')">
            <i class="bi bi-x-circle me-1"></i> Tolak Pengajuan
          </button>
          <button type="button" class="btn btn-sm btn-success" onclick="prosesAksiPersetujuan('SETUJU')">
            <i class="bi bi-check-circle me-1"></i> Setujui Peminjaman
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Pengembalian Arsip -->
  <div class="modal fade" id="modalPengembalian" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form id="formPengembalian">
          <div class="modal-header bg-navy text-white">
            <h5 class="modal-title">Pencatatan Pengembalian Arsip</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body p-4">
            <input type="hidden" id="pengembalianIdPinjam">
            <div class="alert alert-secondary py-2 small" id="pengembalianInfoArsip"></div>

            <div class="mb-3">
              <label class="form-label small fw-semibold">Kondisi Dokumen Saat Dikembalikan</label>
              <select id="pengembalianKondisi" class="form-select form-select-sm" required>
                <option value="Baik">Baik & Lengkap</option>
                <option value="Rusak">Rusak / Sobek</option>
                <option value="Tidak Lengkap">Lembaran Tidak Lengkap</option>
                <option value="Hilang">Hilang</option>
                <option value="N/A (Akses Digital)">N/A (Peminjaman Digital)</option>
              </select>
            </div>

            <div class="mb-3">
              <label class="form-label small fw-semibold">Catatan Pengembalian</label>
              <textarea id="pengembalianCatatan" class="form-control form-control-sm" rows="2" placeholder="Catatan kondisi atau keterangan pengembalian..."></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Batal</button>
            <button type="submit" class="btn btn-sm btn-navy">Konfirmasi Selesai</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Modal Master Klasifikasi -->
  <div class="modal fade" id="modalMasterKlasifikasi" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form id="formMasterKlasifikasi">
          <div class="modal-header bg-navy text-white">
            <h5 class="modal-title">Kelola Master Klasifikasi (JRA)</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body p-4">
            <div class="mb-3">
              <label class="form-label small fw-semibold">Kode Klasifikasi (3-4 Huruf)</label>
              <input type="text" id="mKlasKode" class="form-control form-control-sm" maxlength="6" required>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold">Nama Klasifikasi</label>
              <input type="text" id="mKlasNama" class="form-control form-control-sm" required>
            </div>
            <div class="row g-2 mb-3">
              <div class="col-6">
                <label class="form-label small fw-semibold">Retensi Aktif (Tahun)</label>
                <input type="number" id="mKlasAktif" class="form-control form-control-sm" min="0" required>
              </div>
              <div class="col-6">
                <label class="form-label small fw-semibold">Retensi Inaktif (Tahun)</label>
                <input type="number" id="mKlasInaktif" class="form-control form-control-sm" min="0" required>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold">Nasib Akhir</label>
              <select id="mKlasNasib" class="form-select form-select-sm">
                <option value="Musnah">Musnah</option>
                <option value="Permanen">Permanen</option>
                <option value="Dinilai Kembali">Dinilai Kembali</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold">Akses Bawaan</label>
              <select id="mKlasAkses" class="form-select form-select-sm">
                <option value="Umum">Umum</option>
                <option value="Terbatas">Terbatas</option>
                <option value="Rahasia">Rahasia</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Batal</button>
            <button type="submit" class="btn btn-sm btn-navy">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Modal Master Proyek -->
  <div class="modal fade" id="modalMasterProyek" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form id="formMasterProyek">
          <div class="modal-header bg-navy text-white">
            <h5 class="modal-title">Kelola Master Proyek</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body p-4">
            <div class="mb-3">
              <label class="form-label small fw-semibold">ID Proyek (cth: PRY-2026-003)</label>
              <input type="text" id="mProyekId" class="form-control form-control-sm" required>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold">Nama Proyek</label>
              <input type="text" id="mProyekNama" class="form-control form-control-sm" required>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold">Klien</label>
              <input type="text" id="mProyekKlien" class="form-control form-control-sm">
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold">Lokasi Proyek</label>
              <input type="text" id="mProyekLokasi" class="form-control form-control-sm">
            </div>
            <div class="row g-2 mb-3">
              <div class="col-6">
                <label class="form-label small fw-semibold">Jenis Layanan</label>
                <select id="mProyekLayanan" class="form-select form-select-sm">
                  <option value="Interior Design">Interior Design</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Build & Fit-Out">Build & Fit-Out</option>
                  <option value="Consultation">Consultation</option>
                </select>
              </div>
              <div class="col-6">
                <label class="form-label small fw-semibold">Tahun</label>
                <input type="number" id="mProyekTahun" class="form-control form-control-sm">
              </div>
            </div>
            <div class="row g-2 mb-3">
              <div class="col-6">
                <label class="form-label small fw-semibold">Status Proyek</label>
                <select id="mProyekStatus" class="form-select form-select-sm">
                  <option value="Perencanaan">Perencanaan</option>
                  <option value="Pengerjaan">Pengerjaan</option>
                  <option value="Selesai">Selesai</option>
                  <option value="Pemeliharaan">Pemeliharaan</option>
                </select>
              </div>
              <div class="col-6">
                <label class="form-label small fw-semibold">PIC Proyek</label>
                <input type="text" id="mProyekPIC" class="form-control form-control-sm">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Batal</button>
            <button type="submit" class="btn btn-sm btn-navy">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Modal User Form -->
  <div class="modal fade" id="modalFormUser" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form id="formUser">
          <div class="modal-header bg-navy text-white">
            <h5 class="modal-title" id="modalUserTitle">Data Pengguna</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body p-4">
            <div class="mb-3">
              <label class="form-label small fw-semibold">Username <span class="text-danger">*</span></label>
              <input type="text" id="userUsername" class="form-control form-control-sm" required>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold">Nama Lengkap <span class="text-danger">*</span></label>
              <input type="text" id="userNama" class="form-control form-control-sm" required>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold">Email Perusahaan <span class="text-danger">*</span></label>
              <input type="email" id="userEmail" class="form-control form-control-sm" required>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold">Divisi / Bagian</label>
              <input type="text" id="userDivisi" class="form-control form-control-sm">
            </div>
            <div class="row g-2 mb-3">
              <div class="col-6">
                <label class="form-label small fw-semibold">Peran (Role) <span class="text-danger">*</span></label>
                <select id="userRole" class="form-select form-select-sm" required>
                  <option value="Admin">Admin</option>
                  <option value="Petugas">Petugas</option>
                  <option value="Peminjam">Peminjam</option>
                  <option value="Pimpinan">Pimpinan</option>
                </select>
              </div>
              <div class="col-6">
                <label class="form-label small fw-semibold">Status Akun</label>
                <select id="userStatus" class="form-select form-select-sm">
                  <option value="Aktif">Aktif</option>
                  <option value="Dinonaktifkan">Dinonaktifkan</option>
                  <option value="Terkunci">Terkunci</option>
                </select>
              </div>
            </div>
            <div class="mb-3" id="userPassGroup">
              <label class="form-label small fw-semibold">Password Awal <span class="text-danger">*</span></label>
              <input type="password" id="userPasswordAwal" class="form-control form-control-sm" minlength="8">
              <small class="text-muted">Pengguna wajib mengganti password saat login pertama.</small>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Batal</button>
            <button type="submit" class="btn btn-sm btn-navy">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Modal Reset Password Admin -->
  <div class="modal fade" id="modalResetPasswordAdmin" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form id="formResetPasswordAdmin">
          <div class="modal-header bg-navy text-white">
            <h5 class="modal-title">Reset Password Pengguna</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body p-4">
            <input type="hidden" id="resetUsernameTarget">
            <p class="small text-muted mb-3">Reset kata sandi untuk pengguna: <b id="resetUsernameLabel"></b></p>
            <div class="mb-3">
              <label class="form-label small fw-semibold">Password Baru Sementara (Min. 8 Karakter)</label>
              <input type="password" id="resetPasswordBaru" class="form-control form-control-sm" minlength="8" required>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Batal</button>
            <button type="submit" class="btn btn-sm btn-danger">Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Modal Wajib Ganti Password (Pertama Kali Login) -->
  <div class="modal fade" id="modalGantiPasswordWajib" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form id="formGantiPasswordWajib">
          <div class="modal-header bg-navy text-white">
            <h5 class="modal-title"><i class="bi bi-shield-exclamation me-2"></i>Wajib Mengganti Password</h5>
          </div>
          <div class="modal-body p-4">
            <div class="alert alert-warning small mb-3">
              Demi keamanan sistem, Anda diwajibkan untuk membuat kata sandi baru pribadi sebelum melanjutkan penggunaan aplikasi HANARSIP.
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold">Kata Sandi Baru (Min. 8 Karakter)</label>
              <input type="password" id="wajibPassBaru" class="form-control" minlength="8" required>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold">Ulangi Kata Sandi Baru</label>
              <input type="password" id="wajibPassKonfirm" class="form-control" minlength="8" required>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-navy w-100">Simpan Kata Sandi Baru</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Container Khusus Cetak (@media print) -->
  <div id="printOnlyArea" class="print-only"></div>

  <!-- Chart.js & SweetAlert2 & Bootstrap Bundle -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js">
// ============================================================================
// MODUL TATA NASKAH DINAS (TND)
// ============================================================================
AppState.tndList = [];
AppState.currentTNDItem = null;

function toRomanMonthClient(monthNum) {
  const romans = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
  const m = parseInt(monthNum, 10);
  return romans[m] || 'I';
}

function initTataNaskahView() {
  const today = new Date().toISOString().substring(0, 10);
  const inputTgl = document.getElementById('buatTNDTanggal');
  if (inputTgl && !inputTgl.value) {
    inputTgl.value = today;
  }
  updateTNDTemplatePreview();
  loadDaftarNaskah();
}

function switchTNDTab(tabName) {
  const tabs = ['agenda', 'buat', 'pedoman'];
  tabs.forEach(t => {
    const btn = document.getElementById(\`tab-tnd-\${t}-btn\`);
    const content = document.getElementById(\`tabContentTND\${t.charAt(0).toUpperCase() + t.slice(1)}\`);
    if (t === tabName) {
      if (btn) btn.classList.add('active');
      if (content) content.style.display = 'block';
    } else {
      if (btn) btn.classList.remove('active');
      if (content) content.style.display = 'none';
    }
  });

  if (tabName === 'agenda') {
    loadDaftarNaskah();
  } else if (tabName === 'buat') {
    updateTNDTemplatePreview();
  }
}

function updateTNDTemplatePreview() {
  const jenisVal = document.getElementById('buatTNDJenis') ? document.getElementById('buatTNDJenis').value : 'Nota Dinas|ND';
  const divisiVal = document.getElementById('buatTNDDivisi') ? document.getElementById('buatTNDDivisi').value : 'DIR';
  const tglVal = document.getElementById('buatTNDTanggal') ? document.getElementById('buatTNDTanggal').value : '';

  const [namaJenis, kodeJenis] = jenisVal.split('|');
  const d = tglVal ? new Date(tglVal) : new Date();
  const yyyy = d.getFullYear() || new Date().getFullYear();
  const mm = d.getMonth() + 1;
  const romanM = toRomanMonthClient(mm);

  const previewEl = document.getElementById('previewEstimasiNomor');
  if (previewEl) {
    previewEl.textContent = \`[No_Urut]/HIA-\${divisiVal}/\${kodeJenis}/\${romanM}/\${yyyy}\`;
  }

  // Pre-fill default template text if body is empty or matches another template
  const isiEl = document.getElementById('buatTNDIsi');
  if (isiEl && (!isiEl.value || isiEl.value.startsWith('Template'))) {
    if (kodeJenis === 'ND') {
      isiEl.value = \`1. Sehubungan dengan pelaksanaan operasional dan peningkatan tata kelola administrasi perusahaan, bersama ini kami sampaikan hal-hal sebagai berikut:\\n   a. Koordinasi berkas dokumen proyek dan kepatuhan arsip digital.\\n   b. Seluruh divisi diharapkan menyerahkan berkas laporan akhir tepat waktu.\\n\\n2. Berkenaan dengan hal tersebut di atas, mohon kerja sama seluruh unit kerja terkait untuk memedomani instruksi ini.\\n\\n3. Demikian nota dinas ini disampaikan untuk menjadi perhatian dan dilaksanakan sebagaimana mestinya.\`;
    } else if (kodeJenis === 'ST') {
      isiEl.value = \`DASAR PENUGASAN:\\n1. Rencana Kerja Operasional Proyek PT. Hanoco Interior Arsitektur Tahun 2026.\\n2. Surat Permohonan Klien terkait Pelaksanaan Survei Lapangan & Koordinasi Teknis.\\n\\nMEMERINTAHKAN KEPADA:\\nNama      : [Nama Personil]\\nJabatan   : [Jabatan / Spesialis]\\n\\nUNTUK:\\n1. Melaksanakan survei lapangan, verifikasi pengukuran dimensi, dan koordinasi dengan pengawas gedung.\\n2. Menyusun laporan hasil kunjungan lapangan maksimal 3 (tiga) hari kerja setelah tugas selesai.\\n\\nDemikian Surat Tugas ini dibuat untuk dilaksanakan dengan penuh tanggung jawab.\`;
    } else if (kodeJenis === 'BAST') {
      isiEl.value = \`Pada hari ini, tanggal [Tanggal], kami yang bertanda tangan di bawah ini:\\n1. PIHAK PERTAMA : PT. Hanoco Interior Arsitektur (selaku Penyedia Jasa Desain & Pelaksana)\\n2. PIHAK KEDUA   : [Nama Klien / Perusahaan] (selaku Pemberi Tugas)\\n\\nMenyatakan bahwa PIHAK PERTAMA telah menyelesaikan dan menyerahkan hasil pekerjaan berupa Dokumen Gambar Kerja (DED) / Hasil Pengerjaan Fisik Interior sesuai Surat Perjanjian Kerja.\\n\\nPIHAK KEDUA telah memeriksa dan menerima penyerahan pekerjaan tersebut dengan kondisi BAIK dan LENGKAP.\\n\\nDemikian Berita Acara Serah Terima ini dibuat dalam rangkap 2 (dua) bermaterai cukup untuk dipergunakan sebagaimana mestinya.\`;
    } else if (kodeJenis === 'SK') {
      isiEl.value = \`MENIMBANG:\\na. bahwa untuk kelancaran kegiatan operasional dan tertib kearsipan dokumen perusahaan, dipandang perlu menetapkan keputusan direksi;\\nb. bahwa yang namanya tercantum dalam lampiran keputusan ini dipandang cakap dan memenuhi syarat.\\n\\nMEMUTUSKAN:\\nMENETAPKAN : KEPUTUSAN DIREKSI TENTANG [HAL KEPUTUSAN]\\nKESATU     : Menetapkan dan mengesahkan kebijakan pelaksanaan...\\nKEDUA      : Keputusan ini mulai berlaku sejak tanggal ditetapkan.\`;
    } else {
      isiEl.value = \`Dengan hormat,\\n\\nSehubungan dengan surat Saudara nomor [...] tanggal [...], perihal [...], bersama ini kami sampaikan informasi sebagai berikut:\\n\\n[Tuliskan poin-poin penjelasan resmi perusahaan]\\n\\nDemikian surat ini kami sampaikan. Atas perhatian dan kerja sama yang baik, kami ucapkan terima kasih.\`;
    }
  }
}

async function loadDaftarNaskah() {
  if (!AppState.session) return;
  const tbody = document.getElementById('tableTNDBody');
  if (!tbody) return;

  tbody.innerHTML = '<tr><td colspan="7" class="text-center py-4"><span class="spinner-border spinner-border-sm me-2 text-navy"></span>Memuat buku agenda persuratan...</td></tr>';

  const filter = {
    keyword: document.getElementById('filterTNDKeyword') ? document.getElementById('filterTNDKeyword').value : '',
    kodeJenis: document.getElementById('filterTNDJenis') ? document.getElementById('filterTNDJenis').value : '',
    divisi: document.getElementById('filterTNDDivisi') ? document.getElementById('filterTNDDivisi').value : ''
  };

  try {
    const res = await callApi('apiGetDaftarNaskah', AppState.session.token, filter);
    if (!res.success) {
      tbody.innerHTML = \`<tr><td colspan="7" class="text-center text-danger py-4">\${res.message}</td></tr>\`;
      return;
    }

    const items = res.data;
    AppState.tndList = items;

    // Hitung Stat Metrik
    const total = items.length;
    const countND = items.filter(n => n.Kode_Jenis === 'ND').length;
    const countST = items.filter(n => n.Kode_Jenis === 'ST' || n.Kode_Jenis === 'SRT').length;
    const countBAST = items.filter(n => n.Kode_Jenis === 'BAST' || n.Kode_Jenis === 'SK').length;

    const elTot = document.getElementById('tndStatTotal'); if (elTot) elTot.textContent = total;
    const elND = document.getElementById('tndStatND'); if (elND) elND.textContent = countND;
    const elST = document.getElementById('tndStatST'); if (elST) elST.textContent = countST;
    const elBAST = document.getElementById('tndStatBAST'); if (elBAST) elBAST.textContent = countBAST;

    if (items.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted py-5">Belum ada naskah dinas yang terdaftar dalam agenda.</td></tr>';
      return;
    }

    tbody.innerHTML = items.map(n => {
      const isArchived = n.ID_Arsip_Terkait && n.ID_Arsip_Terkait !== '-';
      const statusBadge = isArchived
        ? \`<span class="badge bg-success-subtle text-success border border-success"><i class="bi bi-box-seam me-1"></i>Diarsipkan (\${n.ID_Arsip_Terkait})</span>\`
        : \`<span class="badge bg-primary-subtle text-primary border border-primary"><i class="bi bi-check-circle me-1"></i>Diterbitkan</span>\`;

      return \`
        <tr>
          <td>
            <div class="fw-bold text-navy font-monospace">\${escapeHtml(n.Nomor_Naskah)}</div>
            <small class="text-muted">ID: \${n.ID_Naskah}</small>
          </td>
          <td>
            <span class="badge bg-light text-dark border me-1">\${n.Kode_Jenis}</span>
            <span class="badge bg-secondary-subtle text-secondary">\${n.Divisi_Pembuat}</span>
            <div class="small text-muted mt-1">\${escapeHtml(n.Jenis_Naskah)}</div>
          </td>
          <td><small class="text-muted"><i class="bi bi-calendar-event me-1"></i>\${n.Tanggal_Naskah}</small></td>
          <td>
            <div class="fw-semibold text-truncate" style="max-width: 250px;" title="\${escapeHtml(n.Perihal)}">\${escapeHtml(n.Perihal)}</div>
            <small class="text-muted text-truncate d-block" style="max-width: 250px;">Yth: \${escapeHtml(n.Tujuan_Penerima)}</small>
          </td>
          <td><small>\${escapeHtml(n.Penandatangan)}</small></td>
          <td>\${statusBadge}</td>
          <td>
            <div class="btn-group btn-group-sm">
              <button class="btn btn-sm btn-outline-navy py-1 px-2" title="Pratinjau Kop Surat Resmi" onclick="bukaPratinjauNaskah('\${n.ID_Naskah}')">
                <i class="bi bi-file-earmark-text"></i> Pratinjau
              </button>
              <button class="btn btn-sm btn-outline-secondary py-1 px-2" title="Salin Nomor Naskah" onclick="salinNomorNaskah('\${escapeHtml(n.Nomor_Naskah)}')">
                <i class="bi bi-clipboard"></i>
              </button>
              \${!isArchived ? \`
                <button class="btn btn-sm btn-outline-success py-1 px-2" title="Daftarkan ke Arsip Digital" onclick="hubungkanNaskahLangsung('\${n.ID_Naskah}')">
                  <i class="bi bi-box-seam"></i>
                </button>
              \` : ''}
            </div>
          </td>
        </tr>
      \`;
    }).join('');

  } catch (err) {
    tbody.innerHTML = \`<tr><td colspan="7" class="text-center text-danger py-4">Gagal memuat: \${err.message}</td></tr>\`;
  }
}

function resetFilterTND() {
  const elKw = document.getElementById('filterTNDKeyword'); if (elKw) elKw.value = '';
  const elJn = document.getElementById('filterTNDJenis'); if (elJn) elJn.value = '';
  const elDv = document.getElementById('filterTNDDivisi'); if (elDv) elDv.value = '';
  loadDaftarNaskah();
}

// Handler Submit Form Buat Naskah Dinas Baru
document.addEventListener('submit', async (e) => {
  if (e.target && e.target.id === 'formBuatTND') {
    e.preventDefault();

    const jenisVal = document.getElementById('buatTNDJenis').value;
    const [namaJenis, kodeJenis] = jenisVal.split('|');

    const payload = {
      jenisNaskah: namaJenis,
      kodeJenis: kodeJenis,
      divisiPembuat: document.getElementById('buatTNDDivisi').value,
      tanggalNaskah: document.getElementById('buatTNDTanggal').value,
      perihal: document.getElementById('buatTNDPerihal').value.trim(),
      sifat: document.getElementById('buatTNDSifat').value,
      tujuanPenerima: document.getElementById('buatTNDPenerima').value.trim(),
      penandatangan: document.getElementById('buatTNDPenandatangan').value.trim(),
      lampiran: document.getElementById('buatTNDLampiran').value.trim(),
      tembusan: document.getElementById('buatTNDTembusan').value.trim(),
      isiRingkas: document.getElementById('buatTNDIsi').value.trim(),
      arsipkanLangsung: document.getElementById('buatTNDArsipOtomatis').checked
    };

    showLoading('Menerbitkan & menomori naskah dinas...');
    try {
      const res = await callApi('apiBuatNaskahDinas', AppState.session.token, payload);
      hideLoading();

      if (res.success) {
        Swal.fire({
          icon: 'success',
          title: 'Naskah Dinas Berhasil Diterbitkan',
          html: \`<p>Nomor Naskah Resmi Anda:</p><h4 class="text-navy font-monospace fw-bold">\${res.data.nomorNaskah}</h4>\` +
                (res.data.idArsip && res.data.idArsip !== '-' ? \`<small class="text-success"><i class="bi bi-check2-circle"></i> Otomatis terdaftar di Arsip Digital: <b>\${res.data.idArsip}</b></small>\` : ''),
          confirmButtonColor: '#0B1F3A',
          confirmButtonText: 'Buka Buku Agenda'
        }).then(() => {
          document.getElementById('formBuatTND').reset();
          switchTNDTab('agenda');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Gagal Menerbitkan',
          text: res.message,
          confirmButtonColor: '#0B1F3A'
        });
      }
    } catch (err) {
      hideLoading();
      showToast('error', err.message);
    }
  }
});

// Pratinjau Naskah Format Kop Surat Resmi PT. Hanoco
async function bukaPratinjauNaskah(idNaskah) {
  showLoading('Mempersiapkan pratinjau lembar naskah resmi...');
  try {
    const res = await callApi('apiGetDetailNaskah', AppState.session.token, idNaskah);
    hideLoading();
    if (!res.success) {
      showToast('error', res.message);
      return;
    }

    const n = res.data;
    AppState.currentTNDItem = n;

    // Header Format
    const judulNaskah = (n.Jenis_Naskah || 'NOTA DINAS').toUpperCase();
    document.getElementById('tndPreviewJudulNaskah').textContent = judulNaskah;
    document.getElementById('tndPreviewNomorNaskah').textContent = \`Nomor: \${n.Nomor_Naskah}\`;

    document.getElementById('tndPreviewTujuan').textContent = n.Tujuan_Penerima;
    document.getElementById('tndPreviewDari').textContent = \`\${n.Divisi_Pembuat} (\${n.Penandatangan})\`;
    document.getElementById('tndPreviewTanggal').textContent = n.Tanggal_Naskah;
    document.getElementById('tndPreviewSifat').textContent = n.Sifat;
    document.getElementById('tndPreviewLampiran').textContent = n.Lampiran && n.Lampiran !== '-' ? n.Lampiran : '-';
    document.getElementById('tndPreviewPerihal').textContent = n.Perihal;

    document.getElementById('tndPreviewIsi').textContent = n.Isi_Ringkas;

    document.getElementById('tndPreviewTtdKotaTgl').textContent = \`Jakarta, \${n.Tanggal_Naskah}\`;
    document.getElementById('tndPreviewTtdNama').textContent = n.Penandatangan;

    // Tembusan
    const tembusanContainer = document.getElementById('tndPreviewTembusanContainer');
    if (n.Tembusan && n.Tembusan !== '-') {
      tembusanContainer.style.display = 'block';
      document.getElementById('tndPreviewTembusan').textContent = n.Tembusan;
    } else {
      tembusanContainer.style.display = 'none';
    }

    // QR Verification Seal
    const qrData = JSON.stringify({
      no: n.Nomor_Naskah,
      hal: n.Perihal,
      tgl: n.Tanggal_Naskah,
      ttd: n.Penandatangan,
      auth: 'PT. Hanoco Interior Arsitektur TND Certified'
    });
    const qrUrl = \`https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=\${encodeURIComponent(qrData)}&choe=UTF-8\`;
    document.getElementById('tndPreviewQrSeal').src = qrUrl;

    // Tombol Arsipkan
    const btnArsip = document.getElementById('btnTNDHubungkanArsip');
    if (n.ID_Arsip_Terkait && n.ID_Arsip_Terkait !== '-') {
      btnArsip.disabled = true;
      btnArsip.innerHTML = \`<i class="bi bi-check2-all me-1"></i> Sudah Diarsipkan (\${n.ID_Arsip_Terkait})\`;
    } else {
      btnArsip.disabled = false;
      btnArsip.innerHTML = \`<i class="bi bi-box-seam me-1"></i> Daftarkan ke Arsip Digital\`;
    }

    const modal = new bootstrap.Modal(document.getElementById('modalPratinjauNaskahDinas'));
    modal.show();
  } catch (err) {
    hideLoading();
    showToast('error', err.message);
  }
}

function cetakNaskahDinasResmi() {
  const content = document.getElementById('lembarNaskahDinasResmi').innerHTML;
  const printArea = document.getElementById('printOnlyArea');
  printArea.innerHTML = \`
    <div style="padding: 15mm 20mm; font-family: 'Times New Roman', Times, serif; color: #000; line-height: 1.5; font-size: 11pt;">
      \${content}
    </div>
  \`;
  window.print();
}

function salinNomorNaskah(nomor) {
  navigator.clipboard.writeText(nomor).then(() => {
    showToast('success', \`Nomor '\${nomor}' berhasil disalin ke clipboard!\`);
  }).catch(() => {
    showToast('info', \`Nomor Naskah: \${nomor}\`);
  });
}

async function hubungkanNaskahTerbukaKeArsip() {
  if (!AppState.currentTNDItem) return;
  await hubungkanNaskahLangsung(AppState.currentTNDItem.ID_Naskah);
  bootstrap.Modal.getInstance(document.getElementById('modalPratinjauNaskahDinas')).hide();
}

async function hubungkanNaskahLangsung(idNaskah) {
  const confirmRes = await Swal.fire({
    title: 'Daftarkan ke Arsip Digital?',
    text: 'Naskah dinas resmi ini akan otomatis disimpan sebagai dokumen baru pada database kearsipan HANARSIP.',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#0B1F3A',
    confirmButtonText: 'Ya, Daftarkan'
  });

  if (confirmRes.isConfirmed) {
    showLoading('Menghubungkan ke database kearsipan...');
    try {
      const res = await callApi('apiHubungkanKeKearsipan', AppState.session.token, idNaskah);
      hideLoading();

      if (res.success) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil Diarsipkan',
          text: res.message,
          confirmButtonColor: '#0B1F3A'
        });
        loadDaftarNaskah();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Gagal',
          text: res.message,
          confirmButtonColor: '#0B1F3A'
        });
      }
    } catch (err) {
      hideLoading();
      showToast('error', err.message);
    }
  }
}

</script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11">
// ============================================================================
// MODUL TATA NASKAH DINAS (TND)
// ============================================================================
AppState.tndList = [];
AppState.currentTNDItem = null;

function toRomanMonthClient(monthNum) {
  const romans = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
  const m = parseInt(monthNum, 10);
  return romans[m] || 'I';
}

function initTataNaskahView() {
  const today = new Date().toISOString().substring(0, 10);
  const inputTgl = document.getElementById('buatTNDTanggal');
  if (inputTgl && !inputTgl.value) {
    inputTgl.value = today;
  }
  updateTNDTemplatePreview();
  loadDaftarNaskah();
}

function switchTNDTab(tabName) {
  const tabs = ['agenda', 'buat', 'pedoman'];
  tabs.forEach(t => {
    const btn = document.getElementById(\`tab-tnd-\${t}-btn\`);
    const content = document.getElementById(\`tabContentTND\${t.charAt(0).toUpperCase() + t.slice(1)}\`);
    if (t === tabName) {
      if (btn) btn.classList.add('active');
      if (content) content.style.display = 'block';
    } else {
      if (btn) btn.classList.remove('active');
      if (content) content.style.display = 'none';
    }
  });

  if (tabName === 'agenda') {
    loadDaftarNaskah();
  } else if (tabName === 'buat') {
    updateTNDTemplatePreview();
  }
}

function updateTNDTemplatePreview() {
  const jenisVal = document.getElementById('buatTNDJenis') ? document.getElementById('buatTNDJenis').value : 'Nota Dinas|ND';
  const divisiVal = document.getElementById('buatTNDDivisi') ? document.getElementById('buatTNDDivisi').value : 'DIR';
  const tglVal = document.getElementById('buatTNDTanggal') ? document.getElementById('buatTNDTanggal').value : '';

  const [namaJenis, kodeJenis] = jenisVal.split('|');
  const d = tglVal ? new Date(tglVal) : new Date();
  const yyyy = d.getFullYear() || new Date().getFullYear();
  const mm = d.getMonth() + 1;
  const romanM = toRomanMonthClient(mm);

  const previewEl = document.getElementById('previewEstimasiNomor');
  if (previewEl) {
    previewEl.textContent = \`[No_Urut]/HIA-\${divisiVal}/\${kodeJenis}/\${romanM}/\${yyyy}\`;
  }

  // Pre-fill default template text if body is empty or matches another template
  const isiEl = document.getElementById('buatTNDIsi');
  if (isiEl && (!isiEl.value || isiEl.value.startsWith('Template'))) {
    if (kodeJenis === 'ND') {
      isiEl.value = \`1. Sehubungan dengan pelaksanaan operasional dan peningkatan tata kelola administrasi perusahaan, bersama ini kami sampaikan hal-hal sebagai berikut:\\n   a. Koordinasi berkas dokumen proyek dan kepatuhan arsip digital.\\n   b. Seluruh divisi diharapkan menyerahkan berkas laporan akhir tepat waktu.\\n\\n2. Berkenaan dengan hal tersebut di atas, mohon kerja sama seluruh unit kerja terkait untuk memedomani instruksi ini.\\n\\n3. Demikian nota dinas ini disampaikan untuk menjadi perhatian dan dilaksanakan sebagaimana mestinya.\`;
    } else if (kodeJenis === 'ST') {
      isiEl.value = \`DASAR PENUGASAN:\\n1. Rencana Kerja Operasional Proyek PT. Hanoco Interior Arsitektur Tahun 2026.\\n2. Surat Permohonan Klien terkait Pelaksanaan Survei Lapangan & Koordinasi Teknis.\\n\\nMEMERINTAHKAN KEPADA:\\nNama      : [Nama Personil]\\nJabatan   : [Jabatan / Spesialis]\\n\\nUNTUK:\\n1. Melaksanakan survei lapangan, verifikasi pengukuran dimensi, dan koordinasi dengan pengawas gedung.\\n2. Menyusun laporan hasil kunjungan lapangan maksimal 3 (tiga) hari kerja setelah tugas selesai.\\n\\nDemikian Surat Tugas ini dibuat untuk dilaksanakan dengan penuh tanggung jawab.\`;
    } else if (kodeJenis === 'BAST') {
      isiEl.value = \`Pada hari ini, tanggal [Tanggal], kami yang bertanda tangan di bawah ini:\\n1. PIHAK PERTAMA : PT. Hanoco Interior Arsitektur (selaku Penyedia Jasa Desain & Pelaksana)\\n2. PIHAK KEDUA   : [Nama Klien / Perusahaan] (selaku Pemberi Tugas)\\n\\nMenyatakan bahwa PIHAK PERTAMA telah menyelesaikan dan menyerahkan hasil pekerjaan berupa Dokumen Gambar Kerja (DED) / Hasil Pengerjaan Fisik Interior sesuai Surat Perjanjian Kerja.\\n\\nPIHAK KEDUA telah memeriksa dan menerima penyerahan pekerjaan tersebut dengan kondisi BAIK dan LENGKAP.\\n\\nDemikian Berita Acara Serah Terima ini dibuat dalam rangkap 2 (dua) bermaterai cukup untuk dipergunakan sebagaimana mestinya.\`;
    } else if (kodeJenis === 'SK') {
      isiEl.value = \`MENIMBANG:\\na. bahwa untuk kelancaran kegiatan operasional dan tertib kearsipan dokumen perusahaan, dipandang perlu menetapkan keputusan direksi;\\nb. bahwa yang namanya tercantum dalam lampiran keputusan ini dipandang cakap dan memenuhi syarat.\\n\\nMEMUTUSKAN:\\nMENETAPKAN : KEPUTUSAN DIREKSI TENTANG [HAL KEPUTUSAN]\\nKESATU     : Menetapkan dan mengesahkan kebijakan pelaksanaan...\\nKEDUA      : Keputusan ini mulai berlaku sejak tanggal ditetapkan.\`;
    } else {
      isiEl.value = \`Dengan hormat,\\n\\nSehubungan dengan surat Saudara nomor [...] tanggal [...], perihal [...], bersama ini kami sampaikan informasi sebagai berikut:\\n\\n[Tuliskan poin-poin penjelasan resmi perusahaan]\\n\\nDemikian surat ini kami sampaikan. Atas perhatian dan kerja sama yang baik, kami ucapkan terima kasih.\`;
    }
  }
}

async function loadDaftarNaskah() {
  if (!AppState.session) return;
  const tbody = document.getElementById('tableTNDBody');
  if (!tbody) return;

  tbody.innerHTML = '<tr><td colspan="7" class="text-center py-4"><span class="spinner-border spinner-border-sm me-2 text-navy"></span>Memuat buku agenda persuratan...</td></tr>';

  const filter = {
    keyword: document.getElementById('filterTNDKeyword') ? document.getElementById('filterTNDKeyword').value : '',
    kodeJenis: document.getElementById('filterTNDJenis') ? document.getElementById('filterTNDJenis').value : '',
    divisi: document.getElementById('filterTNDDivisi') ? document.getElementById('filterTNDDivisi').value : ''
  };

  try {
    const res = await callApi('apiGetDaftarNaskah', AppState.session.token, filter);
    if (!res.success) {
      tbody.innerHTML = \`<tr><td colspan="7" class="text-center text-danger py-4">\${res.message}</td></tr>\`;
      return;
    }

    const items = res.data;
    AppState.tndList = items;

    // Hitung Stat Metrik
    const total = items.length;
    const countND = items.filter(n => n.Kode_Jenis === 'ND').length;
    const countST = items.filter(n => n.Kode_Jenis === 'ST' || n.Kode_Jenis === 'SRT').length;
    const countBAST = items.filter(n => n.Kode_Jenis === 'BAST' || n.Kode_Jenis === 'SK').length;

    const elTot = document.getElementById('tndStatTotal'); if (elTot) elTot.textContent = total;
    const elND = document.getElementById('tndStatND'); if (elND) elND.textContent = countND;
    const elST = document.getElementById('tndStatST'); if (elST) elST.textContent = countST;
    const elBAST = document.getElementById('tndStatBAST'); if (elBAST) elBAST.textContent = countBAST;

    if (items.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted py-5">Belum ada naskah dinas yang terdaftar dalam agenda.</td></tr>';
      return;
    }

    tbody.innerHTML = items.map(n => {
      const isArchived = n.ID_Arsip_Terkait && n.ID_Arsip_Terkait !== '-';
      const statusBadge = isArchived
        ? \`<span class="badge bg-success-subtle text-success border border-success"><i class="bi bi-box-seam me-1"></i>Diarsipkan (\${n.ID_Arsip_Terkait})</span>\`
        : \`<span class="badge bg-primary-subtle text-primary border border-primary"><i class="bi bi-check-circle me-1"></i>Diterbitkan</span>\`;

      return \`
        <tr>
          <td>
            <div class="fw-bold text-navy font-monospace">\${escapeHtml(n.Nomor_Naskah)}</div>
            <small class="text-muted">ID: \${n.ID_Naskah}</small>
          </td>
          <td>
            <span class="badge bg-light text-dark border me-1">\${n.Kode_Jenis}</span>
            <span class="badge bg-secondary-subtle text-secondary">\${n.Divisi_Pembuat}</span>
            <div class="small text-muted mt-1">\${escapeHtml(n.Jenis_Naskah)}</div>
          </td>
          <td><small class="text-muted"><i class="bi bi-calendar-event me-1"></i>\${n.Tanggal_Naskah}</small></td>
          <td>
            <div class="fw-semibold text-truncate" style="max-width: 250px;" title="\${escapeHtml(n.Perihal)}">\${escapeHtml(n.Perihal)}</div>
            <small class="text-muted text-truncate d-block" style="max-width: 250px;">Yth: \${escapeHtml(n.Tujuan_Penerima)}</small>
          </td>
          <td><small>\${escapeHtml(n.Penandatangan)}</small></td>
          <td>\${statusBadge}</td>
          <td>
            <div class="btn-group btn-group-sm">
              <button class="btn btn-sm btn-outline-navy py-1 px-2" title="Pratinjau Kop Surat Resmi" onclick="bukaPratinjauNaskah('\${n.ID_Naskah}')">
                <i class="bi bi-file-earmark-text"></i> Pratinjau
              </button>
              <button class="btn btn-sm btn-outline-secondary py-1 px-2" title="Salin Nomor Naskah" onclick="salinNomorNaskah('\${escapeHtml(n.Nomor_Naskah)}')">
                <i class="bi bi-clipboard"></i>
              </button>
              \${!isArchived ? \`
                <button class="btn btn-sm btn-outline-success py-1 px-2" title="Daftarkan ke Arsip Digital" onclick="hubungkanNaskahLangsung('\${n.ID_Naskah}')">
                  <i class="bi bi-box-seam"></i>
                </button>
              \` : ''}
            </div>
          </td>
        </tr>
      \`;
    }).join('');

  } catch (err) {
    tbody.innerHTML = \`<tr><td colspan="7" class="text-center text-danger py-4">Gagal memuat: \${err.message}</td></tr>\`;
  }
}

function resetFilterTND() {
  const elKw = document.getElementById('filterTNDKeyword'); if (elKw) elKw.value = '';
  const elJn = document.getElementById('filterTNDJenis'); if (elJn) elJn.value = '';
  const elDv = document.getElementById('filterTNDDivisi'); if (elDv) elDv.value = '';
  loadDaftarNaskah();
}

// Handler Submit Form Buat Naskah Dinas Baru
document.addEventListener('submit', async (e) => {
  if (e.target && e.target.id === 'formBuatTND') {
    e.preventDefault();

    const jenisVal = document.getElementById('buatTNDJenis').value;
    const [namaJenis, kodeJenis] = jenisVal.split('|');

    const payload = {
      jenisNaskah: namaJenis,
      kodeJenis: kodeJenis,
      divisiPembuat: document.getElementById('buatTNDDivisi').value,
      tanggalNaskah: document.getElementById('buatTNDTanggal').value,
      perihal: document.getElementById('buatTNDPerihal').value.trim(),
      sifat: document.getElementById('buatTNDSifat').value,
      tujuanPenerima: document.getElementById('buatTNDPenerima').value.trim(),
      penandatangan: document.getElementById('buatTNDPenandatangan').value.trim(),
      lampiran: document.getElementById('buatTNDLampiran').value.trim(),
      tembusan: document.getElementById('buatTNDTembusan').value.trim(),
      isiRingkas: document.getElementById('buatTNDIsi').value.trim(),
      arsipkanLangsung: document.getElementById('buatTNDArsipOtomatis').checked
    };

    showLoading('Menerbitkan & menomori naskah dinas...');
    try {
      const res = await callApi('apiBuatNaskahDinas', AppState.session.token, payload);
      hideLoading();

      if (res.success) {
        Swal.fire({
          icon: 'success',
          title: 'Naskah Dinas Berhasil Diterbitkan',
          html: \`<p>Nomor Naskah Resmi Anda:</p><h4 class="text-navy font-monospace fw-bold">\${res.data.nomorNaskah}</h4>\` +
                (res.data.idArsip && res.data.idArsip !== '-' ? \`<small class="text-success"><i class="bi bi-check2-circle"></i> Otomatis terdaftar di Arsip Digital: <b>\${res.data.idArsip}</b></small>\` : ''),
          confirmButtonColor: '#0B1F3A',
          confirmButtonText: 'Buka Buku Agenda'
        }).then(() => {
          document.getElementById('formBuatTND').reset();
          switchTNDTab('agenda');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Gagal Menerbitkan',
          text: res.message,
          confirmButtonColor: '#0B1F3A'
        });
      }
    } catch (err) {
      hideLoading();
      showToast('error', err.message);
    }
  }
});

// Pratinjau Naskah Format Kop Surat Resmi PT. Hanoco
async function bukaPratinjauNaskah(idNaskah) {
  showLoading('Mempersiapkan pratinjau lembar naskah resmi...');
  try {
    const res = await callApi('apiGetDetailNaskah', AppState.session.token, idNaskah);
    hideLoading();
    if (!res.success) {
      showToast('error', res.message);
      return;
    }

    const n = res.data;
    AppState.currentTNDItem = n;

    // Header Format
    const judulNaskah = (n.Jenis_Naskah || 'NOTA DINAS').toUpperCase();
    document.getElementById('tndPreviewJudulNaskah').textContent = judulNaskah;
    document.getElementById('tndPreviewNomorNaskah').textContent = \`Nomor: \${n.Nomor_Naskah}\`;

    document.getElementById('tndPreviewTujuan').textContent = n.Tujuan_Penerima;
    document.getElementById('tndPreviewDari').textContent = \`\${n.Divisi_Pembuat} (\${n.Penandatangan})\`;
    document.getElementById('tndPreviewTanggal').textContent = n.Tanggal_Naskah;
    document.getElementById('tndPreviewSifat').textContent = n.Sifat;
    document.getElementById('tndPreviewLampiran').textContent = n.Lampiran && n.Lampiran !== '-' ? n.Lampiran : '-';
    document.getElementById('tndPreviewPerihal').textContent = n.Perihal;

    document.getElementById('tndPreviewIsi').textContent = n.Isi_Ringkas;

    document.getElementById('tndPreviewTtdKotaTgl').textContent = \`Jakarta, \${n.Tanggal_Naskah}\`;
    document.getElementById('tndPreviewTtdNama').textContent = n.Penandatangan;

    // Tembusan
    const tembusanContainer = document.getElementById('tndPreviewTembusanContainer');
    if (n.Tembusan && n.Tembusan !== '-') {
      tembusanContainer.style.display = 'block';
      document.getElementById('tndPreviewTembusan').textContent = n.Tembusan;
    } else {
      tembusanContainer.style.display = 'none';
    }

    // QR Verification Seal
    const qrData = JSON.stringify({
      no: n.Nomor_Naskah,
      hal: n.Perihal,
      tgl: n.Tanggal_Naskah,
      ttd: n.Penandatangan,
      auth: 'PT. Hanoco Interior Arsitektur TND Certified'
    });
    const qrUrl = \`https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=\${encodeURIComponent(qrData)}&choe=UTF-8\`;
    document.getElementById('tndPreviewQrSeal').src = qrUrl;

    // Tombol Arsipkan
    const btnArsip = document.getElementById('btnTNDHubungkanArsip');
    if (n.ID_Arsip_Terkait && n.ID_Arsip_Terkait !== '-') {
      btnArsip.disabled = true;
      btnArsip.innerHTML = \`<i class="bi bi-check2-all me-1"></i> Sudah Diarsipkan (\${n.ID_Arsip_Terkait})\`;
    } else {
      btnArsip.disabled = false;
      btnArsip.innerHTML = \`<i class="bi bi-box-seam me-1"></i> Daftarkan ke Arsip Digital\`;
    }

    const modal = new bootstrap.Modal(document.getElementById('modalPratinjauNaskahDinas'));
    modal.show();
  } catch (err) {
    hideLoading();
    showToast('error', err.message);
  }
}

function cetakNaskahDinasResmi() {
  const content = document.getElementById('lembarNaskahDinasResmi').innerHTML;
  const printArea = document.getElementById('printOnlyArea');
  printArea.innerHTML = \`
    <div style="padding: 15mm 20mm; font-family: 'Times New Roman', Times, serif; color: #000; line-height: 1.5; font-size: 11pt;">
      \${content}
    </div>
  \`;
  window.print();
}

function salinNomorNaskah(nomor) {
  navigator.clipboard.writeText(nomor).then(() => {
    showToast('success', \`Nomor '\${nomor}' berhasil disalin ke clipboard!\`);
  }).catch(() => {
    showToast('info', \`Nomor Naskah: \${nomor}\`);
  });
}

async function hubungkanNaskahTerbukaKeArsip() {
  if (!AppState.currentTNDItem) return;
  await hubungkanNaskahLangsung(AppState.currentTNDItem.ID_Naskah);
  bootstrap.Modal.getInstance(document.getElementById('modalPratinjauNaskahDinas')).hide();
}

async function hubungkanNaskahLangsung(idNaskah) {
  const confirmRes = await Swal.fire({
    title: 'Daftarkan ke Arsip Digital?',
    text: 'Naskah dinas resmi ini akan otomatis disimpan sebagai dokumen baru pada database kearsipan HANARSIP.',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#0B1F3A',
    confirmButtonText: 'Ya, Daftarkan'
  });

  if (confirmRes.isConfirmed) {
    showLoading('Menghubungkan ke database kearsipan...');
    try {
      const res = await callApi('apiHubungkanKeKearsipan', AppState.session.token, idNaskah);
      hideLoading();

      if (res.success) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil Diarsipkan',
          text: res.message,
          confirmButtonColor: '#0B1F3A'
        });
        loadDaftarNaskah();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Gagal',
          text: res.message,
          confirmButtonColor: '#0B1F3A'
        });
      }
    } catch (err) {
      hideLoading();
      showToast('error', err.message);
    }
  }
}

</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js">
// ============================================================================
// MODUL TATA NASKAH DINAS (TND)
// ============================================================================
AppState.tndList = [];
AppState.currentTNDItem = null;

function toRomanMonthClient(monthNum) {
  const romans = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
  const m = parseInt(monthNum, 10);
  return romans[m] || 'I';
}

function initTataNaskahView() {
  const today = new Date().toISOString().substring(0, 10);
  const inputTgl = document.getElementById('buatTNDTanggal');
  if (inputTgl && !inputTgl.value) {
    inputTgl.value = today;
  }
  updateTNDTemplatePreview();
  loadDaftarNaskah();
}

function switchTNDTab(tabName) {
  const tabs = ['agenda', 'buat', 'pedoman'];
  tabs.forEach(t => {
    const btn = document.getElementById(\`tab-tnd-\${t}-btn\`);
    const content = document.getElementById(\`tabContentTND\${t.charAt(0).toUpperCase() + t.slice(1)}\`);
    if (t === tabName) {
      if (btn) btn.classList.add('active');
      if (content) content.style.display = 'block';
    } else {
      if (btn) btn.classList.remove('active');
      if (content) content.style.display = 'none';
    }
  });

  if (tabName === 'agenda') {
    loadDaftarNaskah();
  } else if (tabName === 'buat') {
    updateTNDTemplatePreview();
  }
}

function updateTNDTemplatePreview() {
  const jenisVal = document.getElementById('buatTNDJenis') ? document.getElementById('buatTNDJenis').value : 'Nota Dinas|ND';
  const divisiVal = document.getElementById('buatTNDDivisi') ? document.getElementById('buatTNDDivisi').value : 'DIR';
  const tglVal = document.getElementById('buatTNDTanggal') ? document.getElementById('buatTNDTanggal').value : '';

  const [namaJenis, kodeJenis] = jenisVal.split('|');
  const d = tglVal ? new Date(tglVal) : new Date();
  const yyyy = d.getFullYear() || new Date().getFullYear();
  const mm = d.getMonth() + 1;
  const romanM = toRomanMonthClient(mm);

  const previewEl = document.getElementById('previewEstimasiNomor');
  if (previewEl) {
    previewEl.textContent = \`[No_Urut]/HIA-\${divisiVal}/\${kodeJenis}/\${romanM}/\${yyyy}\`;
  }

  // Pre-fill default template text if body is empty or matches another template
  const isiEl = document.getElementById('buatTNDIsi');
  if (isiEl && (!isiEl.value || isiEl.value.startsWith('Template'))) {
    if (kodeJenis === 'ND') {
      isiEl.value = \`1. Sehubungan dengan pelaksanaan operasional dan peningkatan tata kelola administrasi perusahaan, bersama ini kami sampaikan hal-hal sebagai berikut:\\n   a. Koordinasi berkas dokumen proyek dan kepatuhan arsip digital.\\n   b. Seluruh divisi diharapkan menyerahkan berkas laporan akhir tepat waktu.\\n\\n2. Berkenaan dengan hal tersebut di atas, mohon kerja sama seluruh unit kerja terkait untuk memedomani instruksi ini.\\n\\n3. Demikian nota dinas ini disampaikan untuk menjadi perhatian dan dilaksanakan sebagaimana mestinya.\`;
    } else if (kodeJenis === 'ST') {
      isiEl.value = \`DASAR PENUGASAN:\\n1. Rencana Kerja Operasional Proyek PT. Hanoco Interior Arsitektur Tahun 2026.\\n2. Surat Permohonan Klien terkait Pelaksanaan Survei Lapangan & Koordinasi Teknis.\\n\\nMEMERINTAHKAN KEPADA:\\nNama      : [Nama Personil]\\nJabatan   : [Jabatan / Spesialis]\\n\\nUNTUK:\\n1. Melaksanakan survei lapangan, verifikasi pengukuran dimensi, dan koordinasi dengan pengawas gedung.\\n2. Menyusun laporan hasil kunjungan lapangan maksimal 3 (tiga) hari kerja setelah tugas selesai.\\n\\nDemikian Surat Tugas ini dibuat untuk dilaksanakan dengan penuh tanggung jawab.\`;
    } else if (kodeJenis === 'BAST') {
      isiEl.value = \`Pada hari ini, tanggal [Tanggal], kami yang bertanda tangan di bawah ini:\\n1. PIHAK PERTAMA : PT. Hanoco Interior Arsitektur (selaku Penyedia Jasa Desain & Pelaksana)\\n2. PIHAK KEDUA   : [Nama Klien / Perusahaan] (selaku Pemberi Tugas)\\n\\nMenyatakan bahwa PIHAK PERTAMA telah menyelesaikan dan menyerahkan hasil pekerjaan berupa Dokumen Gambar Kerja (DED) / Hasil Pengerjaan Fisik Interior sesuai Surat Perjanjian Kerja.\\n\\nPIHAK KEDUA telah memeriksa dan menerima penyerahan pekerjaan tersebut dengan kondisi BAIK dan LENGKAP.\\n\\nDemikian Berita Acara Serah Terima ini dibuat dalam rangkap 2 (dua) bermaterai cukup untuk dipergunakan sebagaimana mestinya.\`;
    } else if (kodeJenis === 'SK') {
      isiEl.value = \`MENIMBANG:\\na. bahwa untuk kelancaran kegiatan operasional dan tertib kearsipan dokumen perusahaan, dipandang perlu menetapkan keputusan direksi;\\nb. bahwa yang namanya tercantum dalam lampiran keputusan ini dipandang cakap dan memenuhi syarat.\\n\\nMEMUTUSKAN:\\nMENETAPKAN : KEPUTUSAN DIREKSI TENTANG [HAL KEPUTUSAN]\\nKESATU     : Menetapkan dan mengesahkan kebijakan pelaksanaan...\\nKEDUA      : Keputusan ini mulai berlaku sejak tanggal ditetapkan.\`;
    } else {
      isiEl.value = \`Dengan hormat,\\n\\nSehubungan dengan surat Saudara nomor [...] tanggal [...], perihal [...], bersama ini kami sampaikan informasi sebagai berikut:\\n\\n[Tuliskan poin-poin penjelasan resmi perusahaan]\\n\\nDemikian surat ini kami sampaikan. Atas perhatian dan kerja sama yang baik, kami ucapkan terima kasih.\`;
    }
  }
}

async function loadDaftarNaskah() {
  if (!AppState.session) return;
  const tbody = document.getElementById('tableTNDBody');
  if (!tbody) return;

  tbody.innerHTML = '<tr><td colspan="7" class="text-center py-4"><span class="spinner-border spinner-border-sm me-2 text-navy"></span>Memuat buku agenda persuratan...</td></tr>';

  const filter = {
    keyword: document.getElementById('filterTNDKeyword') ? document.getElementById('filterTNDKeyword').value : '',
    kodeJenis: document.getElementById('filterTNDJenis') ? document.getElementById('filterTNDJenis').value : '',
    divisi: document.getElementById('filterTNDDivisi') ? document.getElementById('filterTNDDivisi').value : ''
  };

  try {
    const res = await callApi('apiGetDaftarNaskah', AppState.session.token, filter);
    if (!res.success) {
      tbody.innerHTML = \`<tr><td colspan="7" class="text-center text-danger py-4">\${res.message}</td></tr>\`;
      return;
    }

    const items = res.data;
    AppState.tndList = items;

    // Hitung Stat Metrik
    const total = items.length;
    const countND = items.filter(n => n.Kode_Jenis === 'ND').length;
    const countST = items.filter(n => n.Kode_Jenis === 'ST' || n.Kode_Jenis === 'SRT').length;
    const countBAST = items.filter(n => n.Kode_Jenis === 'BAST' || n.Kode_Jenis === 'SK').length;

    const elTot = document.getElementById('tndStatTotal'); if (elTot) elTot.textContent = total;
    const elND = document.getElementById('tndStatND'); if (elND) elND.textContent = countND;
    const elST = document.getElementById('tndStatST'); if (elST) elST.textContent = countST;
    const elBAST = document.getElementById('tndStatBAST'); if (elBAST) elBAST.textContent = countBAST;

    if (items.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted py-5">Belum ada naskah dinas yang terdaftar dalam agenda.</td></tr>';
      return;
    }

    tbody.innerHTML = items.map(n => {
      const isArchived = n.ID_Arsip_Terkait && n.ID_Arsip_Terkait !== '-';
      const statusBadge = isArchived
        ? \`<span class="badge bg-success-subtle text-success border border-success"><i class="bi bi-box-seam me-1"></i>Diarsipkan (\${n.ID_Arsip_Terkait})</span>\`
        : \`<span class="badge bg-primary-subtle text-primary border border-primary"><i class="bi bi-check-circle me-1"></i>Diterbitkan</span>\`;

      return \`
        <tr>
          <td>
            <div class="fw-bold text-navy font-monospace">\${escapeHtml(n.Nomor_Naskah)}</div>
            <small class="text-muted">ID: \${n.ID_Naskah}</small>
          </td>
          <td>
            <span class="badge bg-light text-dark border me-1">\${n.Kode_Jenis}</span>
            <span class="badge bg-secondary-subtle text-secondary">\${n.Divisi_Pembuat}</span>
            <div class="small text-muted mt-1">\${escapeHtml(n.Jenis_Naskah)}</div>
          </td>
          <td><small class="text-muted"><i class="bi bi-calendar-event me-1"></i>\${n.Tanggal_Naskah}</small></td>
          <td>
            <div class="fw-semibold text-truncate" style="max-width: 250px;" title="\${escapeHtml(n.Perihal)}">\${escapeHtml(n.Perihal)}</div>
            <small class="text-muted text-truncate d-block" style="max-width: 250px;">Yth: \${escapeHtml(n.Tujuan_Penerima)}</small>
          </td>
          <td><small>\${escapeHtml(n.Penandatangan)}</small></td>
          <td>\${statusBadge}</td>
          <td>
            <div class="btn-group btn-group-sm">
              <button class="btn btn-sm btn-outline-navy py-1 px-2" title="Pratinjau Kop Surat Resmi" onclick="bukaPratinjauNaskah('\${n.ID_Naskah}')">
                <i class="bi bi-file-earmark-text"></i> Pratinjau
              </button>
              <button class="btn btn-sm btn-outline-secondary py-1 px-2" title="Salin Nomor Naskah" onclick="salinNomorNaskah('\${escapeHtml(n.Nomor_Naskah)}')">
                <i class="bi bi-clipboard"></i>
              </button>
              \${!isArchived ? \`
                <button class="btn btn-sm btn-outline-success py-1 px-2" title="Daftarkan ke Arsip Digital" onclick="hubungkanNaskahLangsung('\${n.ID_Naskah}')">
                  <i class="bi bi-box-seam"></i>
                </button>
              \` : ''}
            </div>
          </td>
        </tr>
      \`;
    }).join('');

  } catch (err) {
    tbody.innerHTML = \`<tr><td colspan="7" class="text-center text-danger py-4">Gagal memuat: \${err.message}</td></tr>\`;
  }
}

function resetFilterTND() {
  const elKw = document.getElementById('filterTNDKeyword'); if (elKw) elKw.value = '';
  const elJn = document.getElementById('filterTNDJenis'); if (elJn) elJn.value = '';
  const elDv = document.getElementById('filterTNDDivisi'); if (elDv) elDv.value = '';
  loadDaftarNaskah();
}

// Handler Submit Form Buat Naskah Dinas Baru
document.addEventListener('submit', async (e) => {
  if (e.target && e.target.id === 'formBuatTND') {
    e.preventDefault();

    const jenisVal = document.getElementById('buatTNDJenis').value;
    const [namaJenis, kodeJenis] = jenisVal.split('|');

    const payload = {
      jenisNaskah: namaJenis,
      kodeJenis: kodeJenis,
      divisiPembuat: document.getElementById('buatTNDDivisi').value,
      tanggalNaskah: document.getElementById('buatTNDTanggal').value,
      perihal: document.getElementById('buatTNDPerihal').value.trim(),
      sifat: document.getElementById('buatTNDSifat').value,
      tujuanPenerima: document.getElementById('buatTNDPenerima').value.trim(),
      penandatangan: document.getElementById('buatTNDPenandatangan').value.trim(),
      lampiran: document.getElementById('buatTNDLampiran').value.trim(),
      tembusan: document.getElementById('buatTNDTembusan').value.trim(),
      isiRingkas: document.getElementById('buatTNDIsi').value.trim(),
      arsipkanLangsung: document.getElementById('buatTNDArsipOtomatis').checked
    };

    showLoading('Menerbitkan & menomori naskah dinas...');
    try {
      const res = await callApi('apiBuatNaskahDinas', AppState.session.token, payload);
      hideLoading();

      if (res.success) {
        Swal.fire({
          icon: 'success',
          title: 'Naskah Dinas Berhasil Diterbitkan',
          html: \`<p>Nomor Naskah Resmi Anda:</p><h4 class="text-navy font-monospace fw-bold">\${res.data.nomorNaskah}</h4>\` +
                (res.data.idArsip && res.data.idArsip !== '-' ? \`<small class="text-success"><i class="bi bi-check2-circle"></i> Otomatis terdaftar di Arsip Digital: <b>\${res.data.idArsip}</b></small>\` : ''),
          confirmButtonColor: '#0B1F3A',
          confirmButtonText: 'Buka Buku Agenda'
        }).then(() => {
          document.getElementById('formBuatTND').reset();
          switchTNDTab('agenda');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Gagal Menerbitkan',
          text: res.message,
          confirmButtonColor: '#0B1F3A'
        });
      }
    } catch (err) {
      hideLoading();
      showToast('error', err.message);
    }
  }
});

// Pratinjau Naskah Format Kop Surat Resmi PT. Hanoco
async function bukaPratinjauNaskah(idNaskah) {
  showLoading('Mempersiapkan pratinjau lembar naskah resmi...');
  try {
    const res = await callApi('apiGetDetailNaskah', AppState.session.token, idNaskah);
    hideLoading();
    if (!res.success) {
      showToast('error', res.message);
      return;
    }

    const n = res.data;
    AppState.currentTNDItem = n;

    // Header Format
    const judulNaskah = (n.Jenis_Naskah || 'NOTA DINAS').toUpperCase();
    document.getElementById('tndPreviewJudulNaskah').textContent = judulNaskah;
    document.getElementById('tndPreviewNomorNaskah').textContent = \`Nomor: \${n.Nomor_Naskah}\`;

    document.getElementById('tndPreviewTujuan').textContent = n.Tujuan_Penerima;
    document.getElementById('tndPreviewDari').textContent = \`\${n.Divisi_Pembuat} (\${n.Penandatangan})\`;
    document.getElementById('tndPreviewTanggal').textContent = n.Tanggal_Naskah;
    document.getElementById('tndPreviewSifat').textContent = n.Sifat;
    document.getElementById('tndPreviewLampiran').textContent = n.Lampiran && n.Lampiran !== '-' ? n.Lampiran : '-';
    document.getElementById('tndPreviewPerihal').textContent = n.Perihal;

    document.getElementById('tndPreviewIsi').textContent = n.Isi_Ringkas;

    document.getElementById('tndPreviewTtdKotaTgl').textContent = \`Jakarta, \${n.Tanggal_Naskah}\`;
    document.getElementById('tndPreviewTtdNama').textContent = n.Penandatangan;

    // Tembusan
    const tembusanContainer = document.getElementById('tndPreviewTembusanContainer');
    if (n.Tembusan && n.Tembusan !== '-') {
      tembusanContainer.style.display = 'block';
      document.getElementById('tndPreviewTembusan').textContent = n.Tembusan;
    } else {
      tembusanContainer.style.display = 'none';
    }

    // QR Verification Seal
    const qrData = JSON.stringify({
      no: n.Nomor_Naskah,
      hal: n.Perihal,
      tgl: n.Tanggal_Naskah,
      ttd: n.Penandatangan,
      auth: 'PT. Hanoco Interior Arsitektur TND Certified'
    });
    const qrUrl = \`https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=\${encodeURIComponent(qrData)}&choe=UTF-8\`;
    document.getElementById('tndPreviewQrSeal').src = qrUrl;

    // Tombol Arsipkan
    const btnArsip = document.getElementById('btnTNDHubungkanArsip');
    if (n.ID_Arsip_Terkait && n.ID_Arsip_Terkait !== '-') {
      btnArsip.disabled = true;
      btnArsip.innerHTML = \`<i class="bi bi-check2-all me-1"></i> Sudah Diarsipkan (\${n.ID_Arsip_Terkait})\`;
    } else {
      btnArsip.disabled = false;
      btnArsip.innerHTML = \`<i class="bi bi-box-seam me-1"></i> Daftarkan ke Arsip Digital\`;
    }

    const modal = new bootstrap.Modal(document.getElementById('modalPratinjauNaskahDinas'));
    modal.show();
  } catch (err) {
    hideLoading();
    showToast('error', err.message);
  }
}

function cetakNaskahDinasResmi() {
  const content = document.getElementById('lembarNaskahDinasResmi').innerHTML;
  const printArea = document.getElementById('printOnlyArea');
  printArea.innerHTML = \`
    <div style="padding: 15mm 20mm; font-family: 'Times New Roman', Times, serif; color: #000; line-height: 1.5; font-size: 11pt;">
      \${content}
    </div>
  \`;
  window.print();
}

function salinNomorNaskah(nomor) {
  navigator.clipboard.writeText(nomor).then(() => {
    showToast('success', \`Nomor '\${nomor}' berhasil disalin ke clipboard!\`);
  }).catch(() => {
    showToast('info', \`Nomor Naskah: \${nomor}\`);
  });
}

async function hubungkanNaskahTerbukaKeArsip() {
  if (!AppState.currentTNDItem) return;
  await hubungkanNaskahLangsung(AppState.currentTNDItem.ID_Naskah);
  bootstrap.Modal.getInstance(document.getElementById('modalPratinjauNaskahDinas')).hide();
}

async function hubungkanNaskahLangsung(idNaskah) {
  const confirmRes = await Swal.fire({
    title: 'Daftarkan ke Arsip Digital?',
    text: 'Naskah dinas resmi ini akan otomatis disimpan sebagai dokumen baru pada database kearsipan HANARSIP.',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#0B1F3A',
    confirmButtonText: 'Ya, Daftarkan'
  });

  if (confirmRes.isConfirmed) {
    showLoading('Menghubungkan ke database kearsipan...');
    try {
      const res = await callApi('apiHubungkanKeKearsipan', AppState.session.token, idNaskah);
      hideLoading();

      if (res.success) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil Diarsipkan',
          text: res.message,
          confirmButtonColor: '#0B1F3A'
        });
        loadDaftarNaskah();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Gagal',
          text: res.message,
          confirmButtonColor: '#0B1F3A'
        });
      }
    } catch (err) {
      hideLoading();
      showToast('error', err.message);
    }
  }
}

</script>

<script>
/**
 * ============================================================================
 * HANARSIP (Hanoco Arsip) - Client-side SPA Application Logic
 * PT. Hanoco Interior Arsitektur
 * ============================================================================
 */

const AppState = {
  session: null,        // { token, username, namaLengkap, email, divisi, role, wajibGantiPassword }
  activeView: 'dashboard',
  masterKlasifikasi: [],
  masterProyek: [],
  charts: {
    klasifikasi: null,
    tren: null
  },
  arsipFilter: {
    keyword: '',
    jenisArsip: '',
    kodeKlasifikasi: '',
    idProyek: '',
    tahun: '',
    statusArsip: '',
    tingkatAkses: '',
    tglMulai: '',
    tglSelesai: '',
    includeDeleted: false,
    page: 1,
    pageSize: 10
  },
  pencarianFilter: {
    keyword: '',
    kodeKlasifikasi: '',
    idProyek: '',
    jenisArsip: '',
    tingkatAkses: '',
    tahun: '',
    page: 1,
    pageSize: 9,
    viewMode: 'card'
  }
};

// --- Helper Promisified google.script.run ---
function callApi(functionName, ...args) {
  return new Promise((resolve, reject) => {
    if (!window.google || !google.script || !google.script.run) {
      console.warn('google.script.run tidak tersedia (lingkungan lokal/simulasi)');
      resolve({ success: false, message: 'Google Apps Script environment tidak terdeteksi.' });
      return;
    }

    google.script.run
      .withSuccessHandler((response) => {
        if (response && response.message && response.message.includes('Sesi')) {
          if (!response.success && response.message.includes('kedaluwarsa')) {
            handleSessionExpired();
          }
        }
        resolve(response);
      })
      .withFailureHandler((error) => {
        console.error(\`Error pada pemanggilan API [\${functionName}]:\`, error);
        reject(error);
      })[functionName](...args);
  });
}

// --- Toast & Notifikasi Helper ---
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3500,
  timerProgressBar: true
});

function showToast(icon, title) {
  Toast.fire({ icon, title });
}

function showLoading(title = 'Memproses data...') {
  Swal.fire({
    title: title,
    text: 'Harap tunggu beberapa saat',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });
}

function hideLoading() {
  Swal.close();
}

// ============================================================================
// INISIALISASI & AUTENTIKASI
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initDigitalClock();
  initEventListeners();
  checkExistingSession();
});

function checkExistingSession() {
  const saved = localStorage.getItem('HANARSIP_SESSION');
  if (saved) {
    try {
      AppState.session = JSON.parse(saved);
      // Validasi sesi ke server
      callApi('apiGetProfil', AppState.session.token).then(resp => {
        if (resp && resp.success) {
          onLoginSuccess(AppState.session, false);
        } else {
          showLoginOverlay();
        }
      }).catch(() => {
        showLoginOverlay();
      });
    } catch (e) {
      showLoginOverlay();
    }
  } else {
    showLoginOverlay();
  }
}

function showLoginOverlay() {
  AppState.session = null;
  localStorage.removeItem('HANARSIP_SESSION');
  document.getElementById('login-overlay').style.display = 'flex';
  document.getElementById('app-wrapper').style.display = 'none';
}

function hideLoginOverlay() {
  document.getElementById('login-overlay').style.display = 'none';
  document.getElementById('app-wrapper').style.display = 'flex';
}

function handleSessionExpired() {
  Swal.fire({
    icon: 'warning',
    title: 'Sesi Telah Berakhir',
    text: 'Sesi login Anda telah kedaluwarsa. Silakan masuk kembali.',
    confirmButtonColor: '#0B1F3A'
  }).then(() => {
    showLoginOverlay();
  });
}

// Form Login
document.getElementById('formLogin').addEventListener('submit', async (e) => {
  e.preventDefault();
  const u = document.getElementById('loginUsername').value.trim();
  const p = document.getElementById('loginPassword').value;
  const btn = document.getElementById('btnLogin');

  if (!u || !p) {
    showToast('warning', 'Username dan password wajib diisi.');
    return;
  }

  btn.disabled = true;
  btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Memverifikasi...';

  try {
    const res = await callApi('apiLogin', u, p);
    if (res.success) {
      AppState.session = res.data;
      localStorage.setItem('HANARSIP_SESSION', JSON.stringify(res.data));
      onLoginSuccess(res.data, true);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login Gagal',
        text: res.message,
        confirmButtonColor: '#0B1F3A'
      });
    }
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Kesalahan Sistem',
      text: err.message || 'Gagal menghubungi server.',
      confirmButtonColor: '#0B1F3A'
    });
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<i class="bi bi-box-arrow-in-right me-2"></i>Masuk ke Sistem';
  }
});

// Logout
async function doLogout() {
  const result = await Swal.fire({
    title: 'Konfirmasi Keluar',
    text: 'Apakah Anda yakin ingin keluar dari sistem HANARSIP?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#0B1F3A',
    cancelButtonColor: '#64748B',
    confirmButtonText: 'Ya, Keluar',
    cancelButtonText: 'Batal'
  });

  if (result.isConfirmed) {
    if (AppState.session && AppState.session.token) {
      try {
        await callApi('apiLogout', AppState.session.token);
      } catch (e) {}
    }
    showToast('info', 'Anda telah berhasil logout.');
    showLoginOverlay();
  }
}

// Setelah Login Berhasil
async function onLoginSuccess(sessionData, isFreshLogin) {
  hideLoginOverlay();
  updateUserInfoUI(sessionData);
  applyRolePermissions(sessionData.role);

  // Load Master Data (Klasifikasi & Proyek)
  await loadMasterData();

  // Cek Wajib Ganti Password
  if (sessionData.wajibGantiPassword) {
    const modalGanti = new bootstrap.Modal(document.getElementById('modalGantiPasswordWajib'), {
      backdrop: 'static',
      keyboard: false
    });
    modalGanti.show();
  } else {
    if (isFreshLogin) {
      showToast('success', \`Selamat datang, \${sessionData.namaLengkap}\`);
    }
  }

  // Tampilkan Dashboard awal
  switchView('dashboard');
}

function updateUserInfoUI(user) {
  document.getElementById('topbarUserName').textContent = user.namaLengkap;
  document.getElementById('topbarUserRole').textContent = user.role;
  document.getElementById('sidebarUserRole').textContent = \`\${user.role} - \${user.divisi}\`;
  document.getElementById('sidebarUserName').textContent = user.namaLengkap;
  document.getElementById('sidebarUserAvatar').textContent = user.namaLengkap.charAt(0).toUpperCase();

  // Badge role color
  const roleBadge = document.getElementById('topbarUserRole');
  roleBadge.className = 'badge ' + (
    user.role === 'Admin' ? 'bg-danger' :
    user.role === 'Pimpinan' ? 'bg-primary' :
    user.role === 'Petugas' ? 'bg-success' : 'bg-secondary'
  );
}

function applyRolePermissions(role) {
  // Sembunyikan semua elemen ber-role khusus
  document.querySelectorAll('[data-role-allowed]').forEach(el => {
    const allowed = el.getAttribute('data-role-allowed').split(',').map(r => r.trim());
    if (allowed.includes(role)) {
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  });
}

// ============================================================================
// NAVIGASI & SWITCH VIEW
// ============================================================================
function switchView(viewName) {
  AppState.activeView = viewName;

  // Sembunyikan semua container view
  document.querySelectorAll('.view-section').forEach(sec => sec.style.display = 'none');

  // Hapus class active di nav sidebar
  document.querySelectorAll('.sidebar-nav-item').forEach(item => item.classList.remove('active'));

  // Tampilkan view target
  const targetView = document.getElementById(\`view-\${viewName}\`);
  if (targetView) targetView.style.display = 'block';

  // Aktifkan item nav sidebar
  const navItem = document.querySelector(\`.sidebar-nav-item[data-view="\${viewName}"]\`);
  if (navItem) navItem.classList.add('active');

  // Tutup sidebar di mobile jika terbuka
  closeMobileSidebar();

  // Muat data untuk view yang dipilih
  switch (viewName) {
    case 'dashboard':
      loadDashboardData();
      break;
    case 'pencarian':
      initPencarianView();
      break;
    case 'arsip':
      AppState.arsipFilter.page = 1;
      loadArsipData();
      break;
    case 'peminjaman':
      loadPeminjamanData();
      break;
    case 'tatanaskah':
      initTataNaskahView();
      break;
    case 'laporan':
      initLaporanView();
      break;
    case 'master':
      loadMasterTableView();
      break;
    case 'users':
      loadUsersData();
      break;
    case 'logs':
      loadAuditLogsData();
      break;
    case 'profil':
      loadProfilData();
      break;
  }
}

function initEventListeners() {
  // Nav Click Handler
  document.querySelectorAll('.sidebar-nav-item[data-view]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const view = item.getAttribute('data-view');
      switchView(view);
    });
  });

  // Mobile Toggle Sidebar
  const btnToggle = document.getElementById('btnToggleSidebar');
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');

  if (btnToggle) {
    btnToggle.addEventListener('click', () => {
      sidebar.classList.toggle('show');
      backdrop.classList.toggle('show');
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeMobileSidebar);
  }
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (sidebar) sidebar.classList.remove('show');
  if (backdrop) backdrop.classList.remove('show');
}

// ============================================================================
// MASTER DATA CACHE & HELPERS
// ============================================================================
async function loadMasterData() {
  if (!AppState.session) return;
  try {
    const res = await callApi('apiGetMasterData', AppState.session.token);
    if (res.success && res.data) {
      AppState.masterKlasifikasi = res.data.klasifikasi || [];
      AppState.masterProyek = res.data.proyek || [];
      populateDropdowns();
    }
  } catch (e) {
    console.warn('Gagal memuat master data:', e);
  }
}

function populateDropdowns() {
  // Klasifikasi Dropdowns
  const klasOptions = AppState.masterKlasifikasi.map(k => 
    \`<option value="\${k.Kode_Klasifikasi}">\${k.Kode_Klasifikasi} - \${k.Nama_Klasifikasi}</option>\`
  ).join('');

  document.querySelectorAll('.select-klasifikasi').forEach(el => {
    const currentVal = el.value;
    const hasAll = el.getAttribute('data-include-all') === 'true';
    el.innerHTML = (hasAll ? '<option value="">Semua Klasifikasi</option>' : '<option value="">-- Pilih Klasifikasi --</option>') + klasOptions;
    if (currentVal) el.value = currentVal;
  });

  // Proyek Dropdowns
  const proyekOptions = AppState.masterProyek.map(p => 
    \`<option value="\${p.ID_Proyek}">\${p.ID_Proyek} - \${p.Nama_Proyek}</option>\`
  ).join('');

  document.querySelectorAll('.select-proyek').forEach(el => {
    const currentVal = el.value;
    const hasAll = el.getAttribute('data-include-all') === 'true';
    el.innerHTML = (hasAll ? '<option value="">Semua Proyek (Opsional)</option>' : '<option value="">-- Non-Proyek / Umum --</option>') + proyekOptions;
    if (currentVal) el.value = currentVal;
  });
}

// ============================================================================
// DASHBOARD MODULE
// ============================================================================
async function loadDashboardData() {
  if (!AppState.session) return;

  try {
    const res = await callApi('apiGetDashboardStats', AppState.session.token);
    if (!res.success) {
      showToast('error', res.message);
      return;
    }

    const { summary, chartKlasifikasi, chartTren, arsipTerbaru, pinjamanJatuhTempo } = res.data;

    // Stat Cards
    document.getElementById('statTotalArsip').textContent = summary.totalArsip;
    document.getElementById('statArsipBulanIni').textContent = summary.arsipBulanIni;
    document.getElementById('statSedangDipinjam').textContent = summary.sedangDipinjam;
    document.getElementById('statPinjamanTerlambat').textContent = summary.pinjamanTerlambat;
    document.getElementById('statArsipRetensi').textContent = summary.arsipMendekatiRetensi;

    // Chart 1: Distribusi Klasifikasi (Doughnut)
    renderChartKlasifikasi(chartKlasifikasi);

    // Chart 2: Tren Penambahan Arsip (Bar)
    renderChartTren(chartTren);

    // 5 Arsip Terbaru
    const tbodyArsip = document.getElementById('tableDashboardArsipTerbaru');
    if (arsipTerbaru.length === 0) {
      tbodyArsip.innerHTML = '<tr><td colspan="5" class="text-center text-muted py-3">Belum ada data arsip</td></tr>';
    } else {
      tbodyArsip.innerHTML = arsipTerbaru.map(a => \`
        <tr>
          <td><span class="fw-bold text-navy">\${a.ID_Arsip}</span></td>
          <td>\${escapeHtml(a.Judul_Perihal)}</td>
          <td><span class="badge bg-light text-dark border">\${a.Kode_Klasifikasi}</span></td>
          <td><small class="text-muted">\${a.Tanggal_Dokumen || '-'}</small></td>
          <td>
            <button class="btn btn-sm btn-outline-navy py-0 px-2" onclick="bukaDetailArsip('\${a.ID_Arsip}')">
              <i class="bi bi-eye"></i> Detail
            </button>
          </td>
        </tr>
      \`).join('');
    }

    // Pinjaman Jatuh Tempo
    const tbodyPinjam = document.getElementById('tableDashboardPinjamanTempo');
    if (pinjamanJatuhTempo.length === 0) {
      tbodyPinjam.innerHTML = '<tr><td colspan="5" class="text-center text-muted py-3">Tidak ada pinjaman jatuh tempo/terlambat</td></tr>';
    } else {
      tbodyPinjam.innerHTML = pinjamanJatuhTempo.map(p => \`
        <tr>
          <td><span class="fw-bold text-navy">\${p.ID_Pinjam}</span></td>
          <td>\${p.Username_Peminjam}</td>
          <td><span class="badge \${p.Status_Pinjam === 'Terlambat' ? 'badge-terlambat' : 'badge-dipinjam'}">\${p.Status_Pinjam}</span></td>
          <td><small class="text-danger fw-bold">\${p.Tanggal_Rencana_Kembali || '-'}</small></td>
          <td>
            <button class="btn btn-sm btn-outline-navy py-0 px-2" onclick="switchView('peminjaman')">
              <i class="bi bi-arrow-right"></i>
            </button>
          </td>
        </tr>
      \`).join('');
    }

  } catch (err) {
    console.error('Error load dashboard:', err);
  }
}

function renderChartKlasifikasi(chartData) {
  const ctx = document.getElementById('chartKlasifikasiCanvas');
  if (!ctx) return;

  if (AppState.charts.klasifikasi) {
    AppState.charts.klasifikasi.destroy();
  }

  const palette = ['#0B1F3A', '#16325C', '#1E4580', '#2563EB', '#38BDF8', '#64748B', '#94A3B8'];

  AppState.charts.klasifikasi = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: chartData.labels,
      datasets: [{
        data: chartData.data,
        backgroundColor: palette.slice(0, chartData.labels.length),
        borderWidth: 2,
        borderColor: '#FFFFFF'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: { boxWidth: 12, font: { family: 'Plus Jakarta Sans', size: 11 } }
        }
      },
      cutout: '65%'
    }
  });
}

function renderChartTren(chartData) {
  const ctx = document.getElementById('chartTrenCanvas');
  if (!ctx) return;

  if (AppState.charts.tren) {
    AppState.charts.tren.destroy();
  }

  AppState.charts.tren = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartData.labels,
      datasets: [{
        label: 'Jumlah Arsip Baru',
        data: chartData.data,
        backgroundColor: '#16325C',
        borderRadius: 6,
        barPercentage: 0.55
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1, font: { family: 'Plus Jakarta Sans', size: 11 } },
          grid: { color: '#E2E8F0' }
        },
        x: {
          ticks: { font: { family: 'Plus Jakarta Sans', size: 11 } },
          grid: { display: false }
        }
      }
    }
  });
}

// ============================================================================
// ARSIP MODULE (CRUD, PENCARIAN, FILTER, QR LABEL)
// ============================================================================
async function loadArsipData() {
  if (!AppState.session) return;
  const tbody = document.getElementById('tableArsipBody');
  tbody.innerHTML = '<tr><td colspan="8" class="text-center py-4"><span class="spinner-border spinner-border-sm me-2 text-navy"></span>Memuat daftar arsip...</td></tr>';

  try {
    const res = await callApi('apiCariArsip', AppState.session.token, AppState.arsipFilter);
    if (!res.success) {
      tbody.innerHTML = \`<tr><td colspan="8" class="text-center text-danger py-4">\${res.message}</td></tr>\`;
      return;
    }

    const { items, totalItems, totalPages, currentPage } = res.data;
    document.getElementById('arsipTotalCounter').textContent = \`Total: \${totalItems} arsip\`;

    if (items.length === 0) {
      tbody.innerHTML = '<tr><td colspan="8" class="text-center text-muted py-5">Tidak ditemukan arsip yang sesuai dengan kriteria filter.</td></tr>';
      renderArsipPagination(0, 1);
      return;
    }

    const isAdmin = AppState.session.role === 'Admin';
    const isPetugas = AppState.session.role === 'Petugas' || isAdmin;

    tbody.innerHTML = items.map(a => {
      const isDel = String(a.Is_Deleted).toUpperCase() === 'TRUE';
      let actionButtons = \`
        <button class="btn btn-sm btn-outline-navy py-1 px-2" title="Lihat Detail" onclick="bukaDetailArsip('\${a.ID_Arsip}')">
          <i class="bi bi-eye"></i>
        </button>
        <button class="btn btn-sm btn-outline-secondary py-1 px-2" title="Cetak Label QR" onclick="bukaModalCetakQR('\${a.ID_Arsip}')">
          <i class="bi bi-qr-code"></i>
        </button>
      \`;

      if (isPetugas && !isDel) {
        actionButtons += \`
          <button class="btn btn-sm btn-outline-warning py-1 px-2" title="Ubah Metadata" onclick="bukaModalUbahArsip('\${a.ID_Arsip}')">
            <i class="bi bi-pencil"></i>
          </button>
          <button class="btn btn-sm btn-outline-danger py-1 px-2" title="Hapus ke Tempat Sampah" onclick="konfirmasiSoftDelete('\${a.ID_Arsip}')">
            <i class="bi bi-trash"></i>
          </button>
        \`;
      } else if (isAdmin && isDel) {
        actionButtons += \`
          <button class="btn btn-sm btn-success py-1 px-2" title="Pulihkan Arsip" onclick="konfirmasiPulihkan('\${a.ID_Arsip}')">
            <i class="bi bi-arrow-counterclockwise"></i>
          </button>
          <button class="btn btn-sm btn-danger py-1 px-2" title="Hapus Permanen" onclick="konfirmasiHapusPermanen('\${a.ID_Arsip}')">
            <i class="bi bi-x-octagon"></i>
          </button>
        \`;
      }

      const badgeAkses = a.Tingkat_Akses === 'Rahasia' ? 'badge-akses-rahasia' :
                         a.Tingkat_Akses === 'Terbatas' ? 'badge-akses-terbatas' : 'badge-akses-umum';

      return \`
        <tr class="\${isDel ? 'table-danger' : ''}">
          <td><span class="fw-bold text-navy">\${a.ID_Arsip}</span></td>
          <td>
            <div class="fw-semibold">\${escapeHtml(a.Judul_Perihal)}</div>
            <small class="text-muted">No: \${escapeHtml(a.Nomor_Dokumen)} | \${a.Jenis_Arsip}</small>
          </td>
          <td><span class="badge bg-light text-dark border">\${a.Kode_Klasifikasi}</span></td>
          <td><small>\${a.ID_Proyek !== '-' ? a.ID_Proyek : '<span class="text-muted">Umum</span>'}</small></td>
          <td><span class="badge-status \${badgeAkses}">\${a.Tingkat_Akses}</span></td>
          <td><span class="badge bg-secondary-subtle text-secondary">\${a.Status_Arsip}</span></td>
          <td><small class="text-muted"><i class="bi bi-geo-alt me-1"></i>\${escapeHtml(a.Lokasi_Fisik)}</small></td>
          <td><div class="btn-group btn-group-sm">\${actionButtons}</div></td>
        </tr>
      \`;
    }).join('');

    renderArsipPagination(totalPages, currentPage);
  } catch (e) {
    tbody.innerHTML = \`<tr><td colspan="8" class="text-center text-danger py-4">Gagal memuat arsip: \${e.message}</td></tr>\`;
  }
}

function renderArsipPagination(totalPages, currentPage) {
  const container = document.getElementById('arsipPagination');
  if (totalPages <= 1) {
    container.innerHTML = '';
    return;
  }

  let html = \`<ul class="pagination pagination-sm mb-0">\`;
  html += \`<li class="page-item \${currentPage === 1 ? 'disabled' : ''}">
    <a class="page-link" href="#" onclick="gantiHalamanArsip(\${currentPage - 1}); return false;">&laquo;</a>
  </li>\`;

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
      html += \`<li class="page-item \${i === currentPage ? 'active' : ''}">
        <a class="page-link" href="#" onclick="gantiHalamanArsip(\${i}); return false;">\${i}</a>
      </li>\`;
    } else if (i === currentPage - 3 || i === currentPage + 3) {
      html += \`<li class="page-item disabled"><span class="page-link">...</span></li>\`;
    }
  }

  html += \`<li class="page-item \${currentPage === totalPages ? 'disabled' : ''}">
    <a class="page-link" href="#" onclick="gantiHalamanArsip(\${currentPage + 1}); return false;">&raquo;</a>
  </li></ul>\`;

  container.innerHTML = html;
}

function gantiHalamanArsip(page) {
  AppState.arsipFilter.page = page;
  loadArsipData();
}

function terapkanFilterArsip() {
  AppState.arsipFilter.keyword = document.getElementById('filterKeyword').value;
  AppState.arsipFilter.jenisArsip = document.getElementById('filterJenis').value;
  AppState.arsipFilter.kodeKlasifikasi = document.getElementById('filterKlasifikasi').value;
  AppState.arsipFilter.idProyek = document.getElementById('filterProyek').value;
  AppState.arsipFilter.statusArsip = document.getElementById('filterStatus').value;
  AppState.arsipFilter.tingkatAkses = document.getElementById('filterAkses').value;
  AppState.arsipFilter.tahun = document.getElementById('filterTahun').value;
  AppState.arsipFilter.page = 1;
  loadArsipData();
}

function resetFilterArsip() {
  document.getElementById('filterKeyword').value = '';
  document.getElementById('filterJenis').value = '';
  document.getElementById('filterKlasifikasi').value = '';
  document.getElementById('filterProyek').value = '';
  document.getElementById('filterStatus').value = '';
  document.getElementById('filterAkses').value = '';
  document.getElementById('filterTahun').value = '';
  AppState.arsipFilter.includeDeleted = false;
  terapkanFilterArsip();
}

// Tambah / Ubah Arsip Modal Handler
function bukaModalTambahArsip() {
  document.getElementById('formArsip').reset();
  document.getElementById('modalArsipTitle').textContent = 'Tambah Dokumen Arsip Baru';
  document.getElementById('arsipEditId').value = '';
  document.getElementById('arsipFileHelp').textContent = 'Pilih berkas digital (PDF, JPG, PNG, DOCX, XLSX; Maks. 20 MB)';
  document.getElementById('arsipInfoRetensi').textContent = '-';
  const modal = new bootstrap.Modal(document.getElementById('modalFormArsip'));
  modal.show();
}

async function bukaModalUbahArsip(idArsip) {
  showLoading('Mengambil data arsip...');
  try {
    const res = await callApi('apiGetDetailArsip', AppState.session.token, idArsip);
    hideLoading();
    if (!res.success) {
      showToast('error', res.message);
      return;
    }

    const a = res.data;
    document.getElementById('modalArsipTitle').textContent = \`Ubah Arsip: \${a.ID_Arsip}\`;
    document.getElementById('arsipEditId').value = a.ID_Arsip;
    document.getElementById('arsipJenis').value = a.Jenis_Arsip;
    document.getElementById('arsipKlasifikasi').value = a.Kode_Klasifikasi;
    document.getElementById('arsipNomorDokumen').value = a.Nomor_Dokumen;
    document.getElementById('arsipTanggalDokumen').value = a.Tanggal_Dokumen;
    document.getElementById('arsipJudul').value = a.Judul_Perihal;
    document.getElementById('arsipPihakTerkait').value = a.Pihak_Terkait !== '-' ? a.Pihak_Terkait : '';
    document.getElementById('arsipProyek').value = a.ID_Proyek !== '-' ? a.ID_Proyek : '';
    document.getElementById('arsipLokasiFisik').value = a.Lokasi_Fisik !== '-' ? a.Lokasi_Fisik : '';
    document.getElementById('arsipAkses').value = a.Tingkat_Akses;
    document.getElementById('arsipStatus').value = a.Status_Arsip;
    document.getElementById('arsipFileHelp').textContent = a.Tautan_File ? 'Biarkan kosong jika tidak ingin mengganti berkas yang ada.' : 'Unggah berkas arsip (Maks. 20 MB)';
    document.getElementById('arsipInfoRetensi').textContent = a.Tanggal_Retensi || '-';

    const modal = new bootstrap.Modal(document.getElementById('modalFormArsip'));
    modal.show();
  } catch (e) {
    hideLoading();
    showToast('error', e.message);
  }
}

// Submit Form Arsip (Tambah atau Ubah)
document.getElementById('formArsip').addEventListener('submit', async (e) => {
  e.preventDefault();
  const idEdit = document.getElementById('arsipEditId').value;
  const fileInput = document.getElementById('arsipFileInput');

  const payload = {
    idArsip: idEdit,
    jenisArsip: document.getElementById('arsipJenis').value,
    kodeKlasifikasi: document.getElementById('arsipKlasifikasi').value,
    nomorDokumen: document.getElementById('arsipNomorDokumen').value,
    tanggalDokumen: document.getElementById('arsipTanggalDokumen').value,
    judulPerihal: document.getElementById('arsipJudul').value,
    pihakTerkait: document.getElementById('arsipPihakTerkait').value,
    idProyek: document.getElementById('arsipProyek').value,
    lokasiFisik: document.getElementById('arsipLokasiFisik').value,
    tingkatAkses: document.getElementById('arsipAkses').value,
    statusArsip: document.getElementById('arsipStatus').value
  };

  // Baca File jika diunggah
  if (fileInput.files && fileInput.files[0]) {
    const file = fileInput.files[0];
    if (file.size > 20 * 1024 * 1024) {
      showToast('error', 'Ukuran berkas melebihi batas 20 MB.');
      return;
    }

    showLoading('Membaca berkas & mengunggah ke Google Drive...');
    try {
      const base64Data = await readFileAsBase64(file);
      payload.fileData = {
        base64: base64Data,
        filename: file.name,
        mimeType: file.type
      };
    } catch (err) {
      hideLoading();
      showToast('error', 'Gagal membaca berkas lokal.');
      return;
    }
  } else {
    showLoading('Menyimpan data arsip...');
  }

  try {
    const fn = idEdit ? 'apiUbahArsip' : 'apiTambahArsip';
    const res = await callApi(fn, AppState.session.token, payload);
    hideLoading();

    if (res.success) {
      bootstrap.Modal.getInstance(document.getElementById('modalFormArsip')).hide();
      Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: res.message,
        confirmButtonColor: '#0B1F3A'
      });
      loadArsipData();
      if (AppState.activeView === 'dashboard') loadDashboardData();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: res.message,
        confirmButtonColor: '#0B1F3A'
      });
    }
  } catch (e) {
    hideLoading();
    Swal.fire({
      icon: 'error',
      title: 'Kesalahan Server',
      text: e.message,
      confirmButtonColor: '#0B1F3A'
    });
  }
});

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
}

// Hitung Estimasi Retensi saat form diisi
document.getElementById('arsipKlasifikasi').addEventListener('change', updateEstimatedRetention);
document.getElementById('arsipTanggalDokumen').addEventListener('change', updateEstimatedRetention);

function updateEstimatedRetention() {
  const klasCode = document.getElementById('arsipKlasifikasi').value;
  const docDate = document.getElementById('arsipTanggalDokumen').value;
  const infoEl = document.getElementById('arsipInfoRetensi');

  if (!klasCode || !docDate) {
    infoEl.textContent = '-';
    return;
  }

  const k = AppState.masterKlasifikasi.find(m => m.Kode_Klasifikasi === klasCode);
  if (k) {
    const d = new Date(docDate);
    const totalY = Number(k.Retensi_Aktif_Tahun || 0) + Number(k.Retensi_Inaktif_Tahun || 0);
    d.setFullYear(d.getFullYear() + totalY);
    const yyyy = d.getFullYear();
    const mm = ('0' + (d.getMonth() + 1)).slice(-2);
    const dd = ('0' + d.getDate()).slice(-2);
    infoEl.textContent = \`\${yyyy}-\${mm}-\${dd} (Aktif: \${k.Retensi_Aktif_Tahun} thn + Inaktif: \${k.Retensi_Inaktif_Tahun} thn -> \${k.Nasib_Akhir})\`;
  }
}

// Detail Arsip Modal
async function bukaDetailArsip(idArsip) {
  showLoading('Memuat detail arsip...');
  try {
    const res = await callApi('apiGetDetailArsip', AppState.session.token, idArsip);
    hideLoading();
    if (!res.success) {
      showToast('error', res.message);
      return;
    }

    const a = res.data;
    document.getElementById('detailArsipId').textContent = a.ID_Arsip;
    document.getElementById('detailArsipJudul').textContent = a.Judul_Perihal;
    document.getElementById('detailArsipNoDokumen').textContent = a.Nomor_Dokumen;
    document.getElementById('detailArsipJenis').textContent = a.Jenis_Arsip;
    document.getElementById('detailArsipKlasifikasi').textContent = a.Kode_Klasifikasi;
    document.getElementById('detailArsipTanggal').textContent = a.Tanggal_Dokumen;
    document.getElementById('detailArsipPihakTerkait').textContent = a.Pihak_Terkait;
    document.getElementById('detailArsipProyek').textContent = a.ID_Proyek;
    document.getElementById('detailArsipLokasi').textContent = a.Lokasi_Fisik;
    document.getElementById('detailArsipAkses').textContent = a.Tingkat_Akses;
    document.getElementById('detailArsipStatus').textContent = a.Status_Arsip;
    document.getElementById('detailArsipRetensi').textContent = a.Tanggal_Retensi;
    document.getElementById('detailArsipDiinputOleh').textContent = \`\${a.Diinput_Oleh} (\${a.Waktu_Input})\`;

    // Preview Container
    const previewContainer = document.getElementById('detailArsipPreviewContainer');
    if (a.Preview_Url) {
      previewContainer.innerHTML = \`
        <div class="ratio ratio-16x9 border rounded shadow-sm">
          <iframe src="\${a.Preview_Url}" allow="autoplay"></iframe>
        </div>
        <div class="mt-2 text-end">
          <a href="\${a.Tautan_File}" target="_blank" class="btn btn-sm btn-outline-navy">
            <i class="bi bi-box-arrow-up-right me-1"></i> Buka di Tab Baru
          </a>
        </div>
      \`;
    } else {
      previewContainer.innerHTML = \`
        <div class="text-center py-5 bg-light rounded border border-dashed">
          <i class="bi bi-file-earmark-x text-muted fs-1"></i>
          <p class="text-muted mt-2 mb-0">Berkas digital belum diunggah untuk arsip ini.</p>
        </div>
      \`;
    }

    // Tombol Pinjam Cepat
    document.getElementById('btnDetailPinjamCepat').onclick = () => {
      bootstrap.Modal.getInstance(document.getElementById('modalDetailArsip')).hide();
      bukaModalAjukanPinjam(a.ID_Arsip);
    };

    // Tombol Cetak Label Cepat
    document.getElementById('btnDetailCetakLabel').onclick = () => {
      bukaModalCetakQR(a.ID_Arsip);
    };

    const modal = new bootstrap.Modal(document.getElementById('modalDetailArsip'));
    modal.show();
  } catch (e) {
    hideLoading();
    showToast('error', e.message);
  }
}

// Modal Cetak Label QR Code
async function bukaModalCetakQR(idArsip) {
  showLoading('Mempersiapkan data label QR...');
  try {
    const res = await callApi('apiGetLabelCetak', AppState.session.token, idArsip);
    hideLoading();
    if (!res.success) {
      showToast('error', res.message);
      return;
    }

    const { arsip, qrUrl, company, system } = res.data;

    // Masukkan ke modal preview
    document.getElementById('qrLabelImg').src = qrUrl;
    document.getElementById('qrLabelIdArsip').textContent = arsip.ID_Arsip;
    document.getElementById('qrLabelJudul').textContent = arsip.Judul_Perihal;
    document.getElementById('qrLabelKlasifikasi').textContent = arsip.Kode_Klasifikasi;
    document.getElementById('qrLabelNoDokumen').textContent = arsip.Nomor_Dokumen;
    document.getElementById('qrLabelLokasi').textContent = arsip.Lokasi_Fisik;
    document.getElementById('qrLabelRetensi').textContent = arsip.Tanggal_Retensi;

    // Siapkan wadah cetak khusus @media print
    const printArea = document.getElementById('printOnlyArea');
    printArea.innerHTML = \`
      <div class="qr-label-box">
        <div class="qr-label-header">
          <h6>\${company}</h6>
          <small>\${system} - LABEL ARSIP</small>
        </div>
        <div class="qr-label-body">
          <img src="\${qrUrl}" class="qr-label-img" alt="QR Code">
          <div class="qr-label-info">
            <div><b>ID:</b> \${arsip.ID_Arsip}</div>
            <div><b>Klas:</b> \${arsip.Kode_Klasifikasi}</div>
            <div><b>No:</b> \${arsip.Nomor_Dokumen}</div>
            <div><b>Hal:</b> \${arsip.Judul_Perihal.substring(0, 45)}</div>
            <div><b>Lok:</b> \${arsip.Lokasi_Fisik}</div>
            <div><b>Ret:</b> \${arsip.Tanggal_Retensi}</div>
          </div>
        </div>
        <div class="qr-label-footer">
          Jaga keutuhan label arsip resmi PT. Hanoco Interior Arsitektur
        </div>
      </div>
    \`;

    const modal = new bootstrap.Modal(document.getElementById('modalCetakQR'));
    modal.show();
  } catch (e) {
    hideLoading();
    showToast('error', e.message);
  }
}

function eksekusiCetakLabel() {
  window.print();
}

// Soft Delete, Restore & Hapus Permanen
async function konfirmasiSoftDelete(idArsip) {
  const result = await Swal.fire({
    title: 'Hapus ke Tempat Sampah?',
    text: \`Arsip \${idArsip} akan dipindahkan ke tempat sampah dan disembunyikan dari pencarian umum.\`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#DC2626',
    cancelButtonColor: '#64748B',
    confirmButtonText: 'Ya, Hapus'
  });

  if (result.isConfirmed) {
    showLoading('Menghapus arsip...');
    const res = await callApi('apiSoftDeleteArsip', AppState.session.token, idArsip);
    hideLoading();
    if (res.success) {
      showToast('success', res.message);
      loadArsipData();
    } else {
      showToast('error', res.message);
    }
  }
}

async function konfirmasiPulihkan(idArsip) {
  showLoading('Memulihkan arsip...');
  const res = await callApi('apiPulihkanArsip', AppState.session.token, idArsip);
  hideLoading();
  if (res.success) {
    showToast('success', res.message);
    loadArsipData();
  } else {
    showToast('error', res.message);
  }
}

async function konfirmasiHapusPermanen(idArsip) {
  const result = await Swal.fire({
    title: 'HAPUS PERMANEN?',
    text: \`Peringatan: Berkas arsip \${idArsip} di spreadsheet dan Google Drive akan dihapus selamanya dan tidak dapat dikembalikan!\`,
    icon: 'error',
    showCancelButton: true,
    confirmButtonColor: '#DC2626',
    cancelButtonColor: '#64748B',
    confirmButtonText: 'Hapus Selamanya'
  });

  if (result.isConfirmed) {
    showLoading('Menghapus permanen...');
    const res = await callApi('apiHapusPermanenArsip', AppState.session.token, idArsip);
    hideLoading();
    if (res.success) {
      showToast('success', res.message);
      loadArsipData();
    } else {
      showToast('error', res.message);
    }
  }
}

// ============================================================================
// PEMINJAMAN MODULE (PENGAJUAN, APPROVAL, SERAH, PENGEMBALIAN)
// ============================================================================
async function loadPeminjamanData() {
  if (!AppState.session) return;
  const tbody = document.getElementById('tablePeminjamanBody');
  tbody.innerHTML = '<tr><td colspan="8" class="text-center py-4"><span class="spinner-border spinner-border-sm me-2 text-navy"></span>Memuat data peminjaman...</td></tr>';

  try {
    const res = await callApi('apiGetDaftarPeminjaman', AppState.session.token);
    if (!res.success) {
      tbody.innerHTML = \`<tr><td colspan="8" class="text-center text-danger py-4">\${res.message}</td></tr>\`;
      return;
    }

    const items = res.data;
    if (items.length === 0) {
      tbody.innerHTML = '<tr><td colspan="8" class="text-center text-muted py-5">Belum ada riwayat peminjaman arsip.</td></tr>';
      return;
    }

    const role = AppState.session.role;
    const canApprove = role === 'Admin' || role === 'Petugas' || role === 'Pimpinan';
    const isPetugas = role === 'Admin' || role === 'Petugas';

    tbody.innerHTML = items.map(p => {
      let badgeClass = 'badge-menunggu';
      if (p.Status_Pinjam === 'Disetujui') badgeClass = 'badge-disetujui';
      else if (p.Status_Pinjam === 'Dipinjam') badgeClass = 'badge-dipinjam';
      else if (p.Status_Pinjam === 'Ditolak') badgeClass = 'badge-ditolak';
      else if (p.Status_Pinjam === 'Selesai') badgeClass = 'badge-selesai';
      else if (p.Status_Pinjam === 'Terlambat') badgeClass = 'badge-terlambat';

      let actions = '';

      // Tombol Approval (Jika Menunggu)
      if (canApprove && p.Status_Pinjam === 'Menunggu Persetujuan') {
        actions += \`
          <button class="btn btn-sm btn-outline-success py-1 px-2" title="Proses Persetujuan" onclick="bukaModalPersetujuanPinjam('\${p.ID_Pinjam}', '\${p.ID_Arsip}', '\${p.Tingkat_Akses}')">
            <i class="bi bi-check2-circle"></i> Verifikasi
          </button>
        \`;
      }

      // Tombol Serah Fisik (Jika Disetujui & Jenis Fisik)
      if (isPetugas && p.Status_Pinjam === 'Disetujui' && p.Jenis_Pinjam === 'Fisik') {
        actions += \`
          <button class="btn btn-sm btn-outline-primary py-1 px-2" title="Serah Terima Fisik" onclick="prosesSerahFisik('\${p.ID_Pinjam}')">
            <i class="bi bi-box-arrow-right"></i> Serah Fisik
          </button>
        \`;
      }

      // Tombol Pengembalian (Jika Dipinjam atau Terlambat)
      if (isPetugas && (p.Status_Pinjam === 'Dipinjam' || p.Status_Pinjam === 'Terlambat')) {
        actions += \`
          <button class="btn btn-sm btn-outline-info py-1 px-2" title="Proses Pengembalian" onclick="bukaModalPengembalian('\${p.ID_Pinjam}', '\${p.ID_Arsip}')">
            <i class="bi bi-arrow-return-left"></i> Pengembalian
          </button>
        \`;
      }

      return \`
        <tr>
          <td><span class="fw-bold text-navy">\${p.ID_Pinjam}</span></td>
          <td>
            <span class="fw-semibold text-navy">\${p.ID_Arsip}</span>
            <div class="small text-muted">\${escapeHtml(p.Judul_Arsip)}</div>
          </td>
          <td>\${p.Username_Peminjam}</td>
          <td><span class="badge \${p.Jenis_Pinjam === 'Digital' ? 'bg-primary-subtle text-primary' : 'bg-warning-subtle text-warning-emphasis'}">\${p.Jenis_Pinjam}</span></td>
          <td><span class="badge-status \${badgeClass}">\${p.Status_Pinjam}</span></td>
          <td><small class="text-muted">\${p.Tanggal_Pengajuan}</small></td>
          <td><small class="fw-semibold \${p.Status_Pinjam === 'Terlambat' ? 'text-danger' : ''}">\${p.Tanggal_Rencana_Kembali}</small></td>
          <td><div class="btn-group btn-group-sm">\${actions || '<span class="text-muted small">-</span>'}</div></td>
        </tr>
      \`;
    }).join('');

  } catch (e) {
    tbody.innerHTML = \`<tr><td colspan="8" class="text-center text-danger py-4">Gagal memuat peminjaman: \${e.message}</td></tr>\`;
  }
}

function bukaModalAjukanPinjam(preSelectedArsipId = '') {
  document.getElementById('formAjukanPinjam').reset();
  if (preSelectedArsipId) {
    document.getElementById('pinjamIdArsip').value = preSelectedArsipId;
  }
  const modal = new bootstrap.Modal(document.getElementById('modalAjukanPinjam'));
  modal.show();
}

document.getElementById('formAjukanPinjam').addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = {
    idArsip: document.getElementById('pinjamIdArsip').value.trim(),
    jenisPinjam: document.getElementById('pinjamJenis').value,
    keperluan: document.getElementById('pinjamKeperluan').value.trim(),
    tanggalRencanaKembali: document.getElementById('pinjamTglKembali').value
  };

  showLoading('Mengirim pengajuan peminjaman...');
  try {
    const res = await callApi('apiAjukanPeminjaman', AppState.session.token, payload);
    hideLoading();

    if (res.success) {
      bootstrap.Modal.getInstance(document.getElementById('modalAjukanPinjam')).hide();
      Swal.fire({
        icon: 'success',
        title: 'Pengajuan Berhasil',
        text: res.message,
        confirmButtonColor: '#0B1F3A'
      });
      loadPeminjamanData();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Gagal Mengajukan',
        text: res.message,
        confirmButtonColor: '#0B1F3A'
      });
    }
  } catch (err) {
    hideLoading();
    showToast('error', err.message);
  }
});

// Modal Persetujuan Pinjam
function bukaModalPersetujuanPinjam(idPinjam, idArsip, tingkatAkses) {
  document.getElementById('persetujuanIdPinjam').value = idPinjam;
  document.getElementById('persetujuanInfoArsip').textContent = \`\${idPinjam} (Arsip: \${idArsip} - Akses: \${tingkatAkses})\`;
  document.getElementById('persetujuanCatatan').value = '';

  const isRahasia = tingkatAkses === 'Rahasia';
  const role = AppState.session.role;
  const warningEl = document.getElementById('persetujuanWarningRahasia');

  if (isRahasia) {
    warningEl.style.display = 'block';
    if (role !== 'Pimpinan' && role !== 'Admin') {
      warningEl.textContent = 'Peringatan: Anda bukan Pimpinan/Admin, persetujuan arsip RAHASIA akan ditolak oleh server.';
    } else {
      warningEl.textContent = 'Arsip ini berkategori RAHASIA dan membutuhkan wewenang Pimpinan / Administrator.';
    }
  } else {
    warningEl.style.display = 'none';
  }

  const modal = new bootstrap.Modal(document.getElementById('modalProsesPersetujuan'));
  modal.show();
}

async function prosesAksiPersetujuan(aksi) {
  const idPinjam = document.getElementById('persetujuanIdPinjam').value;
  const catatan = document.getElementById('persetujuanCatatan').value;

  showLoading(aksi === 'SETUJU' ? 'Menyetujui peminjaman...' : 'Menolak peminjaman...');
  try {
    const res = await callApi('apiProsesPersetujuanPinjam', AppState.session.token, idPinjam, aksi, catatan);
    hideLoading();

    if (res.success) {
      bootstrap.Modal.getInstance(document.getElementById('modalProsesPersetujuan')).hide();
      showToast('success', res.message);
      loadPeminjamanData();
      if (AppState.activeView === 'dashboard') loadDashboardData();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Gagal Memproses',
        text: res.message,
        confirmButtonColor: '#0B1F3A'
      });
    }
  } catch (err) {
    hideLoading();
    showToast('error', err.message);
  }
}

// Serah Terima Fisik
async function prosesSerahFisik(idPinjam) {
  const resConfirm = await Swal.fire({
    title: 'Serah Terima Dokumen Fisik',
    text: \`Konfirmasi bahwa dokumen fisik \${idPinjam} telah diserahkan kepada peminjam?\`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#0B1F3A',
    confirmButtonText: 'Ya, Serahkan'
  });

  if (resConfirm.isConfirmed) {
    showLoading('Memperbarui status...');
    const res = await callApi('apiSerahFisikPinjam', AppState.session.token, idPinjam);
    hideLoading();
    if (res.success) {
      showToast('success', res.message);
      loadPeminjamanData();
    } else {
      showToast('error', res.message);
    }
  }
}

// Modal Pengembalian
function bukaModalPengembalian(idPinjam, idArsip) {
  document.getElementById('pengembalianIdPinjam').value = idPinjam;
  document.getElementById('pengembalianInfoArsip').textContent = \`\${idPinjam} (Arsip: \${idArsip})\`;
  document.getElementById('pengembalianKondisi').value = 'Baik';
  document.getElementById('pengembalianCatatan').value = '';

  const modal = new bootstrap.Modal(document.getElementById('modalPengembalian'));
  modal.show();
}

document.getElementById('formPengembalian').addEventListener('submit', async (e) => {
  e.preventDefault();
  const idPinjam = document.getElementById('pengembalianIdPinjam').value;
  const kondisi = document.getElementById('pengembalianKondisi').value;
  const catatan = document.getElementById('pengembalianCatatan').value;

  showLoading('Memproses pengembalian...');
  try {
    const res = await callApi('apiProsesPengembalian', AppState.session.token, idPinjam, kondisi, catatan);
    hideLoading();

    if (res.success) {
      bootstrap.Modal.getInstance(document.getElementById('modalPengembalian')).hide();
      Swal.fire({
        icon: 'success',
        title: 'Pengembalian Selesai',
        text: res.message,
        confirmButtonColor: '#0B1F3A'
      });
      loadPeminjamanData();
      if (AppState.activeView === 'dashboard') loadDashboardData();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: res.message,
        confirmButtonColor: '#0B1F3A'
      });
    }
  } catch (e) {
    hideLoading();
    showToast('error', e.message);
  }
});

// ============================================================================
// LAPORAN & CETAK PDF MODULE
// ============================================================================
function initLaporanView() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = ('0' + (now.getMonth() + 1)).slice(-2);
  document.getElementById('laporanTglMulai').value = \`\${yyyy}-01-01\`;
  document.getElementById('laporanTglSelesai').value = \`\${yyyy}-\${mm}-28\`;
  generateLaporan();
}

async function generateLaporan() {
  if (!AppState.session) return;
  const filter = {
    tglMulai: document.getElementById('laporanTglMulai').value,
    tglSelesai: document.getElementById('laporanTglSelesai').value,
    kodeKlasifikasi: document.getElementById('laporanKlasifikasi').value,
    jenisArsip: document.getElementById('laporanJenis').value,
    statusArsip: document.getElementById('laporanStatus').value
  };

  const tbody = document.getElementById('tableLaporanBody');
  tbody.innerHTML = '<tr><td colspan="7" class="text-center py-4"><span class="spinner-border spinner-border-sm me-2 text-navy"></span>Menghasilkan laporan...</td></tr>';

  try {
    const res = await callApi('apiGetLaporanRekap', AppState.session.token, filter);
    if (!res.success) {
      tbody.innerHTML = \`<tr><td colspan="7" class="text-center text-danger py-4">\${res.message}</td></tr>\`;
      return;
    }

    const { items, total, generatedAt } = res.data;
    document.getElementById('laporanTotalLabel').textContent = \`Total Ditemukan: \${total} dokumen arsip\`;

    if (items.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted py-5">Tidak ada arsip dalam rentang filter laporan ini.</td></tr>';
      return;
    }

    tbody.innerHTML = items.map((a, idx) => \`
      <tr>
        <td>\${idx + 1}</td>
        <td><span class="fw-bold text-navy">\${a.ID_Arsip}</span></td>
        <td>
          <div class="fw-semibold">\${escapeHtml(a.Judul_Perihal)}</div>
          <small class="text-muted">No: \${escapeHtml(a.Nomor_Dokumen)}</small>
        </td>
        <td>\${a.Kode_Klasifikasi}</td>
        <td>\${a.Tanggal_Dokumen}</td>
        <td>\${a.Tingkat_Akses}</td>
        <td>\${a.Lokasi_Fisik}</td>
      </tr>
    \`).join('');

    // Siapkan wadah cetak format A4
    const printArea = document.getElementById('printOnlyArea');
    printArea.innerHTML = \`
      <div class="report-print-sheet">
        <div style="text-align: center; border-bottom: 2px solid #0B1F3A; padding-bottom: 12px; margin-bottom: 20px;">
          <h2 style="margin: 0; color: #0B1F3A;">PT. HANOCO INTERIOR ARSITEKTUR</h2>
          <p style="margin: 4px 0 0 0; font-size: 11pt; color: #64748B;">LAPORAN REKAPITULASI DOKUMEN ARSIP DIGITAL (HANARSIP)</p>
          <small style="color: #64748B;">Periode: \${filter.tglMulai || 'Awal'} s.d. \${filter.tglSelesai || 'Sekarang'} | Dicetak: \${generatedAt}</small>
        </div>

        <table>
          <thead>
            <tr>
              <th style="width: 30px;">No</th>
              <th>ID Arsip</th>
              <th>Nomor & Judul Dokumen</th>
              <th>Klasifikasi</th>
              <th>Tanggal</th>
              <th>Akses</th>
              <th>Lokasi Fisik</th>
            </tr>
          </thead>
          <tbody>
            \${items.map((a, i) => \`
              <tr>
                <td style="text-align: center;">\${i + 1}</td>
                <td><b>\${a.ID_Arsip}</b></td>
                <td><b>\${escapeHtml(a.Judul_Perihal)}</b><br><small>No: \${escapeHtml(a.Nomor_Dokumen)}</small></td>
                <td style="text-align: center;">\${a.Kode_Klasifikasi}</td>
                <td style="text-align: center;">\${a.Tanggal_Dokumen}</td>
                <td style="text-align: center;">\${a.Tingkat_Akses}</td>
                <td>\${escapeHtml(a.Lokasi_Fisik)}</td>
              </tr>
            \`).join('')}
          </tbody>
        </table>

        <div style="margin-top: 40px; display: flex; justify-content: space-between; page-break-inside: avoid;">
          <div style="text-align: center; width: 200px;">
            <p>Dibuat Oleh,</p>
            <div style="height: 60px;"></div>
            <p style="border-top: 1px solid #333; margin: 0; font-weight: bold;">\${AppState.session.namaLengkap}</p>
            <small>Petugas Kearsipan</small>
          </div>
          <div style="text-align: center; width: 200px;">
            <p>Mengetahui,</p>
            <div style="height: 60px;"></div>
            <p style="border-top: 1px solid #333; margin: 0; font-weight: bold;">Pimpinan Perusahaan</p>
            <small>PT. Hanoco Interior Arsitektur</small>
          </div>
        </div>
      </div>
    \`;

  } catch (err) {
    tbody.innerHTML = \`<tr><td colspan="7" class="text-center text-danger py-4">Gagal menghasilkan laporan: \${err.message}</td></tr>\`;
  }
}

function cetakLaporanPDF() {
  window.print();
}

// ============================================================================
// MASTER DATA MANAGEMENT (ADMIN ONLY)
// ============================================================================
function loadMasterTableView() {
  renderMasterKlasifikasiTable();
  renderMasterProyekTable();
}

function renderMasterKlasifikasiTable() {
  const tbody = document.getElementById('tableMasterKlasifikasiBody');
  tbody.innerHTML = AppState.masterKlasifikasi.map(k => \`
    <tr>
      <td><span class="fw-bold text-navy">\${k.Kode_Klasifikasi}</span></td>
      <td>\${k.Nama_Klasifikasi}</td>
      <td>\${k.Retensi_Aktif_Tahun} Thn</td>
      <td>\${k.Retensi_Inaktif_Tahun} Thn</td>
      <td><span class="badge bg-light text-dark border">\${k.Nasib_Akhir}</span></td>
      <td><span class="badge bg-secondary-subtle text-secondary">\${k.Akses_Bawaan}</span></td>
      <td>
        <button class="btn btn-sm btn-outline-warning py-0 px-2" onclick="editKlasifikasiModal('\${k.Kode_Klasifikasi}')">
          <i class="bi bi-pencil"></i>
        </button>
      </td>
    </tr>
  \`).join('');
}

function renderMasterProyekTable() {
  const tbody = document.getElementById('tableMasterProyekBody');
  tbody.innerHTML = AppState.masterProyek.map(p => \`
    <tr>
      <td><span class="fw-bold text-navy">\${p.ID_Proyek}</span></td>
      <td>\${p.Nama_Proyek}</td>
      <td>\${p.Klien}</td>
      <td>\${p.Lokasi}</td>
      <td>\${p.Jenis_Layanan}</td>
      <td><span class="badge bg-info-subtle text-info-emphasis">\${p.Status_Proyek}</span></td>
      <td><small>\${p.PIC}</small></td>
      <td>
        <button class="btn btn-sm btn-outline-warning py-0 px-2" onclick="editProyekModal('\${p.ID_Proyek}')">
          <i class="bi bi-pencil"></i>
        </button>
      </td>
    </tr>
  \`).join('');
}

function bukaModalTambahKlasifikasi() {
  document.getElementById('formMasterKlasifikasi').reset();
  document.getElementById('mKlasKode').readOnly = false;
  const modal = new bootstrap.Modal(document.getElementById('modalMasterKlasifikasi'));
  modal.show();
}

function editKlasifikasiModal(kode) {
  const k = AppState.masterKlasifikasi.find(item => item.Kode_Klasifikasi === kode);
  if (!k) return;
  document.getElementById('mKlasKode').value = k.Kode_Klasifikasi;
  document.getElementById('mKlasKode').readOnly = true;
  document.getElementById('mKlasNama').value = k.Nama_Klasifikasi;
  document.getElementById('mKlasAktif').value = k.Retensi_Aktif_Tahun;
  document.getElementById('mKlasInaktif').value = k.Retensi_Inaktif_Tahun;
  document.getElementById('mKlasNasib').value = k.Nasib_Akhir;
  document.getElementById('mKlasAkses').value = k.Akses_Bawaan;
  const modal = new bootstrap.Modal(document.getElementById('modalMasterKlasifikasi'));
  modal.show();
}

document.getElementById('formMasterKlasifikasi').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    kode: document.getElementById('mKlasKode').value.trim(),
    nama: document.getElementById('mKlasNama').value.trim(),
    retensiAktif: document.getElementById('mKlasAktif').value,
    retensiInaktif: document.getElementById('mKlasInaktif').value,
    nasibAkhir: document.getElementById('mKlasNasib').value,
    akses: document.getElementById('mKlasAkses').value
  };

  showLoading('Menyimpan klasifikasi...');
  const res = await callApi('apiSimpanMasterKlasifikasi', AppState.session.token, data);
  hideLoading();
  if (res.success) {
    bootstrap.Modal.getInstance(document.getElementById('modalMasterKlasifikasi')).hide();
    showToast('success', res.message);
    await loadMasterData();
    renderMasterKlasifikasiTable();
  } else {
    showToast('error', res.message);
  }
});

function bukaModalTambahProyek() {
  document.getElementById('formMasterProyek').reset();
  document.getElementById('mProyekId').readOnly = false;
  document.getElementById('mProyekTahun').value = new Date().getFullYear();
  const modal = new bootstrap.Modal(document.getElementById('modalMasterProyek'));
  modal.show();
}

function editProyekModal(idProyek) {
  const p = AppState.masterProyek.find(item => item.ID_Proyek === idProyek);
  if (!p) return;
  document.getElementById('mProyekId').value = p.ID_Proyek;
  document.getElementById('mProyekId').readOnly = true;
  document.getElementById('mProyekNama').value = p.Nama_Proyek;
  document.getElementById('mProyekKlien').value = p.Klien;
  document.getElementById('mProyekLokasi').value = p.Lokasi;
  document.getElementById('mProyekLayanan').value = p.Jenis_Layanan;
  document.getElementById('mProyekTahun').value = p.Tahun;
  document.getElementById('mProyekStatus').value = p.Status_Proyek;
  document.getElementById('mProyekPIC').value = p.PIC;
  const modal = new bootstrap.Modal(document.getElementById('modalMasterProyek'));
  modal.show();
}

document.getElementById('formMasterProyek').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    idProyek: document.getElementById('mProyekId').value.trim(),
    namaProyek: document.getElementById('mProyekNama').value.trim(),
    klien: document.getElementById('mProyekKlien').value.trim(),
    lokasi: document.getElementById('mProyekLokasi').value.trim(),
    jenisLayanan: document.getElementById('mProyekLayanan').value,
    tahun: document.getElementById('mProyekTahun').value,
    statusProyek: document.getElementById('mProyekStatus').value,
    pic: document.getElementById('mProyekPIC').value.trim()
  };

  showLoading('Menyimpan data proyek...');
  const res = await callApi('apiSimpanMasterProyek', AppState.session.token, data);
  hideLoading();
  if (res.success) {
    bootstrap.Modal.getInstance(document.getElementById('modalMasterProyek')).hide();
    showToast('success', res.message);
    await loadMasterData();
    renderMasterProyekTable();
  } else {
    showToast('error', res.message);
  }
});

// ============================================================================
// MANAJEMEN PENGGUNA (ADMIN ONLY)
// ============================================================================
let userCacheList = [];

async function loadUsersData() {
  if (!AppState.session) return;
  const tbody = document.getElementById('tableUsersBody');
  tbody.innerHTML = '<tr><td colspan="7" class="text-center py-4"><span class="spinner-border spinner-border-sm me-2 text-navy"></span>Memuat pengguna...</td></tr>';

  try {
    const res = await callApi('apiGetSemuaPengguna', AppState.session.token);
    if (!res.success) {
      tbody.innerHTML = \`<tr><td colspan="7" class="text-center text-danger py-4">\${res.message}</td></tr>\`;
      return;
    }

    userCacheList = res.data;
    tbody.innerHTML = userCacheList.map(u => \`
      <tr>
        <td><span class="fw-bold text-navy">\${u.Username}</span></td>
        <td>
          <div class="fw-semibold">\${u.Nama_Lengkap}</div>
          <small class="text-muted">\${u.Email}</small>
        </td>
        <td>\${u.Divisi}</td>
        <td><span class="badge \${u.Role === 'Admin' ? 'bg-danger' : u.Role === 'Pimpinan' ? 'bg-primary' : 'bg-success'}">\${u.Role}</span></td>
        <td><span class="badge \${u.Status_Akun === 'Aktif' ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}">\${u.Status_Akun}</span></td>
        <td><small class="text-muted">\${u.Login_Terakhir || '-'}</small></td>
        <td>
          <div class="btn-group btn-group-sm">
            <button class="btn btn-sm btn-outline-warning py-1 px-2" title="Ubah User" onclick="bukaModalUbahUser('\${u.Username}')">
              <i class="bi bi-pencil"></i>
            </button>
            <button class="btn btn-sm btn-outline-danger py-1 px-2" title="Reset Password" onclick="bukaModalResetPassword('\${u.Username}')">
              <i class="bi bi-key"></i>
            </button>
          </div>
        </td>
      </tr>
    \`).join('');
  } catch (err) {
    tbody.innerHTML = \`<tr><td colspan="7" class="text-center text-danger py-4">Gagal memuat user: \${err.message}</td></tr>\`;
  }
}

function bukaModalTambahUser() {
  document.getElementById('formUser').reset();
  document.getElementById('userUsername').readOnly = false;
  document.getElementById('userPassGroup').style.display = 'block';
  document.getElementById('modalUserTitle').textContent = 'Tambah Pengguna Baru';
  const modal = new bootstrap.Modal(document.getElementById('modalFormUser'));
  modal.show();
}

function bukaModalUbahUser(username) {
  const u = userCacheList.find(x => x.Username === username);
  if (!u) return;

  document.getElementById('userUsername').value = u.Username;
  document.getElementById('userUsername').readOnly = true;
  document.getElementById('userNama').value = u.Nama_Lengkap;
  document.getElementById('userEmail').value = u.Email;
  document.getElementById('userDivisi').value = u.Divisi;
  document.getElementById('userRole').value = u.Role;
  document.getElementById('userStatus').value = u.Status_Akun;
  document.getElementById('userPassGroup').style.display = 'none';
  document.getElementById('modalUserTitle').textContent = \`Ubah Data Pengguna: \${u.Username}\`;

  const modal = new bootstrap.Modal(document.getElementById('modalFormUser'));
  modal.show();
}

document.getElementById('formUser').addEventListener('submit', async (e) => {
  e.preventDefault();
  const isEdit = document.getElementById('userUsername').readOnly;
  const userData = {
    username: document.getElementById('userUsername').value.trim(),
    namaLengkap: document.getElementById('userNama').value.trim(),
    email: document.getElementById('userEmail').value.trim(),
    divisi: document.getElementById('userDivisi').value.trim(),
    role: document.getElementById('userRole').value,
    statusAkun: document.getElementById('userStatus').value
  };

  if (!isEdit) {
    userData.passwordAwal = document.getElementById('userPasswordAwal').value;
  }

  showLoading('Menyimpan data pengguna...');
  const fn = isEdit ? 'apiUbahPengguna' : 'apiTambahPengguna';
  const res = await callApi(fn, AppState.session.token, userData);
  hideLoading();

  if (res.success) {
    bootstrap.Modal.getInstance(document.getElementById('modalFormUser')).hide();
    showToast('success', res.message);
    loadUsersData();
  } else {
    showToast('error', res.message);
  }
});

function bukaModalResetPassword(username) {
  document.getElementById('resetUsernameTarget').value = username;
  document.getElementById('resetUsernameLabel').textContent = username;
  document.getElementById('resetPasswordBaru').value = '';
  const modal = new bootstrap.Modal(document.getElementById('modalResetPasswordAdmin'));
  modal.show();
}

document.getElementById('formResetPasswordAdmin').addEventListener('submit', async (e) => {
  e.preventDefault();
  const target = document.getElementById('resetUsernameTarget').value;
  const newPass = document.getElementById('resetPasswordBaru').value;

  showLoading('Mereset password...');
  const res = await callApi('apiResetPasswordUser', AppState.session.token, target, newPass);
  hideLoading();

  if (res.success) {
    bootstrap.Modal.getInstance(document.getElementById('modalResetPasswordAdmin')).hide();
    Swal.fire({
      icon: 'success',
      title: 'Password Direset',
      text: res.message,
      confirmButtonColor: '#0B1F3A'
    });
  } else {
    showToast('error', res.message);
  }
});

// Backup Manual
async function lakukanBackupManual() {
  const confirmRes = await Swal.fire({
    title: 'Backup Database Sekarang?',
    text: 'Sistem akan membuat salinan Google Sheets DB_HANARSIP ke folder Backup Google Drive.',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#0B1F3A',
    confirmButtonText: 'Ya, Jalankan Backup'
  });

  if (confirmRes.isConfirmed) {
    showLoading('Membuat cadangan database...');
    const res = await callApi('apiBackupManual', AppState.session.token);
    hideLoading();
    if (res.success) {
      Swal.fire({
        icon: 'success',
        title: 'Backup Berhasil',
        text: res.message,
        confirmButtonColor: '#0B1F3A'
      });
    } else {
      showToast('error', res.message);
    }
  }
}

// ============================================================================
// AUDIT LOG MODULE (ADMIN ONLY)
// ============================================================================
async function loadAuditLogsData() {
  if (!AppState.session) return;
  const tbody = document.getElementById('tableLogsBody');
  tbody.innerHTML = '<tr><td colspan="7" class="text-center py-4"><span class="spinner-border spinner-border-sm me-2 text-navy"></span>Memuat log audit...</td></tr>';

  try {
    const res = await callApi('apiGetLogAktivitas', AppState.session.token, 100);
    if (!res.success) {
      tbody.innerHTML = \`<tr><td colspan="7" class="text-center text-danger py-4">\${res.message}</td></tr>\`;
      return;
    }

    const logs = res.data;
    if (logs.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted py-5">Belum ada riwayat aktivitas.</td></tr>';
      return;
    }

    tbody.innerHTML = logs.map(l => \`
      <tr>
        <td><small class="text-muted">\${l.Waktu}</small></td>
        <td><span class="fw-bold">\${l.Username}</span> <small class="text-muted">(\${l.Role})</small></td>
        <td><span class="badge bg-secondary-subtle text-secondary">\${l.Modul}</span></td>
        <td><span class="fw-semibold text-navy">\${l.Aksi}</span></td>
        <td><small>\${l.ID_Objek !== '-' ? l.ID_Objek : ''}</small></td>
        <td><small>\${escapeHtml(l.Detail)}</small></td>
        <td><span class="badge \${l.Hasil === 'SUKSES' ? 'bg-success' : 'bg-danger'}">\${l.Hasil}</span></td>
      </tr>
    \`).join('');
  } catch (err) {
    tbody.innerHTML = \`<tr><td colspan="7" class="text-center text-danger py-4">Gagal memuat log: \${err.message}</td></tr>\`;
  }
}

// ============================================================================
// PROFIL & GANTI PASSWORD
// ============================================================================
function loadProfilData() {
  if (!AppState.session) return;
  document.getElementById('profilNama').textContent = AppState.session.namaLengkap;
  document.getElementById('profilUsername').textContent = AppState.session.username;
  document.getElementById('profilEmail').textContent = AppState.session.email;
  document.getElementById('profilDivisi').textContent = AppState.session.divisi;
  document.getElementById('profilRole').textContent = AppState.session.role;
  document.getElementById('profilLoginTerakhir').textContent = AppState.session.loginAt || '-';
}

document.getElementById('formGantiPasswordProfil').addEventListener('submit', async (e) => {
  e.preventDefault();
  const passLama = document.getElementById('profilPassLama').value;
  const passBaru = document.getElementById('profilPassBaru').value;
  const passKonfirm = document.getElementById('profilPassKonfirm').value;

  if (passBaru !== passKonfirm) {
    showToast('warning', 'Konfirmasi password baru tidak cocok.');
    return;
  }

  showLoading('Memperbarui password...');
  const res = await callApi('apiGantiPassword', AppState.session.token, passLama, passBaru);
  hideLoading();

  if (res.success) {
    document.getElementById('formGantiPasswordProfil').reset();
    Swal.fire({
      icon: 'success',
      title: 'Sukses',
      text: res.message,
      confirmButtonColor: '#0B1F3A'
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Gagal Ganti Password',
      text: res.message,
      confirmButtonColor: '#0B1F3A'
    });
  }
});

// Paksa Ganti Password Dialog (Wajib Ganti Password Pertama Kali)
document.getElementById('formGantiPasswordWajib').addEventListener('submit', async (e) => {
  e.preventDefault();
  const passBaru = document.getElementById('wajibPassBaru').value;
  const passKonfirm = document.getElementById('wajibPassKonfirm').value;

  if (passBaru !== passKonfirm) {
    showToast('warning', 'Konfirmasi password baru tidak cocok.');
    return;
  }

  showLoading('Menyimpan password baru...');
  const res = await callApi('apiGantiPassword', AppState.session.token, '', passBaru);
  hideLoading();

  if (res.success) {
    AppState.session.wajibGantiPassword = false;
    localStorage.setItem('HANARSIP_SESSION', JSON.stringify(AppState.session));
    bootstrap.Modal.getInstance(document.getElementById('modalGantiPasswordWajib')).hide();
    Swal.fire({
      icon: 'success',
      title: 'Password Berhasil Diperbarui',
      text: 'Sekarang Anda dapat menggunakan sistem HANARSIP dengan aman.',
      confirmButtonColor: '#0B1F3A'
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Gagal',
      text: res.message,
      confirmButtonColor: '#0B1F3A'
    });
  }
});

// Helper Escape HTML untuk mencegah XSS
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
// MODUL PORTAL PENCARIAN ARSIP
// ============================================================================
// AppState.pencarianFilter is defined in global AppState
/*
  keyword: '',
  kodeKlasifikasi: '',
  idProyek: '',
  jenisArsip: '',
  tingkatAkses: '',
  tahun: '',
  page: 1,
  pageSize: 9,
  viewMode: 'card'
};*/

function initPencarianView() {
  populateDropdowns();
  eksekusiPencarianPortal();
}

function setQuickSearchTag(klasCode, btn) {
  document.querySelectorAll('.quick-tag-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const selKlas = document.getElementById('cariPortalKlasifikasi');
  if (selKlas) selKlas.value = klasCode;
  const selJenis = document.getElementById('cariPortalJenis');
  if (selJenis) selJenis.value = '';
  eksekusiPencarianPortal();
}

function setQuickSearchJenis(jenis, btn) {
  document.querySelectorAll('.quick-tag-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const selJenis = document.getElementById('cariPortalJenis');
  if (selJenis) selJenis.value = jenis;
  const selKlas = document.getElementById('cariPortalKlasifikasi');
  if (selKlas) selKlas.value = '';
  eksekusiPencarianPortal();
}

function switchHasilViewMode(mode) {
  AppState.pencarianFilter.viewMode = mode;
  const btnCard = document.getElementById('btnViewModeCard');
  const btnTable = document.getElementById('btnViewModeTable');
  const gridEl = document.getElementById('pencarianHasilGrid');
  const tableEl = document.getElementById('pencarianHasilTableWrapper');

  if (mode === 'card') {
    if (btnCard) btnCard.classList.add('active');
    if (btnTable) btnTable.classList.remove('active');
    if (gridEl) gridEl.style.display = 'flex';
    if (tableEl) tableEl.style.display = 'none';
  } else {
    if (btnTable) btnTable.classList.add('active');
    if (btnCard) btnCard.classList.remove('active');
    if (gridEl) gridEl.style.display = 'none';
    if (tableEl) tableEl.style.display = 'block';
  }
}

function resetPencarianPortal() {
  const elKw = document.getElementById('cariPortalKeyword'); if (elKw) elKw.value = '';
  const elKl = document.getElementById('cariPortalKlasifikasi'); if (elKl) elKl.value = '';
  const elPr = document.getElementById('cariPortalProyek'); if (elPr) elPr.value = '';
  const elJn = document.getElementById('cariPortalJenis'); if (elJn) elJn.value = '';
  const elAk = document.getElementById('cariPortalAkses'); if (elAk) elAk.value = '';
  const elTh = document.getElementById('cariPortalTahun'); if (elTh) elTh.value = '';
  document.querySelectorAll('.quick-tag-btn').forEach((b, idx) => {
    if (idx === 0) b.classList.add('active');
    else b.classList.remove('active');
  });
  AppState.pencarianFilter.page = 1;
  eksekusiPencarianPortal();
}

async function eksekusiPencarianPortal() {
  if (!AppState.session) return;
  const grid = document.getElementById('pencarianHasilGrid');
  const tbody = document.getElementById('pencarianHasilTableBody');
  const info = document.getElementById('pencarianHasilInfo');
  if (!grid || !tbody) return;

  grid.innerHTML = '<div class="col-12 text-center py-5"><span class="spinner-border spinner-border-sm me-2 text-navy"></span>Mencari dokumen arsip...</div>';
  tbody.innerHTML = '<tr><td colspan="7" class="text-center py-4"><span class="spinner-border spinner-border-sm me-2 text-navy"></span>Memuat...</td></tr>';

  const filterParams = {
    keyword: document.getElementById('cariPortalKeyword') ? document.getElementById('cariPortalKeyword').value : '',
    kodeKlasifikasi: document.getElementById('cariPortalKlasifikasi') ? document.getElementById('cariPortalKlasifikasi').value : '',
    idProyek: document.getElementById('cariPortalProyek') ? document.getElementById('cariPortalProyek').value : '',
    jenisArsip: document.getElementById('cariPortalJenis') ? document.getElementById('cariPortalJenis').value : '',
    tingkatAkses: document.getElementById('cariPortalAkses') ? document.getElementById('cariPortalAkses').value : '',
    tahun: document.getElementById('cariPortalTahun') ? document.getElementById('cariPortalTahun').value : '',
    page: AppState.pencarianFilter.page,
    pageSize: AppState.pencarianFilter.pageSize
  };

  try {
    const res = await callApi('apiCariArsip', AppState.session.token, filterParams);
    if (!res.success) {
      grid.innerHTML = '<div class="col-12 text-center text-danger py-4">' + res.message + '</div>';
      tbody.innerHTML = '<tr><td colspan="7" class="text-center text-danger py-4">' + res.message + '</td></tr>';
      return;
    }

    const { items, totalItems, totalPages, currentPage } = res.data;
    if (info) info.textContent = 'Ditemukan ' + totalItems + ' dokumen arsip';

    if (items.length === 0) {
      grid.innerHTML = \`
        <div class="col-12 text-center py-5">
          <i class="bi bi-search text-muted fs-1 d-block mb-2"></i>
          <h6 class="text-muted">Tidak ada dokumen arsip yang cocok dengan pencarian Anda.</h6>
          <small class="text-muted">Coba gunakan kata kunci yang lebih umum atau reset filter pencarian.</small>
        </div>
      \`;
      tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted py-5">Tidak ada data arsip.</td></tr>';
      renderPencarianPagination(0, 1);
      return;
    }

    // Render Grid Cards
    grid.innerHTML = items.map(a => {
      const badgeAkses = a.Tingkat_Akses === 'Rahasia' ? 'badge-akses-rahasia' :
                         a.Tingkat_Akses === 'Terbatas' ? 'badge-akses-terbatas' : 'badge-akses-umum';

      return \`
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card-custom h-100 p-3 d-flex flex-column justify-content-between position-relative" style="border-top: 3px solid var(--navy-primary);">
            <div>
              <div class="d-flex justify-content-between align-items-start mb-2">
                <span class="badge bg-light text-navy border fw-bold">\${a.ID_Arsip}</span>
                <span class="badge-status \${badgeAkses}">\${a.Tingkat_Akses}</span>
              </div>
              <h6 class="fw-bold text-navy mb-1 text-truncate" title="\${escapeHtml(a.Judul_Perihal)}">\${escapeHtml(a.Judul_Perihal)}</h6>
              <div class="small text-muted mb-2">
                <div><i class="bi bi-file-earmark-text me-1"></i>No: \${escapeHtml(a.Nomor_Dokumen)}</div>
                <div><i class="bi bi-tag me-1"></i>\${a.Jenis_Arsip} (\${a.Kode_Klasifikasi})</div>
                \${a.ID_Proyek !== '-' ? \`<div><i class="bi bi-building me-1"></i>\${a.ID_Proyek}</div>\` : ''}
              </div>
              <div class="p-2 bg-light rounded small mb-3">
                <div class="text-truncate text-muted"><i class="bi bi-geo-alt me-1 text-danger"></i><b>Lokasi:</b> \${escapeHtml(a.Lokasi_Fisik)}</div>
                <div class="text-muted"><i class="bi bi-calendar3 me-1"></i><b>Tanggal:</b> \${a.Tanggal_Dokumen || '-'}</div>
              </div>
            </div>
            <div class="border-top pt-2 d-flex gap-2">
              <button class="btn btn-sm btn-navy flex-grow-1 py-1" onclick="bukaDetailArsip('\${a.ID_Arsip}')">
                <i class="bi bi-eye me-1"></i> Detail
              </button>
              <button class="btn btn-sm btn-outline-navy py-1" title="Ajukan Pinjam" onclick="bukaModalAjukanPinjam('\${a.ID_Arsip}')">
                <i class="bi bi-box-arrow-in-right"></i>
              </button>
              <button class="btn btn-sm btn-outline-secondary py-1" title="Cetak Label QR" onclick="bukaModalCetakQR('\${a.ID_Arsip}')">
                <i class="bi bi-qr-code"></i>
              </button>
            </div>
          </div>
        </div>
      \`;
    }).join('');

    // Render Table
    tbody.innerHTML = items.map(a => {
      const badgeAkses = a.Tingkat_Akses === 'Rahasia' ? 'badge-akses-rahasia' :
                         a.Tingkat_Akses === 'Terbatas' ? 'badge-akses-terbatas' : 'badge-akses-umum';
      return \`
        <tr>
          <td><span class="fw-bold text-navy">\${a.ID_Arsip}</span></td>
          <td>
            <div class="fw-semibold">\${escapeHtml(a.Judul_Perihal)}</div>
            <small class="text-muted">No: \${escapeHtml(a.Nomor_Dokumen)} | \${a.Jenis_Arsip}</small>
          </td>
          <td><span class="badge bg-light text-dark border">\${a.Kode_Klasifikasi}</span></td>
          <td><small>\${a.ID_Proyek !== '-' ? a.ID_Proyek : 'Umum'}</small></td>
          <td><span class="badge-status \${badgeAkses}">\${a.Tingkat_Akses}</span></td>
          <td><small><i class="bi bi-geo-alt me-1"></i>\${escapeHtml(a.Lokasi_Fisik)}</small></td>
          <td>
            <div class="btn-group btn-group-sm">
              <button class="btn btn-sm btn-outline-navy py-1 px-2" title="Detail" onclick="bukaDetailArsip('\${a.ID_Arsip}')">
                <i class="bi bi-eye"></i>
              </button>
              <button class="btn btn-sm btn-outline-secondary py-1 px-2" title="Pinjam" onclick="bukaModalAjukanPinjam('\${a.ID_Arsip}')">
                <i class="bi bi-box-arrow-in-right"></i>
              </button>
              <button class="btn btn-sm btn-outline-secondary py-1 px-2" title="QR Label" onclick="bukaModalCetakQR('\${a.ID_Arsip}')">
                <i class="bi bi-qr-code"></i>
              </button>
            </div>
          </td>
        </tr>
      \`;
    }).join('');

    renderPencarianPagination(totalPages, currentPage);
  } catch (err) {
    grid.innerHTML = '<div class="col-12 text-center text-danger py-4">Gagal memuat: ' + err.message + '</div>';
  }
}

function renderPencarianPagination(totalPages, currentPage) {
  const container = document.getElementById('pencarianPagination');
  if (!container || totalPages <= 1) {
    if (container) container.innerHTML = '';
    return;
  }

  let html = '<ul class="pagination pagination-sm mb-0">';
  html += '<li class="page-item ' + (currentPage === 1 ? 'disabled' : '') + '">';
  html += '  <a class="page-link" href="#" onclick="gantiHalamanPencarian(' + (currentPage - 1) + '); return false;">&laquo;</a>';
  html += '</li>';

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
      html += '<li class="page-item ' + (i === currentPage ? 'active' : '') + '">';
      html += '  <a class="page-link" href="#" onclick="gantiHalamanPencarian(' + i + '); return false;">' + i + '</a>';
      html += '</li>';
    } else if (i === currentPage - 3 || i === currentPage + 3) {
      html += '<li class="page-item disabled"><span class="page-link">...</span></li>';
    }
  }

  html += '<li class="page-item ' + (currentPage === totalPages ? 'disabled' : '') + '">';
  html += '  <a class="page-link" href="#" onclick="gantiHalamanPencarian(' + (currentPage + 1) + '); return false;">&raquo;</a>';
  html += '</li></ul>';

  container.innerHTML = html;
}

function gantiHalamanPencarian(page) {
  AppState.pencarianFilter.page = page;
  eksekusiPencarianPortal();
}


// ============================================================================
// WIDGET JAM DIGITAL REAL-TIME (WIB)
// ============================================================================
function initDigitalClock() {
  function updateClock() {
    const now = new Date();
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    const dayName = days[now.getDay()];
    const dateNum = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();

    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');

    const elTime = document.getElementById('digitalClockTime');
    const elDate = document.getElementById('digitalClockDate');
    if (elTime) elTime.textContent = hh + ':' + mm + ':' + ss + ' WIB';
    if (elDate) elDate.textContent = dayName + ', ' + dateNum + ' ' + monthName + ' ' + year;
  }
  updateClock();
  setInterval(updateClock, 1000);
}

// Mulai jam digital segera saat script dimuat
initDigitalClock();


// ============================================================================
// MODUL TATA NASKAH DINAS (TND)
// ============================================================================
AppState.tndList = [];
AppState.currentTNDItem = null;

function toRomanMonthClient(monthNum) {
  const romans = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
  const m = parseInt(monthNum, 10);
  return romans[m] || 'I';
}

function initTataNaskahView() {
  const today = new Date().toISOString().substring(0, 10);
  const inputTgl = document.getElementById('buatTNDTanggal');
  if (inputTgl && !inputTgl.value) {
    inputTgl.value = today;
  }
  updateTNDTemplatePreview();
  loadDaftarNaskah();
}

function switchTNDTab(tabName) {
  const tabs = ['agenda', 'buat', 'pedoman'];
  tabs.forEach(t => {
    const btn = document.getElementById(\`tab-tnd-\${t}-btn\`);
    const content = document.getElementById(\`tabContentTND\${t.charAt(0).toUpperCase() + t.slice(1)}\`);
    if (t === tabName) {
      if (btn) btn.classList.add('active');
      if (content) content.style.display = 'block';
    } else {
      if (btn) btn.classList.remove('active');
      if (content) content.style.display = 'none';
    }
  });

  if (tabName === 'agenda') {
    loadDaftarNaskah();
  } else if (tabName === 'buat') {
    updateTNDTemplatePreview();
  }
}

function updateTNDTemplatePreview() {
  const jenisVal = document.getElementById('buatTNDJenis') ? document.getElementById('buatTNDJenis').value : 'Nota Dinas|ND';
  const divisiVal = document.getElementById('buatTNDDivisi') ? document.getElementById('buatTNDDivisi').value : 'DIR';
  const tglVal = document.getElementById('buatTNDTanggal') ? document.getElementById('buatTNDTanggal').value : '';

  const [namaJenis, kodeJenis] = jenisVal.split('|');
  const d = tglVal ? new Date(tglVal) : new Date();
  const yyyy = d.getFullYear() || new Date().getFullYear();
  const mm = d.getMonth() + 1;
  const romanM = toRomanMonthClient(mm);

  const previewEl = document.getElementById('previewEstimasiNomor');
  if (previewEl) {
    previewEl.textContent = \`[No_Urut]/HIA-\${divisiVal}/\${kodeJenis}/\${romanM}/\${yyyy}\`;
  }

  // Pre-fill default template text if body is empty or matches another template
  const isiEl = document.getElementById('buatTNDIsi');
  if (isiEl && (!isiEl.value || isiEl.value.startsWith('Template'))) {
    if (kodeJenis === 'ND') {
      isiEl.value = \`1. Sehubungan dengan pelaksanaan operasional dan peningkatan tata kelola administrasi perusahaan, bersama ini kami sampaikan hal-hal sebagai berikut:\\n   a. Koordinasi berkas dokumen proyek dan kepatuhan arsip digital.\\n   b. Seluruh divisi diharapkan menyerahkan berkas laporan akhir tepat waktu.\\n\\n2. Berkenaan dengan hal tersebut di atas, mohon kerja sama seluruh unit kerja terkait untuk memedomani instruksi ini.\\n\\n3. Demikian nota dinas ini disampaikan untuk menjadi perhatian dan dilaksanakan sebagaimana mestinya.\`;
    } else if (kodeJenis === 'ST') {
      isiEl.value = \`DASAR PENUGASAN:\\n1. Rencana Kerja Operasional Proyek PT. Hanoco Interior Arsitektur Tahun 2026.\\n2. Surat Permohonan Klien terkait Pelaksanaan Survei Lapangan & Koordinasi Teknis.\\n\\nMEMERINTAHKAN KEPADA:\\nNama      : [Nama Personil]\\nJabatan   : [Jabatan / Spesialis]\\n\\nUNTUK:\\n1. Melaksanakan survei lapangan, verifikasi pengukuran dimensi, dan koordinasi dengan pengawas gedung.\\n2. Menyusun laporan hasil kunjungan lapangan maksimal 3 (tiga) hari kerja setelah tugas selesai.\\n\\nDemikian Surat Tugas ini dibuat untuk dilaksanakan dengan penuh tanggung jawab.\`;
    } else if (kodeJenis === 'BAST') {
      isiEl.value = \`Pada hari ini, tanggal [Tanggal], kami yang bertanda tangan di bawah ini:\\n1. PIHAK PERTAMA : PT. Hanoco Interior Arsitektur (selaku Penyedia Jasa Desain & Pelaksana)\\n2. PIHAK KEDUA   : [Nama Klien / Perusahaan] (selaku Pemberi Tugas)\\n\\nMenyatakan bahwa PIHAK PERTAMA telah menyelesaikan dan menyerahkan hasil pekerjaan berupa Dokumen Gambar Kerja (DED) / Hasil Pengerjaan Fisik Interior sesuai Surat Perjanjian Kerja.\\n\\nPIHAK KEDUA telah memeriksa dan menerima penyerahan pekerjaan tersebut dengan kondisi BAIK dan LENGKAP.\\n\\nDemikian Berita Acara Serah Terima ini dibuat dalam rangkap 2 (dua) bermaterai cukup untuk dipergunakan sebagaimana mestinya.\`;
    } else if (kodeJenis === 'SK') {
      isiEl.value = \`MENIMBANG:\\na. bahwa untuk kelancaran kegiatan operasional dan tertib kearsipan dokumen perusahaan, dipandang perlu menetapkan keputusan direksi;\\nb. bahwa yang namanya tercantum dalam lampiran keputusan ini dipandang cakap dan memenuhi syarat.\\n\\nMEMUTUSKAN:\\nMENETAPKAN : KEPUTUSAN DIREKSI TENTANG [HAL KEPUTUSAN]\\nKESATU     : Menetapkan dan mengesahkan kebijakan pelaksanaan...\\nKEDUA      : Keputusan ini mulai berlaku sejak tanggal ditetapkan.\`;
    } else {
      isiEl.value = \`Dengan hormat,\\n\\nSehubungan dengan surat Saudara nomor [...] tanggal [...], perihal [...], bersama ini kami sampaikan informasi sebagai berikut:\\n\\n[Tuliskan poin-poin penjelasan resmi perusahaan]\\n\\nDemikian surat ini kami sampaikan. Atas perhatian dan kerja sama yang baik, kami ucapkan terima kasih.\`;
    }
  }
}

async function loadDaftarNaskah() {
  if (!AppState.session) return;
  const tbody = document.getElementById('tableTNDBody');
  if (!tbody) return;

  tbody.innerHTML = '<tr><td colspan="7" class="text-center py-4"><span class="spinner-border spinner-border-sm me-2 text-navy"></span>Memuat buku agenda persuratan...</td></tr>';

  const filter = {
    keyword: document.getElementById('filterTNDKeyword') ? document.getElementById('filterTNDKeyword').value : '',
    kodeJenis: document.getElementById('filterTNDJenis') ? document.getElementById('filterTNDJenis').value : '',
    divisi: document.getElementById('filterTNDDivisi') ? document.getElementById('filterTNDDivisi').value : ''
  };

  try {
    const res = await callApi('apiGetDaftarNaskah', AppState.session.token, filter);
    if (!res.success) {
      tbody.innerHTML = \`<tr><td colspan="7" class="text-center text-danger py-4">\${res.message}</td></tr>\`;
      return;
    }

    const items = res.data;
    AppState.tndList = items;

    // Hitung Stat Metrik
    const total = items.length;
    const countND = items.filter(n => n.Kode_Jenis === 'ND').length;
    const countST = items.filter(n => n.Kode_Jenis === 'ST' || n.Kode_Jenis === 'SRT').length;
    const countBAST = items.filter(n => n.Kode_Jenis === 'BAST' || n.Kode_Jenis === 'SK').length;

    const elTot = document.getElementById('tndStatTotal'); if (elTot) elTot.textContent = total;
    const elND = document.getElementById('tndStatND'); if (elND) elND.textContent = countND;
    const elST = document.getElementById('tndStatST'); if (elST) elST.textContent = countST;
    const elBAST = document.getElementById('tndStatBAST'); if (elBAST) elBAST.textContent = countBAST;

    if (items.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted py-5">Belum ada naskah dinas yang terdaftar dalam agenda.</td></tr>';
      return;
    }

    tbody.innerHTML = items.map(n => {
      const isArchived = n.ID_Arsip_Terkait && n.ID_Arsip_Terkait !== '-';
      const statusBadge = isArchived
        ? \`<span class="badge bg-success-subtle text-success border border-success"><i class="bi bi-box-seam me-1"></i>Diarsipkan (\${n.ID_Arsip_Terkait})</span>\`
        : \`<span class="badge bg-primary-subtle text-primary border border-primary"><i class="bi bi-check-circle me-1"></i>Diterbitkan</span>\`;

      return \`
        <tr>
          <td>
            <div class="fw-bold text-navy font-monospace">\${escapeHtml(n.Nomor_Naskah)}</div>
            <small class="text-muted">ID: \${n.ID_Naskah}</small>
          </td>
          <td>
            <span class="badge bg-light text-dark border me-1">\${n.Kode_Jenis}</span>
            <span class="badge bg-secondary-subtle text-secondary">\${n.Divisi_Pembuat}</span>
            <div class="small text-muted mt-1">\${escapeHtml(n.Jenis_Naskah)}</div>
          </td>
          <td><small class="text-muted"><i class="bi bi-calendar-event me-1"></i>\${n.Tanggal_Naskah}</small></td>
          <td>
            <div class="fw-semibold text-truncate" style="max-width: 250px;" title="\${escapeHtml(n.Perihal)}">\${escapeHtml(n.Perihal)}</div>
            <small class="text-muted text-truncate d-block" style="max-width: 250px;">Yth: \${escapeHtml(n.Tujuan_Penerima)}</small>
          </td>
          <td><small>\${escapeHtml(n.Penandatangan)}</small></td>
          <td>\${statusBadge}</td>
          <td>
            <div class="btn-group btn-group-sm">
              <button class="btn btn-sm btn-outline-navy py-1 px-2" title="Pratinjau Kop Surat Resmi" onclick="bukaPratinjauNaskah('\${n.ID_Naskah}')">
                <i class="bi bi-file-earmark-text"></i> Pratinjau
              </button>
              <button class="btn btn-sm btn-outline-secondary py-1 px-2" title="Salin Nomor Naskah" onclick="salinNomorNaskah('\${escapeHtml(n.Nomor_Naskah)}')">
                <i class="bi bi-clipboard"></i>
              </button>
              \${!isArchived ? \`
                <button class="btn btn-sm btn-outline-success py-1 px-2" title="Daftarkan ke Arsip Digital" onclick="hubungkanNaskahLangsung('\${n.ID_Naskah}')">
                  <i class="bi bi-box-seam"></i>
                </button>
              \` : ''}
            </div>
          </td>
        </tr>
      \`;
    }).join('');

  } catch (err) {
    tbody.innerHTML = \`<tr><td colspan="7" class="text-center text-danger py-4">Gagal memuat: \${err.message}</td></tr>\`;
  }
}

function resetFilterTND() {
  const elKw = document.getElementById('filterTNDKeyword'); if (elKw) elKw.value = '';
  const elJn = document.getElementById('filterTNDJenis'); if (elJn) elJn.value = '';
  const elDv = document.getElementById('filterTNDDivisi'); if (elDv) elDv.value = '';
  loadDaftarNaskah();
}

// Handler Submit Form Buat Naskah Dinas Baru
document.addEventListener('submit', async (e) => {
  if (e.target && e.target.id === 'formBuatTND') {
    e.preventDefault();

    const jenisVal = document.getElementById('buatTNDJenis').value;
    const [namaJenis, kodeJenis] = jenisVal.split('|');

    const payload = {
      jenisNaskah: namaJenis,
      kodeJenis: kodeJenis,
      divisiPembuat: document.getElementById('buatTNDDivisi').value,
      tanggalNaskah: document.getElementById('buatTNDTanggal').value,
      perihal: document.getElementById('buatTNDPerihal').value.trim(),
      sifat: document.getElementById('buatTNDSifat').value,
      tujuanPenerima: document.getElementById('buatTNDPenerima').value.trim(),
      penandatangan: document.getElementById('buatTNDPenandatangan').value.trim(),
      lampiran: document.getElementById('buatTNDLampiran').value.trim(),
      tembusan: document.getElementById('buatTNDTembusan').value.trim(),
      isiRingkas: document.getElementById('buatTNDIsi').value.trim(),
      arsipkanLangsung: document.getElementById('buatTNDArsipOtomatis').checked
    };

    showLoading('Menerbitkan & menomori naskah dinas...');
    try {
      const res = await callApi('apiBuatNaskahDinas', AppState.session.token, payload);
      hideLoading();

      if (res.success) {
        Swal.fire({
          icon: 'success',
          title: 'Naskah Dinas Berhasil Diterbitkan',
          html: \`<p>Nomor Naskah Resmi Anda:</p><h4 class="text-navy font-monospace fw-bold">\${res.data.nomorNaskah}</h4>\` +
                (res.data.idArsip && res.data.idArsip !== '-' ? \`<small class="text-success"><i class="bi bi-check2-circle"></i> Otomatis terdaftar di Arsip Digital: <b>\${res.data.idArsip}</b></small>\` : ''),
          confirmButtonColor: '#0B1F3A',
          confirmButtonText: 'Buka Buku Agenda'
        }).then(() => {
          document.getElementById('formBuatTND').reset();
          switchTNDTab('agenda');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Gagal Menerbitkan',
          text: res.message,
          confirmButtonColor: '#0B1F3A'
        });
      }
    } catch (err) {
      hideLoading();
      showToast('error', err.message);
    }
  }
});

// Pratinjau Naskah Format Kop Surat Resmi PT. Hanoco
async function bukaPratinjauNaskah(idNaskah) {
  showLoading('Mempersiapkan pratinjau lembar naskah resmi...');
  try {
    const res = await callApi('apiGetDetailNaskah', AppState.session.token, idNaskah);
    hideLoading();
    if (!res.success) {
      showToast('error', res.message);
      return;
    }

    const n = res.data;
    AppState.currentTNDItem = n;

    // Header Format
    const judulNaskah = (n.Jenis_Naskah || 'NOTA DINAS').toUpperCase();
    document.getElementById('tndPreviewJudulNaskah').textContent = judulNaskah;
    document.getElementById('tndPreviewNomorNaskah').textContent = \`Nomor: \${n.Nomor_Naskah}\`;

    document.getElementById('tndPreviewTujuan').textContent = n.Tujuan_Penerima;
    document.getElementById('tndPreviewDari').textContent = \`\${n.Divisi_Pembuat} (\${n.Penandatangan})\`;
    document.getElementById('tndPreviewTanggal').textContent = n.Tanggal_Naskah;
    document.getElementById('tndPreviewSifat').textContent = n.Sifat;
    document.getElementById('tndPreviewLampiran').textContent = n.Lampiran && n.Lampiran !== '-' ? n.Lampiran : '-';
    document.getElementById('tndPreviewPerihal').textContent = n.Perihal;

    document.getElementById('tndPreviewIsi').textContent = n.Isi_Ringkas;

    document.getElementById('tndPreviewTtdKotaTgl').textContent = \`Jakarta, \${n.Tanggal_Naskah}\`;
    document.getElementById('tndPreviewTtdNama').textContent = n.Penandatangan;

    // Tembusan
    const tembusanContainer = document.getElementById('tndPreviewTembusanContainer');
    if (n.Tembusan && n.Tembusan !== '-') {
      tembusanContainer.style.display = 'block';
      document.getElementById('tndPreviewTembusan').textContent = n.Tembusan;
    } else {
      tembusanContainer.style.display = 'none';
    }

    // QR Verification Seal
    const qrData = JSON.stringify({
      no: n.Nomor_Naskah,
      hal: n.Perihal,
      tgl: n.Tanggal_Naskah,
      ttd: n.Penandatangan,
      auth: 'PT. Hanoco Interior Arsitektur TND Certified'
    });
    const qrUrl = \`https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=\${encodeURIComponent(qrData)}&choe=UTF-8\`;
    document.getElementById('tndPreviewQrSeal').src = qrUrl;

    // Tombol Arsipkan
    const btnArsip = document.getElementById('btnTNDHubungkanArsip');
    if (n.ID_Arsip_Terkait && n.ID_Arsip_Terkait !== '-') {
      btnArsip.disabled = true;
      btnArsip.innerHTML = \`<i class="bi bi-check2-all me-1"></i> Sudah Diarsipkan (\${n.ID_Arsip_Terkait})\`;
    } else {
      btnArsip.disabled = false;
      btnArsip.innerHTML = \`<i class="bi bi-box-seam me-1"></i> Daftarkan ke Arsip Digital\`;
    }

    const modal = new bootstrap.Modal(document.getElementById('modalPratinjauNaskahDinas'));
    modal.show();
  } catch (err) {
    hideLoading();
    showToast('error', err.message);
  }
}

function cetakNaskahDinasResmi() {
  const content = document.getElementById('lembarNaskahDinasResmi').innerHTML;
  const printArea = document.getElementById('printOnlyArea');
  printArea.innerHTML = \`
    <div style="padding: 15mm 20mm; font-family: 'Times New Roman', Times, serif; color: #000; line-height: 1.5; font-size: 11pt;">
      \${content}
    </div>
  \`;
  window.print();
}

function salinNomorNaskah(nomor) {
  navigator.clipboard.writeText(nomor).then(() => {
    showToast('success', \`Nomor '\${nomor}' berhasil disalin ke clipboard!\`);
  }).catch(() => {
    showToast('info', \`Nomor Naskah: \${nomor}\`);
  });
}

async function hubungkanNaskahTerbukaKeArsip() {
  if (!AppState.currentTNDItem) return;
  await hubungkanNaskahLangsung(AppState.currentTNDItem.ID_Naskah);
  bootstrap.Modal.getInstance(document.getElementById('modalPratinjauNaskahDinas')).hide();
}

async function hubungkanNaskahLangsung(idNaskah) {
  const confirmRes = await Swal.fire({
    title: 'Daftarkan ke Arsip Digital?',
    text: 'Naskah dinas resmi ini akan otomatis disimpan sebagai dokumen baru pada database kearsipan HANARSIP.',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#0B1F3A',
    confirmButtonText: 'Ya, Daftarkan'
  });

  if (confirmRes.isConfirmed) {
    showLoading('Menghubungkan ke database kearsipan...');
    try {
      const res = await callApi('apiHubungkanKeKearsipan', AppState.session.token, idNaskah);
      hideLoading();

      if (res.success) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil Diarsipkan',
          text: res.message,
          confirmButtonColor: '#0B1F3A'
        });
        loadDaftarNaskah();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Gagal',
          text: res.message,
          confirmButtonColor: '#0B1F3A'
        });
      }
    } catch (err) {
      hideLoading();
      showToast('error', err.message);
    }
  }
}

</script>

</body>
</html>
`;
}

function setupSistem() {
  console.log('Memulai inisialisasi otomatis sistem HANARSIP...');
  let ss;

  // 1. Dapatkan atau Buat Spreadsheet DB_HANARSIP
  try {
    ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) throw new Error('Standalone script');
  } catch (e) {
    const props = PropertiesService.getScriptProperties();
    const existingId = props.getProperty('SPREADSHEET_ID');
    if (existingId) {
      try {
        ss = SpreadsheetApp.openById(existingId);
      } catch (err) {}
    }

    if (!ss) {
      ss = SpreadsheetApp.create('DB_HANARSIP');
      props.setProperty('SPREADSHEET_ID', ss.getId());
      console.log('Spreadsheet DB_HANARSIP baru dibuat dengan ID: ' + ss.getId());
    }
  }

  // Warna Korporat Header Spreadsheet
  const NAVY_HEADER_BG = '#0B1F3A';
  const WHITE_TEXT = '#FFFFFF';

  // 2. Buat dan Format 6 Sheet
  const sheetNames = [
    CONFIG.SHEETS.ARSIP,
    CONFIG.SHEETS.PEMINJAMAN,
    CONFIG.SHEETS.USERS,
    CONFIG.SHEETS.LOG,
    CONFIG.SHEETS.KLASIFIKASI,
    CONFIG.SHEETS.PROYEK
  ];

  sheetNames.forEach(name => {
    let sheet = ss.getSheetByName(name);
    if (!sheet) {
      sheet = ss.insertSheet(name);
    }

    const headers = CONFIG.HEADERS[name];
    if (headers && headers.length > 0) {
      // Cek apakah header sudah ada
      const currentVal = sheet.getRange(1, 1, 1, Math.max(headers.length, 1)).getValues()[0];
      if (!currentVal[0] || currentVal[0] === '') {
        sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      }

      // Format Header Style
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground(NAVY_HEADER_BG);
      headerRange.setFontColor(WHITE_TEXT);
      headerRange.setFontWeight('bold');
      headerRange.setHorizontalAlignment('center');
      headerRange.setVerticalAlignment('middle');
      sheet.setRowHeight(1, 35);
      sheet.setFrozenRows(1);
    }
  });

  // Hapus 'Sheet1' bawaan Google Spreadsheet jika ada
  const defaultSheet = ss.getSheetByName('Sheet1') || ss.getSheetByName('Sheet 1');
  if (defaultSheet && ss.getSheets().length > 1) {
    try { ss.deleteSheet(defaultSheet); } catch (e) {}
  }

  // 3. Isi Data Awal Master_Klasifikasi
  const sheetKlas = ss.getSheetByName(CONFIG.SHEETS.KLASIFIKASI);
  if (sheetKlas.getLastRow() <= 1) {
    CONFIG.DEFAULT_KLASIFIKASI.forEach(k => {
      sheetKlas.appendRow([
        k.kode,
        k.nama,
        k.retensiAktif,
        k.retensiInaktif,
        k.nasibAkhir,
        k.akses,
        ''
      ]);
    });
    console.log('Data awal Master_Klasifikasi berhasil diisi.');
  }

  // 4. Isi Data Awal Master_Proyek
  const sheetProyek = ss.getSheetByName(CONFIG.SHEETS.PROYEK);
  if (sheetProyek.getLastRow() <= 1) {
    CONFIG.DEFAULT_PROYEK.forEach(p => {
      sheetProyek.appendRow([
        p.id,
        p.nama,
        p.klien,
        p.lokasi,
        p.layanan,
        p.tahun,
        p.status,
        p.pic,
        ''
      ]);
    });
    console.log('Data awal Master_Proyek berhasil diisi.');
  }

  // 5. Buat Akun Default Admin di Sheet Users
  const sheetUsers = ss.getSheetByName(CONFIG.SHEETS.USERS);
  const users = Util.sheetToObjects(sheetUsers);
  const defaultAdmin = CONFIG.SECURITY.DEFAULT_ADMIN;

  if (!users.some(u => String(u.Username).toLowerCase() === defaultAdmin.username.toLowerCase())) {
    const salt = Util.generateSalt(16);
    const hash = Util.hashPassword(defaultAdmin.defaultPassword, salt);
    sheetUsers.appendRow([
      defaultAdmin.username,
      defaultAdmin.namaLengkap,
      defaultAdmin.email,
      defaultAdmin.divisi,
      defaultAdmin.role,
      hash,
      salt,
      'Aktif',
      0,
      '',
      false
    ]);
    console.log(`Akun Admin dibuat: username '${defaultAdmin.username}', password '${defaultAdmin.defaultPassword}'`);
  }

  // 6. Buat Struktur Folder Google Drive
  const rootFolder = DriveService.getRootFolder();
  const backupFolder = DriveService.getBackupFolder();
  console.log(`Folder Google Drive siap: ${rootFolder.getName()} (${rootFolder.getId()})`);

  // 7. Pasang Trigger Terjadwal
  try {
    NotifikasiService.pasangTriggerOtomatis();
  } catch (e) {
    console.warn('Peringatan saat memasang trigger otomatis: ' + e.message);
  }

  // Catat log setup sistem
  // Inisialisasi Sheet Tata Naskah Dinas
  try {
    const sheetTND = TNDService.getSheetTND();
    if (sheetTND.getLastRow() <= 1) {
      sheetTND.appendRow([
        'TND-2026-0001', '001/HIA-DIR/ND/XI/2026', 'Nota Dinas', 'ND', 'DIR',
        '2026-11-20', 'Kebijakan Pengelolaan Tata Naskah & Digitalisasi Arsip HANARSIP',
        'Seluruh Kepala Divisi & Unit Kerja', 'Ir. Hendra Gunawan (Direktur Utama)', 'Biasa',
        'Dalam rangka tertib administrasi persuratan dan peningkatan efisiensi kearsipan digital, seluruh unit kerja diwajibkan menggunakan sistem HANARSIP untuk penomoran naskah dinas dan penyimpanan arsip proyek.',
        '-', 'Dewan Komisaris', 'Diarsipkan', 'HIA/KOR/2026/0003', 'admin', '2026-11-20 08:30:00'
      ]);
      sheetTND.appendRow([
        'TND-2026-0002', '004/HIA-PRY/ST/XI/2026', 'Surat Tugas', 'ST', 'PRY',
        '2026-11-21', 'Penugasan Survei Lapangan & Koordinasi Proyek Villa Canggu Bali',
        'Budi Santoso, S.Ars (Lead Architect)', 'Ir. Hendra Gunawan (Direktur Utama)', 'Penting',
        'Memberikan penugasan kepada yang bersangkutan untuk melaksanakan survei lapangan, pengecekan kontur lahan, dan koordinasi teknis izin DED arsitektur Proyek Villa Canggu di Kuta Utara, Bali selama 3 hari kerja.',
        '1 Berkas TOR', 'Bagian Keuangan (Perjalanan Dinas)', 'Diterbitkan', '-', 'admin', '2026-11-21 09:15:00'
      ]);
      sheetTND.appendRow([
        'TND-2026-0003', '002/HIA-PRY/BAST/XI/2026', 'Berita Acara', 'BAST', 'PRY',
        '2026-11-22', 'Berita Acara Serah Terima (BAST) Fit-Out Butik Hanoco Plaza Surabaya',
        'Hanoco Retail Group', 'David Lee, S.T. (Project Manager)', 'Penting',
        'Telah dilaksanakan serah terima hasil pekerjaan Build & Fit-Out Butik Premium lantai 2 Hanoco Plaza dengan kondisi baik, lengkap, dan memenuhi standar spesifikasi teknis arsitektur.',
        'Lampiran Checklist Fisik', 'Direksi', 'Diarsipkan', 'HIA/PRY/2026/0001', 'admin', '2026-11-22 14:00:00'
      ]);
    }
  } catch(eTnd) {
    console.warn('Inisialisasi TND: ' + eTnd.message);
  }

  Util.catatLog('SYSTEM_SETUP', 'Admin', 'SETUP_SISTEM', 'SISTEM', ss.getId(), 'Inisialisasi sistem HANARSIP sukses', 'SUKSES');

  return {
    success: true,
    message: 'Inisialisasi sistem HANARSIP berhasil selesai!',
    spreadsheetId: ss.getId(),
    spreadsheetUrl: ss.getUrl(),
    rootFolderId: rootFolder.getId(),
    adminCredentials: {
      username: defaultAdmin.username,
      defaultPassword: defaultAdmin.defaultPassword
    }
  };
}

/**
 * ============================================================================
 * SERVER-SIDE API DISPATCHERS (DIPANGGIL DARI FRONTEND JS)
 * ============================================================================
 */

function apiLogin(username, password) {
  return Auth.login(username, password);
}

function apiLogout(token) {
  return Auth.logout(token);
}

function apiGetProfil(token) {
  return Auth.getProfil(token);
}

function apiGantiPassword(token, passwordLama, passwordBaru) {
  return Auth.gantiPassword(token, passwordLama, passwordBaru);
}

function apiGetDashboardStats(token) {
  return LaporanService.getDashboardStats(token);
}

function apiCariArsip(token, params) {
  return ArsipService.cariArsip(token, params);
}

function apiGetDetailArsip(token, idArsip) {
  return ArsipService.getDetailArsip(token, idArsip);
}

function apiTambahArsip(token, payload) {
  return ArsipService.tambahArsip(token, payload);
}

function apiUbahArsip(token, payload) {
  return ArsipService.ubahArsip(token, payload);
}

function apiSoftDeleteArsip(token, idArsip) {
  return ArsipService.softDeleteArsip(token, idArsip);
}

function apiPulihkanArsip(token, idArsip) {
  return ArsipService.pulihkanArsip(token, idArsip);
}

function apiHapusPermanenArsip(token, idArsip) {
  return ArsipService.hapusPermanenArsip(token, idArsip);
}

function apiGetLabelCetak(token, idArsip) {
  return ArsipService.getLabelCetak(token, idArsip);
}

function apiGetMasterData(token) {
  Auth.validateSession(token);
  return Util.buildResponse(true, {
    klasifikasi: ArsipService.getMasterKlasifikasi(),
    proyek: ArsipService.getMasterProyek()
  }, 'Master data berhasil dimuat.');
}

function apiSimpanMasterKlasifikasi(token, data) {
  return ArsipService.simpanMasterKlasifikasi(token, data);
}

function apiSimpanMasterProyek(token, data) {
  return ArsipService.simpanMasterProyek(token, data);
}

function apiAjukanPeminjaman(token, payload) {
  return PeminjamanService.ajukanPeminjaman(token, payload);
}

function apiProsesPersetujuanPinjam(token, idPinjam, aksi, catatan) {
  return PeminjamanService.prosesPersetujuan(token, idPinjam, aksi, catatan);
}

function apiSerahFisikPinjam(token, idPinjam) {
  return PeminjamanService.serahFisikArsip(token, idPinjam);
}

function apiProsesPengembalian(token, idPinjam, kondisi, catatan) {
  return PeminjamanService.prosesPengembalian(token, idPinjam, kondisi, catatan);
}

function apiGetDaftarPeminjaman(token, params) {
  return PeminjamanService.getDaftarPeminjaman(token, params);
}

function apiGetLaporanRekap(token, filter) {
  return LaporanService.getLaporanRekap(token, filter);
}

function apiGetLogAktivitas(token, limit) {
  return LaporanService.getLogAktivitas(token, limit);
}

function apiGetSemuaPengguna(token) {
  return Auth.getSemuaPengguna(token);
}

function apiTambahPengguna(token, userData) {
  return Auth.tambahPengguna(token, userData);
}

function apiUbahPengguna(token, userData) {
  return Auth.ubahPengguna(token, userData);
}

function apiResetPasswordUser(token, username, newPass) {
  return Auth.resetPasswordOlehAdmin(token, username, newPass);
}

function apiBackupManual(token) {
  Auth.cekHak(token, [CONFIG.ROLES.ADMIN]);
  const fileId = DriveService.lakukanBackupDatabase();
  Util.catatLog('ADMIN', 'Admin', 'BACKUP_MANUAL', 'SISTEM', fileId, 'Backup database manual oleh Admin', 'SUKSES');
  return Util.buildResponse(true, { fileId: fileId }, 'Backup database berhasil disimpan ke Google Drive.');
}

function apiGetDaftarNaskah(token, filter) {
  return TNDService.getDaftarNaskah(token, filter);
}

function apiBuatNaskahDinas(token, payload) {
  return TNDService.buatNaskahDinas(token, payload);
}

function apiGetDetailNaskah(token, idNaskah) {
  return TNDService.getDetailNaskah(token, idNaskah);
}

function apiHubungkanKeKearsipan(token, idNaskah) {
  return TNDService.hubungkanKeKearsipan(token, idNaskah);
}


// ==================== FILE: Config.gs ====================

/**
 * ============================================================================
 * HANARSIP (Hanoco Arsip) - Sistem Kearsipan Digital PT. Hanoco Interior Arsitektur
 * File: Config.gs
 * Deskripsi: Konfigurasi global sistem, konstanta, skema database, & hak akses
 * ============================================================================
 */

const CONFIG = {
  APP_NAME: 'HANARSIP',
  APP_LONG_NAME: 'Hanoco Arsip Digital',
  COMPANY_NAME: 'PT. Hanoco Interior Arsitektur',
  VERSION: '1.0.0',
  TIMEZONE: 'Asia/Jakarta',

  // Nama Sheet Database
  SHEETS: {
    ARSIP: 'Arsip',
    PEMINJAMAN: 'Peminjaman',
    USERS: 'Users',
    LOG: 'Log_Aktivitas',
    KLASIFIKASI: 'Master_Klasifikasi',
    PROYEK: 'Master_Proyek'
  },

  // Skema Header Tiap Sheet
  HEADERS: {
    Arsip: [
      'ID_Arsip', 'Jenis_Arsip', 'Kode_Klasifikasi', 'Nomor_Dokumen', 'Tanggal_Dokumen',
      'Judul_Perihal', 'Pihak_Terkait', 'ID_Proyek', 'Lokasi_Fisik', 'Tautan_File',
      'ID_File_Drive', 'Tingkat_Akses', 'Status_Arsip', 'Tanggal_Retensi', 'Diinput_Oleh',
      'Waktu_Input', 'Waktu_Ubah', 'Is_Deleted'
    ],
    Peminjaman: [
      'ID_Pinjam', 'ID_Arsip', 'Username_Peminjam', 'Jenis_Pinjam', 'Keperluan',
      'Tanggal_Pengajuan', 'Tanggal_Rencana_Kembali', 'Status_Pinjam', 'Diproses_Oleh',
      'Tanggal_Keluar', 'Tanggal_Kembali', 'Kondisi_Kembali', 'Catatan'
    ],
    Users: [
      'Username', 'Nama_Lengkap', 'Email', 'Divisi', 'Role',
      'Password_Hash', 'Salt', 'Status_Akun', 'Gagal_Login', 'Login_Terakhir',
      'Wajib_Ganti_Password'
    ],
    Log_Aktivitas: [
      'ID_Log', 'Waktu', 'Username', 'Role', 'Aksi', 'Modul', 'ID_Objek', 'Detail', 'Hasil'
    ],
    Master_Klasifikasi: [
      'Kode_Klasifikasi', 'Nama_Klasifikasi', 'Retensi_Aktif_Tahun', 'Retensi_Inaktif_Tahun',
      'Nasib_Akhir', 'Akses_Bawaan', 'ID_Folder_Drive'
    ],
    Master_Proyek: [
      'ID_Proyek', 'Nama_Proyek', 'Klien', 'Lokasi', 'Jenis_Layanan',
      'Tahun', 'Status_Proyek', 'PIC', 'ID_Folder_Drive'
    ]
  },

  // Konfigurasi Keamanan & Sesi
  SECURITY: {
    SESSION_DURATION_HOURS: 6,
    SESSION_CACHE_TTL_SEC: 21600, // 6 jam = 21600 detik (maksimal CacheService)
    MAX_FAILED_LOGIN: 5,
    LOCKOUT_DURATION_MINUTES: 15,
    LOCKOUT_CACHE_TTL_SEC: 900,   // 15 menit
    DEFAULT_ADMIN: {
      username: 'admin',
      namaLengkap: 'Administrator HANARSIP',
      email: 'admin@hanoco.co.id',
      divisi: 'Teknologi Informasi & Kearsipan',
      role: 'Admin',
      defaultPassword: 'Admin#Hanoco2026!'
    }
  },

  // Role Pengguna
  ROLES: {
    ADMIN: 'Admin',
    PETUGAS: 'Petugas',
    PEMINJAM: 'Peminjam',
    PIMPINAN: 'Pimpinan'
  },

  // Tingkat Akses Arsip
  ACCESS_LEVELS: {
    UMUM: 'Umum',
    TERBATAS: 'Terbatas',
    RAHASIA: 'Rahasia'
  },

  // Status Arsip
  ARCHIVE_STATUS: {
    AKTIF: 'Aktif',
    INAKTIF: 'Inaktif',
    MUSNAH: 'Musnah',
    PERMANEN: 'Permanen'
  },

  // Status Peminjaman
  LOAN_STATUS: {
    MENUNGGU: 'Menunggu Persetujuan',
    DISETUJUI: 'Disetujui',
    DITOLAK: 'Ditolak',
    DIPINJAM: 'Dipinjam',
    SELESAI: 'Selesai',
    TERLAMBAT: 'Terlambat'
  },

  // Google Drive Storage Folder
  STORAGE: {
    ROOT_FOLDER_NAME: 'HANARSIP_STORAGE',
    BACKUP_FOLDER_NAME: 'Backup_DB',
    ARCHIVE_SUBDIR: 'Arsip',
    MAX_FILE_SIZE_BYTES: 20 * 1024 * 1024, // 20 MB
    ALLOWED_EXTENSIONS: ['pdf', 'jpg', 'jpeg', 'png', 'docx', 'xlsx']
  },

  // Data Klasifikasi Bawaan (Default Seed)
  DEFAULT_KLASIFIKASI: [
    {
      kode: 'KOR',
      nama: 'Korespondensi & Administrasi Umum',
      retensiAktif: 2,
      retensiInaktif: 3,
      nasibAkhir: 'Musnah',
      akses: 'Umum'
    },
    {
      kode: 'PRY',
      nama: 'Proyek Desain & Arsitektur',
      retensiAktif: 5,
      retensiInaktif: 10,
      nasibAkhir: 'Permanen',
      akses: 'Terbatas'
    },
    {
      kode: 'KEU',
      nama: 'Keuangan & Perpajakan',
      retensiAktif: 5,
      retensiInaktif: 5,
      nasibAkhir: 'Musnah',
      akses: 'Rahasia'
    },
    {
      kode: 'SDM',
      nama: 'Sumber Daya Manusia & Personalia',
      retensiAktif: 3,
      retensiInaktif: 5,
      nasibAkhir: 'Dinilai Kembali',
      akses: 'Terbatas'
    },
    {
      kode: 'AST',
      nama: 'Aset, Sarana & Inventaris',
      retensiAktif: 5,
      retensiInaktif: 5,
      nasibAkhir: 'Permanen',
      akses: 'Terbatas'
    },
    {
      kode: 'LGL',
      nama: 'Legalitas, Kontrak & Perizinan',
      retensiAktif: 10,
      retensiInaktif: 15,
      nasibAkhir: 'Permanen',
      akses: 'Rahasia'
    }
  ],

  // Data Proyek Bawaan (Default Seed)
  DEFAULT_PROYEK: [
    {
      id: 'PRY-2026-001',
      nama: 'Renovasi Interior Kantor Pusat PT Mega Persada',
      klien: 'PT Mega Persada Nusantara',
      lokasi: 'TB Simatupang, Jakarta Selatan',
      layanan: 'Interior Design & Build',
      tahun: 2026,
      status: 'Pengerjaan',
      pic: 'Budi Santoso, S.Ars'
    },
    {
      id: 'PRY-2026-002',
      nama: 'Desain Arsitektur Modern Villa Canggu',
      klien: 'Bpk. Hendra Gunawan',
      lokasi: 'Canggu, Kuta Utara, Bali',
      layanan: 'Architecture',
      tahun: 2026,
      status: 'Perencanaan',
      pic: 'Sarah Wijaya, M.Ars'
    },
    {
      id: 'PRY-2025-015',
      nama: 'Fit-Out Butik Premium Hanoco Plaza',
      klien: 'Hanoco Retail Group',
      lokasi: 'Tunjungan Plaza, Surabaya',
      layanan: 'Build & Fit-Out',
      tahun: 2025,
      status: 'Selesai',
      pic: 'David Lee, S.T.'
    }
  ]
};

/**
 * Mendapatkan Spreadsheet aktif (mendukung standalone maupun bound script)
 * @returns {GoogleAppsScript.Spreadsheet.Spreadsheet}
 */
function getSpreadsheet() {
  const props = PropertiesService.getScriptProperties();
  const idFromProps = props.getProperty('SPREADSHEET_ID');
  
  if (idFromProps) {
    try {
      return SpreadsheetApp.openById(idFromProps);
    } catch (e) {
      console.warn('Gagal membuka spreadsheet via SPREADSHEET_ID properti: ' + e.message);
    }
  }
  
  try {
    const active = SpreadsheetApp.getActiveSpreadsheet();
    if (active) return active;
  } catch (e) {
    // Abaikan jika standalone
  }

  throw new Error('Spreadsheet DB_HANARSIP tidak ditemukan. Pastikan SPREADSHEET_ID sudah diset atau jalankan setupSistem().');
}

/**
 * Mendapatkan sheet berdasarkan nama
 * @param {string} sheetName 
 * @returns {GoogleAppsScript.Spreadsheet.Sheet}
 */
function getSheet(sheetName) {
  const ss = getSpreadsheet();
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    throw new Error(`Sheet '${sheetName}' tidak ditemukan di spreadsheet.`);
  }
  return sheet;
}


// ==================== FILE: Util.gs ====================

/**
 * ============================================================================
 * HANARSIP (Hanoco Arsip) - Sistem Kearsipan Digital PT. Hanoco Interior Arsitektur
 * File: Util.gs
 * Deskripsi: Fungsi bantuan (helper), kriptografi, formatting, dan log audit trail
 * ============================================================================
 */

const Util = {
  /**
   * Format tanggal ke string dengan zona waktu Asia/Jakarta
   * @param {Date|string} date 
   * @param {string} format Contoh: 'yyyy-MM-dd HH:mm:ss' atau 'yyyy-MM-dd'
   * @returns {string}
   */
  formatDate(date, format = 'yyyy-MM-dd HH:mm:ss') {
    if (!date) return '';
    const d = (date instanceof Date) ? date : new Date(date);
    if (isNaN(d.getTime())) return '';
    return Utilities.formatDate(d, CONFIG.TIMEZONE, format);
  },

  /**
   * Mendapatkan string tanggal hari ini (yyyy-MM-dd)
   */
  todayString() {
    return this.formatDate(new Date(), 'yyyy-MM-dd');
  },

  /**
   * Mendapatkan timestamp saat ini (yyyy-MM-dd HH:mm:ss)
   */
  nowTimestamp() {
    return this.formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss');
  },

  /**
   * Membuat Salt acak untuk hashing password
   * @param {number} length 
   * @returns {string}
   */
  generateSalt(length = 16) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
    let salt = '';
    for (let i = 0; i < length; i++) {
      salt += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return salt;
  },

  /**
   * Melakukan hashing SHA-256 pada kombinasi password + salt
   * @param {string} password 
   * @param {string} salt 
   * @returns {string} Hex string hash
   */
  hashPassword(password, salt) {
    if (!password) return '';
    const combined = password + (salt || '');
    const digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, combined, Utilities.Charset.UTF_8);
    return digest.map(byte => {
      const v = (byte < 0 ? byte + 256 : byte).toString(16);
      return v.length === 1 ? '0' + v : v;
    }).join('');
  },

  /**
   * Membuat token unik / UUID
   * @returns {string}
   */
  generateToken() {
    return Utilities.getUuid();
  },

  /**
   * Membuat respon JSON standar untuk frontend
   * @param {boolean} success 
   * @param {*} data 
   * @param {string} message 
   * @returns {Object}
   */
  buildResponse(success, data = null, message = '') {
    return {
      success: !!success,
      data: data,
      message: message,
      timestamp: this.nowTimestamp()
    };
  },

  /**
   * Menghitung Tanggal Retensi Arsip berdasarkan Tanggal Dokumen + Retensi Aktif + Inaktif
   * @param {string|Date} tanggalDokumen 
   * @param {number} tahunAktif 
   * @param {number} tahunInaktif 
   * @returns {string} Format: yyyy-MM-dd
   */
  hitungTanggalRetensi(tanggalDokumen, tahunAktif = 0, tahunInaktif = 0) {
    if (!tanggalDokumen) return '';
    const d = (tanggalDokumen instanceof Date) ? new Date(tanggalDokumen.getTime()) : new Date(tanggalDokumen);
    if (isNaN(d.getTime())) return '';
    const totalTahun = Number(tahunAktif || 0) + Number(tahunInaktif || 0);
    d.setFullYear(d.getFullYear() + totalTahun);
    return this.formatDate(d, 'yyyy-MM-dd');
  },

  /**
   * Mengonversi isi sheet menjadi array of object berdasarkan baris header
   * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet 
   * @returns {Array<Object>}
   */
  sheetToObjects(sheet) {
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) return [];
    
    const headers = data[0].map(h => String(h).trim());
    const rows = data.slice(1);
    
    return rows.map((row, rowIndex) => {
      const obj = { _rowIndex: rowIndex + 2 }; // baris ke-1 adalah header
      headers.forEach((header, colIndex) => {
        let val = row[colIndex];
        if (val instanceof Date) {
          // Normalisasi tanggal
          val = Utilities.formatDate(val, CONFIG.TIMEZONE, 'yyyy-MM-dd HH:mm:ss').replace(' 00:00:00', '');
        }
        obj[header] = val;
      });
      return obj;
    });
  },

  /**
   * Mengonversi objek menjadi array nilai yang urutannya sesuai header sheet
   * @param {Object} obj 
   * @param {Array<string>} headers 
   * @returns {Array}
   */
  objectToRow(obj, headers) {
    return headers.map(header => {
      const val = obj[header];
      return (val !== undefined && val !== null) ? val : '';
    });
  },

  /**
   * Menulis catatan audit trail ke sheet Log_Aktivitas
   * @param {string} username 
   * @param {string} role 
   * @param {string} aksi 
   * @param {string} modul 
   * @param {string} idObjek 
   * @param {string} detail 
   * @param {string} hasil 
   */
  catatLog(username, role, aksi, modul, idObjek, detail, hasil = 'SUKSES') {
    try {
      const sheet = getSheet(CONFIG.SHEETS.LOG);
      const logId = 'LOG-' + Utilities.formatDate(new Date(), CONFIG.TIMEZONE, 'yyyyMMdd-HHmmss') + '-' + Math.floor(1000 + Math.random() * 9000);
      const waktu = this.nowTimestamp();
      sheet.appendRow([
        logId,
        waktu,
        username || 'ANONIM',
        role || '-',
        aksi || '-',
        modul || '-',
        idObjek || '-',
        typeof detail === 'object' ? JSON.stringify(detail) : String(detail || '-'),
        hasil || 'SUKSES'
      ]);
    } catch (e) {
      console.error('Gagal mencatat log aktivitas: ' + e.message);
    }
  },

  /**
   * Membantu mendapatkan script lock untuk operasi atomik
   * @param {number} timeoutMs 
   * @returns {GoogleAppsScript.Lock.Lock}
   */
  getLock(timeoutMs = 15000) {
    const lock = LockService.getScriptLock();
    lock.waitLock(timeoutMs);
    return lock;
  }
};


// ==================== FILE: Auth.gs ====================

/**
 * ============================================================================
 * HANARSIP (Hanoco Arsip) - Sistem Kearsipan Digital PT. Hanoco Interior Arsitektur
 * File: Auth.gs
 * Deskripsi: Autentikasi multi-peran, manajemen sesi (CacheService), proteksi akun,
 *            dan kontrol hak akses (RBAC) sisi server.
 * ============================================================================
 */

const Auth = {
  /**
   * Login pengguna ke sistem
   * @param {string} username 
   * @param {string} password 
   * @returns {Object} Respon standar dengan token sesi dan info pengguna
   */
  login(username, password) {
    if (!username || !password) {
      return Util.buildResponse(false, null, 'Username dan password wajib diisi.');
    }

    username = String(username).trim();
    const lock = Util.getLock();

    try {
      const sheet = getSheet(CONFIG.SHEETS.USERS);
      const users = Util.sheetToObjects(sheet);
      const user = users.find(u => String(u.Username).toLowerCase() === username.toLowerCase());

      if (!user) {
        Util.catatLog(username, '-', 'LOGIN', 'AUTH', '-', 'Username tidak ditemukan', 'GAGAL');
        return Util.buildResponse(false, null, 'Username atau password salah.');
      }

      const rowIndex = user._rowIndex;

      // Cek apakah akun dinonaktifkan
      if (user.Status_Akun === 'Dinonaktifkan') {
        Util.catatLog(username, user.Role, 'LOGIN', 'AUTH', username, 'Upaya login ke akun dinonaktifkan', 'GAGAL');
        return Util.buildResponse(false, null, 'Akun Anda telah dinonaktifkan oleh Administrator.');
      }

      // Cek apakah akun terkunci karena gagal login
      const cache = CacheService.getScriptCache();
      const lockKey = `LOCKOUT_${user.Username}`;
      const isLockedInCache = cache.get(lockKey);

      if (user.Status_Akun === 'Terkunci' || isLockedInCache) {
        if (isLockedInCache) {
          Util.catatLog(username, user.Role, 'LOGIN', 'AUTH', username, 'Akun terkunci sementara', 'GAGAL');
          return Util.buildResponse(false, null, `Akun Anda terkunci sementara karena 5x salah password. Silakan coba lagi setelah ${CONFIG.SECURITY.LOCKOUT_DURATION_MINUTES} menit.`);
        } else {
          // Durasi 15 menit sudah lewat, buka kunci otomatis
          sheet.getRange(rowIndex, CONFIG.HEADERS.Users.indexOf('Status_Akun') + 1).setValue('Aktif');
          sheet.getRange(rowIndex, CONFIG.HEADERS.Users.indexOf('Gagal_Login') + 1).setValue(0);
          user.Status_Akun = 'Aktif';
          user.Gagal_Login = 0;
        }
      }

      // Verifikasi Hash Password + Salt
      const inputHash = Util.hashPassword(password, user.Salt);
      if (inputHash !== user.Password_Hash) {
        const gagalBaru = Number(user.Gagal_Login || 0) + 1;
        sheet.getRange(rowIndex, CONFIG.HEADERS.Users.indexOf('Gagal_Login') + 1).setValue(gagalBaru);

        if (gagalBaru >= CONFIG.SECURITY.MAX_FAILED_LOGIN) {
          sheet.getRange(rowIndex, CONFIG.HEADERS.Users.indexOf('Status_Akun') + 1).setValue('Terkunci');
          cache.put(lockKey, 'LOCKED', CONFIG.SECURITY.LOCKOUT_CACHE_TTL_SEC);
          Util.catatLog(username, user.Role, 'LOCKOUT', 'AUTH', username, 'Akun terkunci otomatis setelah 5x gagal', 'GAGAL');
          return Util.buildResponse(false, null, `Akun Anda telah dikunci karena 5 kali berturut-turut salah password. Coba kembali dalam ${CONFIG.SECURITY.LOCKOUT_DURATION_MINUTES} menit.`);
        }

        const sisaPercobaan = CONFIG.SECURITY.MAX_FAILED_LOGIN - gagalBaru;
        Util.catatLog(username, user.Role, 'LOGIN', 'AUTH', username, `Password salah (percobaan ${gagalBaru})`, 'GAGAL');
        return Util.buildResponse(false, null, `Username atau password salah. Sisa percobaan: ${sisaPercobaan}`);
      }

      // Login Berhasil -> Reset gagal login & perbarui login terakhir
      const nowStr = Util.nowTimestamp();
      sheet.getRange(rowIndex, CONFIG.HEADERS.Users.indexOf('Gagal_Login') + 1).setValue(0);
      sheet.getRange(rowIndex, CONFIG.HEADERS.Users.indexOf('Login_Terakhir') + 1).setValue(nowStr);

      // Buat token sesi dan simpan ke CacheService (6 jam)
      const token = Util.generateToken();
      const sessionData = {
        token: token,
        username: user.Username,
        namaLengkap: user.Nama_Lengkap,
        email: user.Email,
        divisi: user.Divisi,
        role: user.Role,
        wajibGantiPassword: String(user.Wajib_Ganti_Password).toUpperCase() === 'TRUE',
        loginAt: nowStr
      };

      cache.put(`SESSION_${token}`, JSON.stringify(sessionData), CONFIG.SECURITY.SESSION_CACHE_TTL_SEC);
      Util.catatLog(user.Username, user.Role, 'LOGIN', 'AUTH', user.Username, 'Login berhasil', 'SUKSES');

      return Util.buildResponse(true, sessionData, 'Login berhasil.');
    } catch (e) {
      console.error('Error saat login: ' + e.message);
      return Util.buildResponse(false, null, 'Terjadi kesalahan sistem saat login: ' + e.message);
    } finally {
      lock.releaseLock();
    }
  },

  /**
   * Logout pengguna dan hapus sesi
   * @param {string} token 
   * @returns {Object}
   */
  logout(token) {
    if (!token) return Util.buildResponse(true, null, 'Sesi telah berakhir.');
    const cache = CacheService.getScriptCache();
    const sessionRaw = cache.get(`SESSION_${token}`);
    if (sessionRaw) {
      try {
        const session = JSON.parse(sessionRaw);
        Util.catatLog(session.username, session.role, 'LOGOUT', 'AUTH', session.username, 'Logout sistem', 'SUKSES');
      } catch (e) {}
      cache.remove(`SESSION_${token}`);
    }
    return Util.buildResponse(true, null, 'Logout berhasil.');
  },

  /**
   * Validasi token sesi pengguna
   * @param {string} token 
   * @returns {Object} Session data
   * @throws {Error} Jika sesi tidak valid atau kedaluwarsa
   */
  validateSession(token) {
    if (!token) {
      throw new Error('Sesi tidak ditemukan. Silakan login kembali.');
    }
    const cache = CacheService.getScriptCache();
    const sessionRaw = cache.get(`SESSION_${token}`);
    if (!sessionRaw) {
      throw new Error('Sesi Anda telah kedaluwarsa atau tidak valid. Silakan login kembali.');
    }
    return JSON.parse(sessionRaw);
  },

  /**
   * Pengecekan Hak Akses Server-Side (RBAC)
   * @param {string} token 
   * @param {Array<string>} allowedRoles Contoh: ['Admin', 'Petugas']
   * @returns {Object} User session object
   */
  cekHak(token, allowedRoles = []) {
    const user = this.validateSession(token);
    if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
      Util.catatLog(user.username, user.role, 'AKSES_ILEGAL', 'SECURITY', '-', `Upaya akses fungsi tanpa izin role: ${user.role}`, 'GAGAL');
      throw new Error(`Akses ditolak: Role '${user.role}' tidak memiliki wewenang untuk modul ini.`);
    }
    return user;
  },

  /**
   * Ganti password pengguna yang sedang login
   * @param {string} token 
   * @param {string} passwordLama 
   * @param {string} passwordBaru 
   * @returns {Object}
   */
  gantiPassword(token, passwordLama, passwordBaru) {
    const userSession = this.validateSession(token);
    if (!passwordBaru || passwordBaru.length < 8) {
      return Util.buildResponse(false, null, 'Password baru minimal harus 8 karakter.');
    }

    const lock = Util.getLock();
    try {
      const sheet = getSheet(CONFIG.SHEETS.USERS);
      const users = Util.sheetToObjects(sheet);
      const user = users.find(u => u.Username === userSession.username);

      if (!user) {
        return Util.buildResponse(false, null, 'Data pengguna tidak ditemukan.');
      }

      // Verifikasi password lama jika bukan reset paksa admin
      if (passwordLama) {
        const hashLama = Util.hashPassword(passwordLama, user.Salt);
        if (hashLama !== user.Password_Hash) {
          return Util.buildResponse(false, null, 'Password saat ini tidak sesuai.');
        }
      }

      // Generate salt dan hash baru
      const saltBaru = Util.generateSalt(16);
      const hashBaru = Util.hashPassword(passwordBaru, saltBaru);
      const rowIndex = user._rowIndex;

      sheet.getRange(rowIndex, CONFIG.HEADERS.Users.indexOf('Password_Hash') + 1).setValue(hashBaru);
      sheet.getRange(rowIndex, CONFIG.HEADERS.Users.indexOf('Salt') + 1).setValue(saltBaru);
      sheet.getRange(rowIndex, CONFIG.HEADERS.Users.indexOf('Wajib_Ganti_Password') + 1).setValue(false);

      // Perbarui sesi cache
      userSession.wajibGantiPassword = false;
      CacheService.getScriptCache().put(`SESSION_${token}`, JSON.stringify(userSession), CONFIG.SECURITY.SESSION_CACHE_TTL_SEC);

      Util.catatLog(userSession.username, userSession.role, 'GANTI_PASSWORD', 'AUTH', userSession.username, 'Password berhasil diperbarui', 'SUKSES');
      return Util.buildResponse(true, null, 'Password berhasil diperbarui.');
    } finally {
      lock.releaseLock();
    }
  },

  /**
   * Mendapatkan profil pengguna aktif
   * @param {string} token 
   * @returns {Object}
   */
  getProfil(token) {
    const userSession = this.validateSession(token);
    const sheet = getSheet(CONFIG.SHEETS.USERS);
    const users = Util.sheetToObjects(sheet);
    const user = users.find(u => u.Username === userSession.username);

    if (!user) {
      return Util.buildResponse(false, null, 'Pengguna tidak ditemukan.');
    }

    // Buang data rahasia
    delete user.Password_Hash;
    delete user.Salt;
    delete user._rowIndex;

    return Util.buildResponse(true, user, 'Data profil berhasil diambil.');
  },

  // ==========================================
  // MANAJEMEN PENGGUNA (KHUSUS ROLE ADMIN)
  // ==========================================

  /**
   * Mengambil semua daftar pengguna (Admin only)
   * @param {string} token 
   */
  getSemuaPengguna(token) {
    this.cekHak(token, [CONFIG.ROLES.ADMIN]);
    const sheet = getSheet(CONFIG.SHEETS.USERS);
    const users = Util.sheetToObjects(sheet);

    const safeUsers = users.map(u => ({
      Username: u.Username,
      Nama_Lengkap: u.Nama_Lengkap,
      Email: u.Email,
      Divisi: u.Divisi,
      Role: u.Role,
      Status_Akun: u.Status_Akun,
      Login_Terakhir: u.Login_Terakhir,
      Wajib_Ganti_Password: u.Wajib_Ganti_Password
    }));

    return Util.buildResponse(true, safeUsers, 'Data pengguna berhasil diambil.');
  },

  /**
   * Menambahkan pengguna baru (Admin only)
   * @param {string} token 
   * @param {Object} userData 
   */
  tambahPengguna(token, userData) {
    const admin = this.cekHak(token, [CONFIG.ROLES.ADMIN]);
    const { username, namaLengkap, email, divisi, role, passwordAwal } = userData;

    if (!username || !namaLengkap || !email || !role || !passwordAwal) {
      return Util.buildResponse(false, null, 'Semua data pengguna wajib diisi.');
    }

    const lock = Util.getLock();
    try {
      const sheet = getSheet(CONFIG.SHEETS.USERS);
      const users = Util.sheetToObjects(sheet);

      if (users.some(u => String(u.Username).toLowerCase() === String(username).toLowerCase())) {
        return Util.buildResponse(false, null, `Username '${username}' sudah terdaftar.`);
      }

      const salt = Util.generateSalt(16);
      const hash = Util.hashPassword(passwordAwal, salt);

      const rowData = [
        username.trim(),
        namaLengkap.trim(),
        email.trim(),
        divisi || '-',
        role,
        hash,
        salt,
        'Aktif',
        0,
        '',
        true // Wajib ganti password pada login pertama
      ];

      sheet.appendRow(rowData);
      Util.catatLog(admin.username, admin.role, 'TAMBAH_PENGGUNA', 'USER', username, `Menambah akun baru: ${username} (${role})`, 'SUKSES');

      return Util.buildResponse(true, null, `Pengguna '${username}' berhasil ditambahkan.`);
    } finally {
      lock.releaseLock();
    }
  },

  /**
   * Mengubah data pengguna (Admin only)
   * @param {string} token 
   * @param {Object} userData 
   */
  ubahPengguna(token, userData) {
    const admin = this.cekHak(token, [CONFIG.ROLES.ADMIN]);
    const { username, namaLengkap, email, divisi, role, statusAkun } = userData;

    const lock = Util.getLock();
    try {
      const sheet = getSheet(CONFIG.SHEETS.USERS);
      const users = Util.sheetToObjects(sheet);
      const user = users.find(u => u.Username === username);

      if (!user) {
        return Util.buildResponse(false, null, 'Pengguna tidak ditemukan.');
      }

      const rowIndex = user._rowIndex;
      sheet.getRange(rowIndex, CONFIG.HEADERS.Users.indexOf('Nama_Lengkap') + 1).setValue(namaLengkap);
      sheet.getRange(rowIndex, CONFIG.HEADERS.Users.indexOf('Email') + 1).setValue(email);
      sheet.getRange(rowIndex, CONFIG.HEADERS.Users.indexOf('Divisi') + 1).setValue(divisi);
      sheet.getRange(rowIndex, CONFIG.HEADERS.Users.indexOf('Role') + 1).setValue(role);
      sheet.getRange(rowIndex, CONFIG.HEADERS.Users.indexOf('Status_Akun') + 1).setValue(statusAkun);

      // Jika diaktifkan kembali, bersihkan kunci & hitungan gagal
      if (statusAkun === 'Aktif') {
        sheet.getRange(rowIndex, CONFIG.HEADERS.Users.indexOf('Gagal_Login') + 1).setValue(0);
        CacheService.getScriptCache().remove(`LOCKOUT_${username}`);
      }

      Util.catatLog(admin.username, admin.role, 'UBAH_PENGGUNA', 'USER', username, `Mengubah data profil & role akun: ${username}`, 'SUKSES');
      return Util.buildResponse(true, null, 'Data pengguna berhasil diperbarui.');
    } finally {
      lock.releaseLock();
    }
  },

  /**
   * Reset password pengguna oleh Admin
   * @param {string} token 
   * @param {string} targetUsername 
   * @param {string} passwordBaru 
   */
  resetPasswordOlehAdmin(token, targetUsername, passwordBaru) {
    const admin = this.cekHak(token, [CONFIG.ROLES.ADMIN]);
    if (!passwordBaru || passwordBaru.length < 8) {
      return Util.buildResponse(false, null, 'Password baru minimal 8 karakter.');
    }

    const lock = Util.getLock();
    try {
      const sheet = getSheet(CONFIG.SHEETS.USERS);
      const users = Util.sheetToObjects(sheet);
      const user = users.find(u => u.Username === targetUsername);

      if (!user) {
        return Util.buildResponse(false, null, 'Pengguna tidak ditemukan.');
      }

      const saltBaru = Util.generateSalt(16);
      const hashBaru = Util.hashPassword(passwordBaru, saltBaru);
      const rowIndex = user._rowIndex;

      sheet.getRange(rowIndex, CONFIG.HEADERS.Users.indexOf('Password_Hash') + 1).setValue(hashBaru);
      sheet.getRange(rowIndex, CONFIG.HEADERS.Users.indexOf('Salt') + 1).setValue(saltBaru);
      sheet.getRange(rowIndex, CONFIG.HEADERS.Users.indexOf('Wajib_Ganti_Password') + 1).setValue(true);
      sheet.getRange(rowIndex, CONFIG.HEADERS.Users.indexOf('Gagal_Login') + 1).setValue(0);
      sheet.getRange(rowIndex, CONFIG.HEADERS.Users.indexOf('Status_Akun') + 1).setValue('Aktif');

      CacheService.getScriptCache().remove(`LOCKOUT_${targetUsername}`);

      Util.catatLog(admin.username, admin.role, 'RESET_PASSWORD', 'USER', targetUsername, `Reset password pengguna ${targetUsername} oleh Admin`, 'SUKSES');
      return Util.buildResponse(true, null, `Password untuk '${targetUsername}' berhasil direset.`);
    } finally {
      lock.releaseLock();
    }
  }
};


// ==================== FILE: DriveService.gs ====================

/**
 * ============================================================================
 * HANARSIP (Hanoco Arsip) - Sistem Kearsipan Digital PT. Hanoco Interior Arsitektur
 * File: DriveService.gs
 * Deskripsi: Integrasi Google Drive, struktur folder otomatis, upload berkas,
 *            manajemen izin pratinjau digital, dan backup berkas.
 * ============================================================================
 */

const DriveService = {
  /**
   * Mengambil atau membuat folder di dalam parent folder
   * @param {GoogleAppsScript.Drive.Folder} parent 
   * @param {string} folderName 
   * @returns {GoogleAppsScript.Drive.Folder}
   */
  getOrCreateFolder(parent, folderName) {
    const iter = parent.getFoldersByName(folderName);
    if (iter.hasNext()) {
      return iter.next();
    }
    return parent.createFolder(folderName);
  },

  /**
   * Mengambil folder root penyimpanan HANARSIP_STORAGE
   * @returns {GoogleAppsScript.Drive.Folder}
   */
  getRootFolder() {
    const props = PropertiesService.getScriptProperties();
    const rootId = props.getProperty('ROOT_FOLDER_ID');
    
    if (rootId) {
      try {
        return DriveApp.getFolderById(rootId);
      } catch (e) {
        console.warn('Folder root dari properti tidak ditemukan, membuat/mencari ulang...');
      }
    }

    const iter = DriveApp.getFoldersByName(CONFIG.STORAGE.ROOT_FOLDER_NAME);
    let rootFolder;
    if (iter.hasNext()) {
      rootFolder = iter.next();
    } else {
      rootFolder = DriveApp.createFolder(CONFIG.STORAGE.ROOT_FOLDER_NAME);
    }

    props.setProperty('ROOT_FOLDER_ID', rootFolder.getId());
    return rootFolder;
  },

  /**
   * Mengambil folder khusus backup database
   * @returns {GoogleAppsScript.Drive.Folder}
   */
  getBackupFolder() {
    const root = this.getRootFolder();
    return this.getOrCreateFolder(root, CONFIG.STORAGE.BACKUP_FOLDER_NAME);
  },

  /**
   * Mengambil atau membuat struktur folder hierarki penyimpanan arsip:
   * HANARSIP_STORAGE / Arsip / [Tahun] / [Klasifikasi] / [Proyek atau UMUM]
   * @param {string|number} tahun 
   * @param {string} kodeKlasifikasi 
   * @param {string} idProyek 
   * @returns {GoogleAppsScript.Drive.Folder}
   */
  getTargetArchiveFolder(tahun, kodeKlasifikasi, idProyek) {
    const root = this.getRootFolder();
    const fArsip = this.getOrCreateFolder(root, CONFIG.STORAGE.ARCHIVE_SUBDIR);
    const fTahun = this.getOrCreateFolder(fArsip, String(tahun || new Date().getFullYear()));
    const fKlasifikasi = this.getOrCreateFolder(fTahun, String(kodeKlasifikasi || 'LAIN'));
    const fProyek = this.getOrCreateFolder(fKlasifikasi, idProyek ? String(idProyek) : 'NON_PROYEK');
    return fProyek;
  },

  /**
   * Mengunggah berkas arsip ke Google Drive
   * @param {Object} filePayload { base64, filename, mimeType }
   * @param {string} idArsip Contoh: 'HIA/PRY/2026/0001'
   * @param {string|number} tahun 
   * @param {string} kodeKlasifikasi 
   * @param {string} idProyek 
   * @returns {Object} { fileId, fileUrl, downloadUrl }
   */
  simpanBerkasArsip(filePayload, idArsip, tahun, kodeKlasifikasi, idProyek) {
    if (!filePayload || !filePayload.base64 || !filePayload.filename) {
      throw new Error('Data berkas tidak valid atau kosong.');
    }

    // Bersihkan header data URI jika ada (misal: "data:application/pdf;base64,...")
    let base64Clean = filePayload.base64;
    if (base64Clean.indexOf('base64,') > -1) {
      base64Clean = base64Clean.split('base64,')[1];
    }

    // Validasi ekstensi berkas
    const parts = filePayload.filename.split('.');
    const ext = parts.length > 1 ? parts.pop().toLowerCase() : '';
    if (!CONFIG.STORAGE.ALLOWED_EXTENSIONS.includes(ext)) {
      throw new Error(`Format berkas .${ext} tidak diizinkan. Format yang didukung: ${CONFIG.STORAGE.ALLOWED_EXTENSIONS.join(', ')}`);
    }

    // Decode base64 ke Blob
    const decodedBytes = Utilities.base64Decode(base64Clean);
    if (decodedBytes.length > CONFIG.STORAGE.MAX_FILE_SIZE_BYTES) {
      throw new Error('Ukuran berkas melebihi batas maksimal 20 MB.');
    }

    // Standarisasi nama berkas: [ID_Arsip]_[Nama_Asli]
    const cleanId = idArsip.replace(/\//g, '_');
    const sanitizedFilename = filePayload.filename.replace(/[^a-zA-Z0-9._-]/g, '_');
    const standardName = `${cleanId}_${sanitizedFilename}`;

    const mimeType = filePayload.mimeType || MimeType.PDF;
    const blob = Utilities.newBlob(decodedBytes, mimeType, standardName);

    // Dapatkan folder tujuan
    const targetFolder = this.getTargetArchiveFolder(tahun, kodeKlasifikasi, idProyek);
    const driveFile = targetFolder.createFile(blob);

    // Set deskripsi berkas
    driveFile.setDescription(`Arsip HANARSIP - ID: ${idArsip} | PT. Hanoco Interior Arsitektur`);

    return {
      fileId: driveFile.getId(),
      fileUrl: driveFile.getUrl(),
      downloadUrl: driveFile.getDownloadUrl(),
      standardName: standardName,
      sizeBytes: decodedBytes.length
    };
  },

  /**
   * Memberikan hak lihat (Viewer) sementara pada berkas Google Drive untuk peminjam digital
   * @param {string} fileId 
   * @param {string} emailPeminjam 
   */
  berikanAksesDigital(fileId, emailPeminjam) {
    if (!fileId || !emailPeminjam) return false;
    try {
      const file = DriveApp.getFileById(fileId);
      file.addViewer(emailPeminjam);
      return true;
    } catch (e) {
      console.error(`Gagal memberikan akses digital berkas ${fileId} ke ${emailPeminjam}: ${e.message}`);
      return false;
    }
  },

  /**
   * Mencabut hak lihat sementara berkas Google Drive saat pengembalian / jatuh tempo
   * @param {string} fileId 
   * @param {string} emailPeminjam 
   */
  cabutAksesDigital(fileId, emailPeminjam) {
    if (!fileId || !emailPeminjam) return false;
    try {
      const file = DriveApp.getFileById(fileId);
      file.removeViewer(emailPeminjam);
      return true;
    } catch (e) {
      console.error(`Gagal mencabut akses digital berkas ${fileId} dari ${emailPeminjam}: ${e.message}`);
      return false;
    }
  },

  /**
   * Backup otomatis database spreadsheet DB_HANARSIP ke Google Drive
   * @returns {string} ID File Backup
   */
  lakukanBackupDatabase() {
    const ss = getSpreadsheet();
    const backupFolder = this.getBackupFolder();
    const timestamp = Utilities.formatDate(new Date(), CONFIG.TIMEZONE, 'yyyyMMdd_HHmmss');
    const backupName = `DB_HANARSIP_BACKUP_${timestamp}`;

    const fileOriginal = DriveApp.getFileById(ss.getId());
    const fileBackup = fileOriginal.makeCopy(backupName, backupFolder);

    // Bersihkan backup lama yang lebih dari 30 hari
    const thresholdMillis = new Date().getTime() - (30 * 24 * 60 * 60 * 1000);
    const files = backupFolder.getFiles();
    while (files.hasNext()) {
      const f = files.next();
      if (f.getDateCreated().getTime() < thresholdMillis) {
        f.setTrashed(true);
      }
    }

    return fileBackup.getId();
  }
};


// ==================== FILE: ArsipService.gs ====================

/**
 * ============================================================================
 * HANARSIP (Hanoco Arsip) - Sistem Kearsipan Digital PT. Hanoco Interior Arsitektur
 * File: ArsipService.gs
 * Deskripsi: Manajemen CRUD arsip, generator ID otomatis, perhitungan retensi,
 *            pencarian & filter berlapis dengan pagination, dan kontrol akses arsip.
 * ============================================================================
 */

const ArsipService = {
  /**
   * Membuat ID Arsip unik secara atomik dengan script lock
   * Format: HIA/[Kode_Klasifikasi]/[Tahun]/[No. Urut 4 digit]
   * Contoh: HIA/PRY/2026/0001
   * @param {string} kodeKlasifikasi 
   * @param {string|number} tahun 
   * @returns {string}
   */
  generateIdArsip(kodeKlasifikasi, tahun) {
    const k = String(kodeKlasifikasi || 'GEN').toUpperCase();
    const t = String(tahun || new Date().getFullYear());
    const sheet = getSheet(CONFIG.SHEETS.ARSIP);
    const data = sheet.getDataRange().getValues();

    let maxSeq = 0;
    const prefix = `HIA/${k}/${t}/`;

    if (data.length > 1) {
      const idColIdx = CONFIG.HEADERS.Arsip.indexOf('ID_Arsip');
      for (let i = 1; i < data.length; i++) {
        const idVal = String(data[i][idColIdx] || '');
        if (idVal.startsWith(prefix)) {
          const seqStr = idVal.replace(prefix, '');
          const seqNum = parseInt(seqStr, 10);
          if (!isNaN(seqNum) && seqNum > maxSeq) {
            maxSeq = seqNum;
          }
        }
      }
    }

    const nextSeq = maxSeq + 1;
    const seqPadded = ('0000' + nextSeq).slice(-4);
    return `${prefix}${seqPadded}`;
  },

  /**
   * Mengambil data master klasifikasi
   */
  getMasterKlasifikasi() {
    const sheet = getSheet(CONFIG.SHEETS.KLASIFIKASI);
    return Util.sheetToObjects(sheet);
  },

  /**
   * Mengambil data master proyek
   */
  getMasterProyek() {
    const sheet = getSheet(CONFIG.SHEETS.PROYEK);
    return Util.sheetToObjects(sheet);
  },

  /**
   * Tambah Arsip Baru (Admin & Petugas)
   * @param {string} token 
   * @param {Object} payload 
   */
  tambahArsip(token, payload) {
    const user = Auth.cekHak(token, [CONFIG.ROLES.ADMIN, CONFIG.ROLES.PETUGAS]);
    const {
      jenisArsip, kodeKlasifikasi, nomorDokumen, tanggalDokumen,
      judulPerihal, pihakTerkait, idProyek, lokasiFisik,
      tingkatAkses, statusArsip, fileData
    } = payload;

    if (!jenisArsip || !kodeKlasifikasi || !nomorDokumen || !tanggalDokumen || !judulPerihal) {
      return Util.buildResponse(false, null, 'Field wajib: Jenis Arsip, Klasifikasi, No. Dokumen, Tanggal, dan Judul.');
    }

    const lock = Util.getLock();
    try {
      const sheet = getSheet(CONFIG.SHEETS.ARSIP);
      const tahunDoc = new Date(tanggalDokumen).getFullYear() || new Date().getFullYear();
      const idArsip = this.generateIdArsip(kodeKlasifikasi, tahunDoc);

      // Hitung retensi otomatis dari Master_Klasifikasi
      const masterKlas = this.getMasterKlasifikasi();
      const klasItem = masterKlas.find(k => k.Kode_Klasifikasi === kodeKlasifikasi);
      let tanggalRetensi = '';
      if (klasItem) {
        tanggalRetensi = Util.hitungTanggalRetensi(
          tanggalDokumen,
          klasItem.Retensi_Aktif_Tahun,
          klasItem.Retensi_Inaktif_Tahun
        );
      }

      // Unggah berkas ke Google Drive jika dilampirkan
      let tautanFile = '';
      let idFileDrive = '';
      if (fileData && fileData.base64) {
        const driveResult = DriveService.simpanBerkasArsip(
          fileData,
          idArsip,
          tahunDoc,
          kodeKlasifikasi,
          idProyek
        );
        tautanFile = driveResult.fileUrl;
        idFileDrive = driveResult.fileId;
      }

      const nowStr = Util.nowTimestamp();
      const newRow = [
        idArsip,
        jenisArsip,
        kodeKlasifikasi,
        nomorDokumen.trim(),
        Util.formatDate(tanggalDokumen, 'yyyy-MM-dd'),
        judulPerihal.trim(),
        pihakTerkait ? pihakTerkait.trim() : '-',
        idProyek || '-',
        lokasiFisik ? lokasiFisik.trim() : '-',
        tautanFile,
        idFileDrive,
        tingkatAkses || (klasItem ? klasItem.Akses_Bawaan : 'Umum'),
        statusArsip || 'Aktif',
        tanggalRetensi,
        user.username,
        nowStr,
        nowStr,
        false // Is_Deleted = false
      ];

      sheet.appendRow(newRow);
      Util.catatLog(user.username, user.role, 'TAMBAH_ARSIP', 'ARSIP', idArsip, `Membuat arsip baru: ${idArsip} - ${judulPerihal}`, 'SUKSES');

      return Util.buildResponse(true, { idArsip: idArsip, tautanFile: tautanFile }, `Arsip '${idArsip}' berhasil disimpan.`);
    } catch (e) {
      console.error('Error tambah arsip: ' + e.message);
      return Util.buildResponse(false, null, 'Gagal menyimpan arsip: ' + e.message);
    } finally {
      lock.releaseLock();
    }
  },

  /**
   * Ubah Metadata Arsip (Admin & Petugas)
   * @param {string} token 
   * @param {Object} payload 
   */
  ubahArsip(token, payload) {
    const user = Auth.cekHak(token, [CONFIG.ROLES.ADMIN, CONFIG.ROLES.PETUGAS]);
    const {
      idArsip, jenisArsip, kodeKlasifikasi, nomorDokumen, tanggalDokumen,
      judulPerihal, pihakTerkait, idProyek, lokasiFisik,
      tingkatAkses, statusArsip, fileData
    } = payload;

    if (!idArsip) {
      return Util.buildResponse(false, null, 'ID Arsip wajib disertakan.');
    }

    const lock = Util.getLock();
    try {
      const sheet = getSheet(CONFIG.SHEETS.ARSIP);
      const items = Util.sheetToObjects(sheet);
      const item = items.find(a => a.ID_Arsip === idArsip);

      if (!item) {
        return Util.buildResponse(false, null, 'Data arsip tidak ditemukan.');
      }

      const rowIndex = item._rowIndex;
      const tahunDoc = new Date(tanggalDokumen || item.Tanggal_Dokumen).getFullYear();

      // Recalculate retensi jika tanggal dokumen berubah
      let tanggalRetensi = item.Tanggal_Retensi;
      if (tanggalDokumen && tanggalDokumen !== item.Tanggal_Dokumen) {
        const masterKlas = this.getMasterKlasifikasi();
        const klasItem = masterKlas.find(k => k.Kode_Klasifikasi === (kodeKlasifikasi || item.Kode_Klasifikasi));
        if (klasItem) {
          tanggalRetensi = Util.hitungTanggalRetensi(tanggalDokumen, klasItem.Retensi_Aktif_Tahun, klasItem.Retensi_Inaktif_Tahun);
        }
      }

      // Update berkas jika ada lampiran berkas baru
      let tautanFile = item.Tautan_File;
      let idFileDrive = item.ID_File_Drive;
      if (fileData && fileData.base64) {
        const driveResult = DriveService.simpanBerkasArsip(
          fileData,
          idArsip,
          tahunDoc,
          kodeKlasifikasi || item.Kode_Klasifikasi,
          idProyek || item.ID_Proyek
        );
        tautanFile = driveResult.fileUrl;
        idFileDrive = driveResult.fileId;
      }

      const nowStr = Util.nowTimestamp();
      const colMap = CONFIG.HEADERS.Arsip;

      if (jenisArsip) sheet.getRange(rowIndex, colMap.indexOf('Jenis_Arsip') + 1).setValue(jenisArsip);
      if (kodeKlasifikasi) sheet.getRange(rowIndex, colMap.indexOf('Kode_Klasifikasi') + 1).setValue(kodeKlasifikasi);
      if (nomorDokumen) sheet.getRange(rowIndex, colMap.indexOf('Nomor_Dokumen') + 1).setValue(nomorDokumen);
      if (tanggalDokumen) sheet.getRange(rowIndex, colMap.indexOf('Tanggal_Dokumen') + 1).setValue(Util.formatDate(tanggalDokumen, 'yyyy-MM-dd'));
      if (judulPerihal) sheet.getRange(rowIndex, colMap.indexOf('Judul_Perihal') + 1).setValue(judulPerihal);
      if (pihakTerkait !== undefined) sheet.getRange(rowIndex, colMap.indexOf('Pihak_Terkait') + 1).setValue(pihakTerkait);
      if (idProyek !== undefined) sheet.getRange(rowIndex, colMap.indexOf('ID_Proyek') + 1).setValue(idProyek);
      if (lokasiFisik !== undefined) sheet.getRange(rowIndex, colMap.indexOf('Lokasi_Fisik') + 1).setValue(lokasiFisik);
      if (tingkatAkses) sheet.getRange(rowIndex, colMap.indexOf('Tingkat_Akses') + 1).setValue(tingkatAkses);
      if (statusArsip) sheet.getRange(rowIndex, colMap.indexOf('Status_Arsip') + 1).setValue(statusArsip);
      if (tanggalRetensi) sheet.getRange(rowIndex, colMap.indexOf('Tanggal_Retensi') + 1).setValue(tanggalRetensi);
      if (tautanFile) sheet.getRange(rowIndex, colMap.indexOf('Tautan_File') + 1).setValue(tautanFile);
      if (idFileDrive) sheet.getRange(rowIndex, colMap.indexOf('ID_File_Drive') + 1).setValue(idFileDrive);

      sheet.getRange(rowIndex, colMap.indexOf('Waktu_Ubah') + 1).setValue(nowStr);

      Util.catatLog(user.username, user.role, 'UBAH_ARSIP', 'ARSIP', idArsip, `Memperbarui arsip ${idArsip}`, 'SUKSES');
      return Util.buildResponse(true, null, `Arsip '${idArsip}' berhasil diperbarui.`);
    } finally {
      lock.releaseLock();
    }
  },

  /**
   * Detail Lengkap Arsip (dengan pembatasan akses sesuai peran pengguna)
   * @param {string} token 
   * @param {string} idArsip 
   */
  getDetailArsip(token, idArsip) {
    const user = Auth.validateSession(token);
    const sheet = getSheet(CONFIG.SHEETS.ARSIP);
    const items = Util.sheetToObjects(sheet);
    const item = items.find(a => a.ID_Arsip === idArsip);

    if (!item) {
      return Util.buildResponse(false, null, 'Arsip tidak ditemukan.');
    }

    if (String(item.Is_Deleted).toUpperCase() === 'TRUE' && user.role !== CONFIG.ROLES.ADMIN) {
      return Util.buildResponse(false, null, 'Arsip ini telah dihapus.');
    }

    // Pengecekan Tingkat Akses
    if (item.Tingkat_Akses === CONFIG.ACCESS_LEVELS.RAHASIA) {
      if (user.role !== CONFIG.ROLES.ADMIN && user.role !== CONFIG.ROLES.PIMPINAN) {
        return Util.buildResponse(false, null, 'Akses terbatas: Anda tidak memiliki izin untuk melihat arsip kategori RAHASIA.');
      }
    }

    // Buat pratinjau Drive URL (embeddable)
    let previewUrl = '';
    if (item.ID_File_Drive) {
      previewUrl = `https://drive.google.com/file/d/${item.ID_File_Drive}/preview`;
    }

    delete item._rowIndex;
    item.Preview_Url = previewUrl;

    return Util.buildResponse(true, item, 'Detail arsip berhasil diambil.');
  },

  /**
   * Soft Delete Arsip (Admin & Petugas)
   * @param {string} token 
   * @param {string} idArsip 
   */
  softDeleteArsip(token, idArsip) {
    const user = Auth.cekHak(token, [CONFIG.ROLES.ADMIN, CONFIG.ROLES.PETUGAS]);
    const lock = Util.getLock();
    try {
      const sheet = getSheet(CONFIG.SHEETS.ARSIP);
      const items = Util.sheetToObjects(sheet);
      const item = items.find(a => a.ID_Arsip === idArsip);

      if (!item) {
        return Util.buildResponse(false, null, 'Arsip tidak ditemukan.');
      }

      const rowIndex = item._rowIndex;
      sheet.getRange(rowIndex, CONFIG.HEADERS.Arsip.indexOf('Is_Deleted') + 1).setValue(true);
      sheet.getRange(rowIndex, CONFIG.HEADERS.Arsip.indexOf('Waktu_Ubah') + 1).setValue(Util.nowTimestamp());

      Util.catatLog(user.username, user.role, 'HAPUS_ARSIP', 'ARSIP', idArsip, `Soft delete arsip: ${idArsip}`, 'SUKSES');
      return Util.buildResponse(true, null, `Arsip '${idArsip}' telah dipindahkan ke tempat sampah.`);
    } finally {
      lock.releaseLock();
    }
  },

  /**
   * Pulihkan Arsip dari Tempat Sampah (Khusus Admin)
   * @param {string} token 
   * @param {string} idArsip 
   */
  pulihkanArsip(token, idArsip) {
    const user = Auth.cekHak(token, [CONFIG.ROLES.ADMIN]);
    const lock = Util.getLock();
    try {
      const sheet = getSheet(CONFIG.SHEETS.ARSIP);
      const items = Util.sheetToObjects(sheet);
      const item = items.find(a => a.ID_Arsip === idArsip);

      if (!item) {
        return Util.buildResponse(false, null, 'Arsip tidak ditemukan.');
      }

      const rowIndex = item._rowIndex;
      sheet.getRange(rowIndex, CONFIG.HEADERS.Arsip.indexOf('Is_Deleted') + 1).setValue(false);
      sheet.getRange(rowIndex, CONFIG.HEADERS.Arsip.indexOf('Waktu_Ubah') + 1).setValue(Util.nowTimestamp());

      Util.catatLog(user.username, user.role, 'PULIHKAN_ARSIP', 'ARSIP', idArsip, `Memulihkan arsip: ${idArsip}`, 'SUKSES');
      return Util.buildResponse(true, null, `Arsip '${idArsip}' berhasil dipulihkan.`);
    } finally {
      lock.releaseLock();
    }
  },

  /**
   * Hapus Permanen Arsip (Khusus Admin)
   * @param {string} token 
   * @param {string} idArsip 
   */
  hapusPermanenArsip(token, idArsip) {
    const user = Auth.cekHak(token, [CONFIG.ROLES.ADMIN]);
    const lock = Util.getLock();
    try {
      const sheet = getSheet(CONFIG.SHEETS.ARSIP);
      const items = Util.sheetToObjects(sheet);
      const item = items.find(a => a.ID_Arsip === idArsip);

      if (!item) {
        return Util.buildResponse(false, null, 'Arsip tidak ditemukan.');
      }

      // Hapus berkas Google Drive jika ada
      if (item.ID_File_Drive) {
        try {
          DriveApp.getFileById(item.ID_File_Drive).setTrashed(true);
        } catch (e) {
          console.warn('Gagal menghapus file drive: ' + e.message);
        }
      }

      // Hapus baris dari spreadsheet
      sheet.deleteRow(item._rowIndex);

      Util.catatLog(user.username, user.role, 'HAPUS_PERMANEN', 'ARSIP', idArsip, `Hapus permanen arsip ${idArsip}`, 'SUKSES');
      return Util.buildResponse(true, null, `Arsip '${idArsip}' telah dihapus secara permanen.`);
    } finally {
      lock.releaseLock();
    }
  },

  /**
   * Pencarian & Filter Berlapis Arsip dengan Pagination & Role-Based Access Control
   * @param {string} token 
   * @param {Object} params Filter parameters
   */
  cariArsip(token, params = {}) {
    const user = Auth.validateSession(token);
    const sheet = getSheet(CONFIG.SHEETS.ARSIP);
    let items = Util.sheetToObjects(sheet);

    const {
      keyword = '',
      jenisArsip = '',
      kodeKlasifikasi = '',
      idProyek = '',
      tahun = '',
      statusArsip = '',
      tingkatAkses = '',
      tglMulai = '',
      tglSelesai = '',
      includeDeleted = false,
      page = 1,
      pageSize = 10
    } = params;

    // Filter Soft Delete: Admin bisa melihat yang Is_Deleted jika includeDeleted=true, selain itu hanya Is_Deleted=false
    if (user.role === CONFIG.ROLES.ADMIN && includeDeleted) {
      items = items.filter(a => String(a.Is_Deleted).toUpperCase() === 'TRUE');
    } else {
      items = items.filter(a => String(a.Is_Deleted).toUpperCase() !== 'TRUE');
    }

    // Filter Hak Akses: Peminjam tidak dapat melihat Rahasia
    if (user.role === CONFIG.ROLES.PEMINJAM) {
      items = items.filter(a => a.Tingkat_Akses !== CONFIG.ACCESS_LEVELS.RAHASIA);
    }

    // Filter Keyword (ID, Judul, No Dokumen, Pihak Terkait, Lokasi Fisik)
    if (keyword && keyword.trim()) {
      const q = keyword.trim().toLowerCase();
      items = items.filter(a => 
        String(a.ID_Arsip || '').toLowerCase().includes(q) ||
        String(a.Judul_Perihal || '').toLowerCase().includes(q) ||
        String(a.Nomor_Dokumen || '').toLowerCase().includes(q) ||
        String(a.Pihak_Terkait || '').toLowerCase().includes(q) ||
        String(a.Lokasi_Fisik || '').toLowerCase().includes(q)
      );
    }

    // Filter Berdasarkan Kategori
    if (jenisArsip) items = items.filter(a => a.Jenis_Arsip === jenisArsip);
    if (kodeKlasifikasi) items = items.filter(a => a.Kode_Klasifikasi === kodeKlasifikasi);
    if (idProyek) items = items.filter(a => a.ID_Proyek === idProyek);
    if (statusArsip) items = items.filter(a => a.Status_Arsip === statusArsip);
    if (tingkatAkses) items = items.filter(a => a.Tingkat_Akses === tingkatAkses);

    // Filter Tahun
    if (tahun) {
      items = items.filter(a => {
        const d = String(a.Tanggal_Dokumen || '');
        return d.startsWith(String(tahun));
      });
    }

    // Filter Rentang Tanggal Dokumen
    if (tglMulai) {
      items = items.filter(a => String(a.Tanggal_Dokumen || '') >= tglMulai);
    }
    if (tglSelesai) {
      items = items.filter(a => String(a.Tanggal_Dokumen || '') <= tglSelesai);
    }

    // Urutkan arsip terbaru di awal
    items.sort((a, b) => new Date(b.Waktu_Input || b.Tanggal_Dokumen) - new Date(a.Waktu_Input || a.Tanggal_Dokumen));

    // Pagination
    const totalItems = items.length;
    const p = Math.max(1, parseInt(page, 10) || 1);
    const size = Math.max(1, parseInt(pageSize, 10) || 10);
    const totalPages = Math.ceil(totalItems / size) || 1;
    const startIndex = (p - 1) * size;
    const paginatedItems = items.slice(startIndex, startIndex + size).map(item => {
      const copy = Object.assign({}, item);
      delete copy._rowIndex;
      return copy;
    });

    return Util.buildResponse(true, {
      items: paginatedItems,
      totalItems: totalItems,
      totalPages: totalPages,
      currentPage: p,
      pageSize: size
    }, 'Pencarian arsip berhasil.');
  },

  /**
   * Menyiapkan Data Label & QR Code untuk dicetak
   * @param {string} token 
   * @param {string} idArsip 
   */
  getLabelCetak(token, idArsip) {
    const detailResp = this.getDetailArsip(token, idArsip);
    if (!detailResp.success) return detailResp;

    const item = detailResp.data;
    const qrPayload = JSON.stringify({
      id: item.ID_Arsip,
      no: item.Nomor_Dokumen,
      klas: item.Kode_Klasifikasi,
      lok: item.Lokasi_Fisik,
      ret: item.Tanggal_Retensi
    });

    // Menggunakan Google Chart QR Code API untuk rendering instan
    const qrCodeUrl = `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${encodeURIComponent(qrPayload)}&choe=UTF-8`;

    return Util.buildResponse(true, {
      arsip: item,
      qrUrl: qrCodeUrl,
      company: CONFIG.COMPANY_NAME,
      system: CONFIG.APP_NAME
    }, 'Data label berhasil disiapkan.');
  },

  // ==========================================
  // MANAJEMEN MASTER KLASIFIKASI & PROYEK (ADMIN)
  // ==========================================

  simpanMasterKlasifikasi(token, dataKlasifikasi) {
    const admin = Auth.cekHak(token, [CONFIG.ROLES.ADMIN]);
    const { kode, nama, retensiAktif, retensiInaktif, nasibAkhir, akses } = dataKlasifikasi;

    if (!kode || !nama) {
      return Util.buildResponse(false, null, 'Kode dan Nama Klasifikasi wajib diisi.');
    }

    const lock = Util.getLock();
    try {
      const sheet = getSheet(CONFIG.SHEETS.KLASIFIKASI);
      const items = Util.sheetToObjects(sheet);
      const existing = items.find(k => k.Kode_Klasifikasi.toUpperCase() === kode.toUpperCase());

      if (existing) {
        // Update
        const r = existing._rowIndex;
        sheet.getRange(r, 2).setValue(nama);
        sheet.getRange(r, 3).setValue(Number(retensiAktif || 0));
        sheet.getRange(r, 4).setValue(Number(retensiInaktif || 0));
        sheet.getRange(r, 5).setValue(nasibAkhir || 'Musnah');
        sheet.getRange(r, 6).setValue(akses || 'Umum');
        Util.catatLog(admin.username, admin.role, 'UBAH_KLASIFIKASI', 'MASTER', kode, `Ubah klasifikasi: ${kode}`, 'SUKSES');
      } else {
        // Insert
        sheet.appendRow([
          kode.toUpperCase().trim(),
          nama.trim(),
          Number(retensiAktif || 0),
          Number(retensiInaktif || 0),
          nasibAkhir || 'Musnah',
          akses || 'Umum',
          ''
        ]);
        Util.catatLog(admin.username, admin.role, 'TAMBAH_KLASIFIKASI', 'MASTER', kode, `Tambah klasifikasi: ${kode}`, 'SUKSES');
      }

      return Util.buildResponse(true, null, 'Master Klasifikasi berhasil disimpan.');
    } finally {
      lock.releaseLock();
    }
  },

  simpanMasterProyek(token, dataProyek) {
    const admin = Auth.cekHak(token, [CONFIG.ROLES.ADMIN]);
    const { idProyek, namaProyek, klien, lokasi, jenisLayanan, tahun, statusProyek, pic } = dataProyek;

    if (!idProyek || !namaProyek) {
      return Util.buildResponse(false, null, 'ID Proyek dan Nama Proyek wajib diisi.');
    }

    const lock = Util.getLock();
    try {
      const sheet = getSheet(CONFIG.SHEETS.PROYEK);
      const items = Util.sheetToObjects(sheet);
      const existing = items.find(p => p.ID_Proyek.toUpperCase() === idProyek.toUpperCase());

      if (existing) {
        // Update
        const r = existing._rowIndex;
        sheet.getRange(r, 2).setValue(namaProyek);
        sheet.getRange(r, 3).setValue(klien || '-');
        sheet.getRange(r, 4).setValue(lokasi || '-');
        sheet.getRange(r, 5).setValue(jenisLayanan || '-');
        sheet.getRange(r, 6).setValue(Number(tahun || new Date().getFullYear()));
        sheet.getRange(r, 7).setValue(statusProyek || 'Pengerjaan');
        sheet.getRange(r, 8).setValue(pic || '-');
        Util.catatLog(admin.username, admin.role, 'UBAH_PROYEK', 'MASTER', idProyek, `Ubah proyek: ${idProyek}`, 'SUKSES');
      } else {
        // Insert
        sheet.appendRow([
          idProyek.trim(),
          namaProyek.trim(),
          klien || '-',
          lokasi || '-',
          jenisLayanan || '-',
          Number(tahun || new Date().getFullYear()),
          statusProyek || 'Pengerjaan',
          pic || '-',
          ''
        ]);
        Util.catatLog(admin.username, admin.role, 'TAMBAH_PROYEK', 'MASTER', idProyek, `Tambah proyek: ${idProyek}`, 'SUKSES');
      }

      return Util.buildResponse(true, null, 'Master Proyek berhasil disimpan.');
    } finally {
      lock.releaseLock();
    }
  }
};


// ==================== FILE: PeminjamanService.gs ====================

/**
 * ============================================================================
 * HANARSIP (Hanoco Arsip) - Sistem Kearsipan Digital PT. Hanoco Interior Arsitektur
 * File: PeminjamanService.gs
 * Deskripsi: Alur peminjaman arsip fisik & digital, persetujuan multi-level,
 *            pemberian/pencabutan hak akses Google Drive, dan pencatatan pengembalian.
 * ============================================================================
 */

const PeminjamanService = {
  /**
   * Membuat ID Peminjaman atomik dengan script lock
   * Format: PJM/[Tahun]/[No. Urut 4 digit]
   * Contoh: PJM/2026/0001
   * @param {string|number} tahun 
   * @returns {string}
   */
  generateIdPinjam(tahun) {
    const t = String(tahun || new Date().getFullYear());
    const sheet = getSheet(CONFIG.SHEETS.PEMINJAMAN);
    const data = sheet.getDataRange().getValues();

    let maxSeq = 0;
    const prefix = `PJM/${t}/`;

    if (data.length > 1) {
      const idColIdx = CONFIG.HEADERS.Peminjaman.indexOf('ID_Pinjam');
      for (let i = 1; i < data.length; i++) {
        const idVal = String(data[i][idColIdx] || '');
        if (idVal.startsWith(prefix)) {
          const seqStr = idVal.replace(prefix, '');
          const seqNum = parseInt(seqStr, 10);
          if (!isNaN(seqNum) && seqNum > maxSeq) {
            maxSeq = seqNum;
          }
        }
      }
    }

    const nextSeq = maxSeq + 1;
    const seqPadded = ('0000' + nextSeq).slice(-4);
    return `${prefix}${seqPadded}`;
  },

  /**
   * Mengajukan Peminjaman Arsip (Fisik atau Akses Digital)
   * @param {string} token 
   * @param {Object} payload 
   */
  ajukanPeminjaman(token, payload) {
    const user = Auth.validateSession(token);
    const { idArsip, jenisPinjam, keperluan, tanggalRencanaKembali } = payload;

    if (!idArsip || !jenisPinjam || !keperluan || !tanggalRencanaKembali) {
      return Util.buildResponse(false, null, 'ID Arsip, Jenis Pinjam, Keperluan, dan Tanggal Rencana Kembali wajib diisi.');
    }

    const lock = Util.getLock();
    try {
      // 1. Verifikasi Arsip
      const sheetArsip = getSheet(CONFIG.SHEETS.ARSIP);
      const daftarArsip = Util.sheetToObjects(sheetArsip);
      const arsip = daftarArsip.find(a => a.ID_Arsip === idArsip && String(a.Is_Deleted).toUpperCase() !== 'TRUE');

      if (!arsip) {
        return Util.buildResponse(false, null, 'Arsip tidak ditemukan atau telah dihapus.');
      }

      // 2. Cek apakah arsip sedang aktif dipinjam
      const sheetPinjam = getSheet(CONFIG.SHEETS.PEMINJAMAN);
      const daftarPinjam = Util.sheetToObjects(sheetPinjam);
      const sedangDipinjam = daftarPinjam.some(p => 
        p.ID_Arsip === idArsip && 
        (p.Status_Pinjam === CONFIG.LOAN_STATUS.DIPINJAM || p.Status_Pinjam === CONFIG.LOAN_STATUS.TERLAMBAT)
      );

      if (sedangDipinjam && jenisPinjam === 'Fisik') {
        return Util.buildResponse(false, null, 'Arsip fisik ini sedang dipinjam oleh pengguna lain.');
      }

      // 3. Generate ID Pinjam
      const tahun = new Date().getFullYear();
      const idPinjam = this.generateIdPinjam(tahun);
      const nowStr = Util.nowTimestamp();
      const todayStr = Util.todayString();

      const newRow = [
        idPinjam,
        idArsip,
        user.username,
        jenisPinjam, // 'Fisik' atau 'Digital'
        keperluan.trim(),
        todayStr,
        Util.formatDate(tanggalRencanaKembali, 'yyyy-MM-dd'),
        CONFIG.LOAN_STATUS.MENUNGGU,
        '-', // Diproses_Oleh
        '',  // Tanggal_Keluar
        '',  // Tanggal_Kembali
        '-', // Kondisi_Kembali
        `Diajukan oleh ${user.namaLengkap} (${user.divisi})`
      ];

      sheetPinjam.appendRow(newRow);
      Util.catatLog(user.username, user.role, 'AJUKAN_PINJAM', 'PEMINJAMAN', idPinjam, `Pengajuan pinjam ${jenisPinjam} arsip ${idArsip}`, 'SUKSES');

      // 4. Kirim notifikasi email ke Petugas / Pimpinan jika arsip Rahasia
      NotifikasiService.kirimNotifikasiPengajuanPinjam(idPinjam, arsip, user);

      return Util.buildResponse(true, { idPinjam: idPinjam }, `Pengajuan peminjaman '${idPinjam}' berhasil dikirim.`);
    } catch (e) {
      console.error('Error saat mengajukan peminjaman: ' + e.message);
      return Util.buildResponse(false, null, 'Gagal mengajukan peminjaman: ' + e.message);
    } finally {
      lock.releaseLock();
    }
  },

  /**
   * Persetujuan / Penolakan Peminjaman oleh Petugas atau Pimpinan
   * @param {string} token 
   * @param {string} idPinjam 
   * @param {string} aksi 'SETUJU' atau 'TOLAK'
   * @param {string} catatan 
   */
  prosesPersetujuan(token, idPinjam, aksi, catatan = '') {
    const user = Auth.cekHak(token, [CONFIG.ROLES.ADMIN, CONFIG.ROLES.PETUGAS, CONFIG.ROLES.PIMPINAN]);

    const lock = Util.getLock();
    try {
      const sheetPinjam = getSheet(CONFIG.SHEETS.PEMINJAMAN);
      const loans = Util.sheetToObjects(sheetPinjam);
      const loan = loans.find(p => p.ID_Pinjam === idPinjam);

      if (!loan) {
        return Util.buildResponse(false, null, 'Data peminjaman tidak ditemukan.');
      }

      if (loan.Status_Pinjam !== CONFIG.LOAN_STATUS.MENUNGGU) {
        return Util.buildResponse(false, null, `Peminjaman ini sudah berstatus '${loan.Status_Pinjam}'.`);
      }

      // Ambil detail arsip untuk cek tingkat akses
      const sheetArsip = getSheet(CONFIG.SHEETS.ARSIP);
      const archives = Util.sheetToObjects(sheetArsip);
      const arsip = archives.find(a => a.ID_Arsip === loan.ID_Arsip);

      if (!arsip) {
        return Util.buildResponse(false, null, 'Arsip terkait tidak ditemukan.');
      }

      // Pengecekan wewenang: Arsip Rahasia hanya boleh disetujui oleh Pimpinan atau Admin
      if (arsip.Tingkat_Akses === CONFIG.ACCESS_LEVELS.RAHASIA) {
        if (user.role !== CONFIG.ROLES.PIMPINAN && user.role !== CONFIG.ROLES.ADMIN) {
          return Util.buildResponse(false, null, 'Peminjaman arsip berkategori RAHASIA wajib disetujui oleh Pimpinan atau Admin.');
        }
      }

      // Ambil email peminjam dari sheet Users
      const sheetUsers = getSheet(CONFIG.SHEETS.USERS);
      const users = Util.sheetToObjects(sheetUsers);
      const borrowerUser = users.find(u => u.Username === loan.Username_Peminjam);
      const borrowerEmail = borrowerUser ? borrowerUser.Email : '';

      const rowIndex = loan._rowIndex;
      const nowStr = Util.nowTimestamp();
      const todayStr = Util.todayString();
      const colMap = CONFIG.HEADERS.Peminjaman;

      if (aksi === 'SETUJU') {
        if (loan.Jenis_Pinjam === 'Digital') {
          // Berikan akses lihat sementara pada berkas Google Drive
          if (arsip.ID_File_Drive && borrowerEmail) {
            DriveService.berikanAksesDigital(arsip.ID_File_Drive, borrowerEmail);
          }
          sheetPinjam.getRange(rowIndex, colMap.indexOf('Status_Pinjam') + 1).setValue(CONFIG.LOAN_STATUS.DIPINJAM);
          sheetPinjam.getRange(rowIndex, colMap.indexOf('Tanggal_Keluar') + 1).setValue(todayStr);
        } else {
          // Peminjaman fisik disetujui, menunggu pengambilan fisik
          sheetPinjam.getRange(rowIndex, colMap.indexOf('Status_Pinjam') + 1).setValue(CONFIG.LOAN_STATUS.DISETUJUI);
        }

        sheetPinjam.getRange(rowIndex, colMap.indexOf('Diproses_Oleh') + 1).setValue(user.username);
        sheetPinjam.getRange(rowIndex, colMap.indexOf('Catatan') + 1).setValue(catatan || 'Disetujui');

        Util.catatLog(user.username, user.role, 'SETUJUI_PINJAM', 'PEMINJAMAN', idPinjam, `Menyetujui pinjam ${idPinjam} (${loan.Jenis_Pinjam})`, 'SUKSES');
        NotifikasiService.kirimNotifikasiStatusPinjam(loan, arsip, borrowerUser, 'DISETUJUI', catatan);

        return Util.buildResponse(true, null, `Peminjaman '${idPinjam}' berhasil disetujui.`);
      } else if (aksi === 'TOLAK') {
        sheetPinjam.getRange(rowIndex, colMap.indexOf('Status_Pinjam') + 1).setValue(CONFIG.LOAN_STATUS.DITOLAK);
        sheetPinjam.getRange(rowIndex, colMap.indexOf('Diproses_Oleh') + 1).setValue(user.username);
        sheetPinjam.getRange(rowIndex, colMap.indexOf('Catatan') + 1).setValue(catatan || 'Ditolak');

        Util.catatLog(user.username, user.role, 'TOLAK_PINJAM', 'PEMINJAMAN', idPinjam, `Menolak pinjam ${idPinjam}. Alasan: ${catatan}`, 'SUKSES');
        NotifikasiService.kirimNotifikasiStatusPinjam(loan, arsip, borrowerUser, 'DITOLAK', catatan);

        return Util.buildResponse(true, null, `Peminjaman '${idPinjam}' telah ditolak.`);
      } else {
        return Util.buildResponse(false, null, 'Aksi persetujuan tidak valid.');
      }
    } finally {
      lock.releaseLock();
    }
  },

  /**
   * Serah Terima Fisik (Petugas menyerahkan dokumen fisik ke peminjam)
   * @param {string} token 
   * @param {string} idPinjam 
   */
  serahFisikArsip(token, idPinjam) {
    const user = Auth.cekHak(token, [CONFIG.ROLES.ADMIN, CONFIG.ROLES.PETUGAS]);
    const lock = Util.getLock();
    try {
      const sheetPinjam = getSheet(CONFIG.SHEETS.PEMINJAMAN);
      const loans = Util.sheetToObjects(sheetPinjam);
      const loan = loans.find(p => p.ID_Pinjam === idPinjam);

      if (!loan) {
        return Util.buildResponse(false, null, 'Data peminjaman tidak ditemukan.');
      }

      if (loan.Status_Pinjam !== CONFIG.LOAN_STATUS.DISETUJUI) {
        return Util.buildResponse(false, null, 'Arsip hanya dapat diserahkan jika sudah disetujui.');
      }

      const rowIndex = loan._rowIndex;
      const colMap = CONFIG.HEADERS.Peminjaman;
      sheetPinjam.getRange(rowIndex, colMap.indexOf('Status_Pinjam') + 1).setValue(CONFIG.LOAN_STATUS.DIPINJAM);
      sheetPinjam.getRange(rowIndex, colMap.indexOf('Tanggal_Keluar') + 1).setValue(Util.todayString());

      Util.catatLog(user.username, user.role, 'SERAH_FISIK', 'PEMINJAMAN', idPinjam, `Serah terima dokumen fisik ${idPinjam}`, 'SUKSES');
      return Util.buildResponse(true, null, `Dokumen fisik '${idPinjam}' berhasil diserahkan ke peminjam.`);
    } finally {
      lock.releaseLock();
    }
  },

  /**
   * Proses Pengembalian Arsip (Fisik atau Digital)
   * @param {string} token 
   * @param {string} idPinjam 
   * @param {string} kondisiKembali 'Baik', 'Rusak', 'Hilang'
   * @param {string} catatan 
   */
  prosesPengembalian(token, idPinjam, kondisiKembali = 'Baik', catatan = '') {
    const user = Auth.cekHak(token, [CONFIG.ROLES.ADMIN, CONFIG.ROLES.PETUGAS]);

    const lock = Util.getLock();
    try {
      const sheetPinjam = getSheet(CONFIG.SHEETS.PEMINJAMAN);
      const loans = Util.sheetToObjects(sheetPinjam);
      const loan = loans.find(p => p.ID_Pinjam === idPinjam);

      if (!loan) {
        return Util.buildResponse(false, null, 'Data peminjaman tidak ditemukan.');
      }

      if (loan.Status_Pinjam !== CONFIG.LOAN_STATUS.DIPINJAM && loan.Status_Pinjam !== CONFIG.LOAN_STATUS.TERLAMBAT) {
        return Util.buildResponse(false, null, `Peminjaman ini berstatus '${loan.Status_Pinjam}', tidak dapat dikembalikan.`);
      }

      // Ambil detail arsip untuk cabut akses drive jika digital
      const sheetArsip = getSheet(CONFIG.SHEETS.ARSIP);
      const archives = Util.sheetToObjects(sheetArsip);
      const arsip = archives.find(a => a.ID_Arsip === loan.ID_Arsip);

      const sheetUsers = getSheet(CONFIG.SHEETS.USERS);
      const users = Util.sheetToObjects(sheetUsers);
      const borrowerUser = users.find(u => u.Username === loan.Username_Peminjam);

      if (loan.Jenis_Pinjam === 'Digital' && arsip && arsip.ID_File_Drive && borrowerUser && borrowerUser.Email) {
        DriveService.cabutAksesDigital(arsip.ID_File_Drive, borrowerUser.Email);
      }

      const rowIndex = loan._rowIndex;
      const todayStr = Util.todayString();
      const colMap = CONFIG.HEADERS.Peminjaman;

      sheetPinjam.getRange(rowIndex, colMap.indexOf('Status_Pinjam') + 1).setValue(CONFIG.LOAN_STATUS.SELESAI);
      sheetPinjam.getRange(rowIndex, colMap.indexOf('Tanggal_Kembali') + 1).setValue(todayStr);
      sheetPinjam.getRange(rowIndex, colMap.indexOf('Kondisi_Kembali') + 1).setValue(kondisiKembali);
      if (catatan) {
        sheetPinjam.getRange(rowIndex, colMap.indexOf('Catatan') + 1).setValue(catatan);
      }

      Util.catatLog(user.username, user.role, 'PENGEMBALIAN', 'PEMINJAMAN', idPinjam, `Pengembalian arsip ${idPinjam}. Kondisi: ${kondisiKembali}`, 'SUKSES');
      NotifikasiService.kirimNotifikasiPengembalian(loan, arsip, borrowerUser, kondisiKembali);

      return Util.buildResponse(true, null, `Peminjaman '${idPinjam}' berhasil diselesaikan.`);
    } finally {
      lock.releaseLock();
    }
  },

  /**
   * Mengambil daftar riwayat peminjaman dengan filter
   * @param {string} token 
   * @param {Object} params 
   */
  getDaftarPeminjaman(token, params = {}) {
    const user = Auth.validateSession(token);
    const sheetPinjam = getSheet(CONFIG.SHEETS.PEMINJAMAN);
    let items = Util.sheetToObjects(sheetPinjam);

    // Jika role Peminjam, hanya tampilkan peminjaman miliknya sendiri
    if (user.role === CONFIG.ROLES.PEMINJAM) {
      items = items.filter(p => p.Username_Peminjam === user.username);
    }

    // Filter berdasarkan status
    if (params.status) {
      items = items.filter(p => p.Status_Pinjam === params.status);
    }

    // Filter berdasarkan jenis pinjam
    if (params.jenisPinjam) {
      items = items.filter(p => p.Jenis_Pinjam === params.jenisPinjam);
    }

    // Urutkan dari yang terbaru diajukan
    items.sort((a, b) => new Date(b.Tanggal_Pengajuan) - new Date(a.Tanggal_Pengajuan));

    // Gabungkan dengan info judul arsip untuk memudahkan antarmuka
    const sheetArsip = getSheet(CONFIG.SHEETS.ARSIP);
    const arsipList = Util.sheetToObjects(sheetArsip);
    const arsipMap = {};
    arsipList.forEach(a => {
      arsipMap[a.ID_Arsip] = a;
    });

    const enriched = items.map(p => {
      const copy = Object.assign({}, p);
      delete copy._rowIndex;
      const refArsip = arsipMap[p.ID_Arsip];
      copy.Judul_Arsip = refArsip ? refArsip.Judul_Perihal : '-';
      copy.Nomor_Dokumen = refArsip ? refArsip.Nomor_Dokumen : '-';
      copy.Tingkat_Akses = refArsip ? refArsip.Tingkat_Akses : 'Umum';
      return copy;
    });

    return Util.buildResponse(true, enriched, 'Data peminjaman berhasil diambil.');
  }
};


// ==================== FILE: LaporanService.gs ====================

/**
 * ============================================================================
 * HANARSIP (Hanoco Arsip) - Sistem Kearsipan Digital PT. Hanoco Interior Arsitektur
 * File: LaporanService.gs
 * Deskripsi: Modul statistik dashboard, visualisasi grafik Chart.js bernuansa navy,
 *            serta pelaporan rekapitulasi kearsipan & audit trail.
 * ============================================================================
 */

const LaporanService = {
  /**
   * Menghitung statistik lengkap untuk dashboard
   * @param {string} token 
   */
  getDashboardStats(token) {
    const user = Auth.validateSession(token);
    const sheetArsip = getSheet(CONFIG.SHEETS.ARSIP);
    const allArsip = Util.sheetToObjects(sheetArsip).filter(a => String(a.Is_Deleted).toUpperCase() !== 'TRUE');

    const sheetPinjam = getSheet(CONFIG.SHEETS.PEMINJAMAN);
    const allPinjam = Util.sheetToObjects(sheetPinjam);

    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = ('0' + (now.getMonth() + 1)).slice(-2);
    const currentMonthPrefix = `${currentYear}-${currentMonth}`;
    const todayStr = Util.todayString();

    // 1. Total Arsip
    const totalArsip = allArsip.length;

    // 2. Arsip Bulan Ini
    const arsipBulanIni = allArsip.filter(a => String(a.Tanggal_Dokumen || a.Waktu_Input).startsWith(currentMonthPrefix)).length;

    // 3. Sedang Dipinjam
    const sedangDipinjam = allPinjam.filter(p => p.Status_Pinjam === CONFIG.LOAN_STATUS.DIPINJAM || p.Status_Pinjam === CONFIG.LOAN_STATUS.DISETUJUI).length;

    // 4. Pinjaman Terlambat
    const pinjamanTerlambat = allPinjam.filter(p => {
      if (p.Status_Pinjam === CONFIG.LOAN_STATUS.TERLAMBAT) return true;
      if (p.Status_Pinjam === CONFIG.LOAN_STATUS.DIPINJAM && p.Tanggal_Rencana_Kembali && p.Tanggal_Rencana_Kembali < todayStr) return true;
      return false;
    }).length;

    // 5. Arsip Mendekati Retensi (dalam 60 hari ke depan)
    const sixtyDaysLater = new Date(now.getTime() + (60 * 24 * 60 * 60 * 1000));
    const sixtyDaysStr = Util.formatDate(sixtyDaysLater, 'yyyy-MM-dd');
    const arsipMendekatiRetensi = allArsip.filter(a => {
      const ret = String(a.Tanggal_Retensi || '');
      return ret && ret >= todayStr && ret <= sixtyDaysStr && a.Status_Arsip === CONFIG.ARCHIVE_STATUS.AKTIF;
    }).length;

    // 6. Distribusi Klasifikasi (Chart 1 - Doughnut)
    const masterKlas = ArsipService.getMasterKlasifikasi();
    const klasCounts = {};
    masterKlas.forEach(k => {
      klasCounts[k.Kode_Klasifikasi] = {
        kode: k.Kode_Klasifikasi,
        nama: k.Nama_Klasifikasi,
        count: 0
      };
    });

    allArsip.forEach(a => {
      const code = a.Kode_Klasifikasi;
      if (klasCounts[code]) {
        klasCounts[code].count++;
      } else {
        klasCounts[code] = { kode: code, nama: code, count: 1 };
      }
    });

    const chartKlasifikasi = {
      labels: Object.values(klasCounts).map(k => `${k.kode} - ${k.nama}`),
      data: Object.values(klasCounts).map(k => k.count)
    };

    // 7. Tren Penambahan Arsip 6 Bulan Terakhir (Chart 2 - Line/Bar)
    const bulanLabels = [];
    const bulanCounts = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const yyyy = d.getFullYear();
      const mm = ('0' + (d.getMonth() + 1)).slice(-2);
      const prefix = `${yyyy}-${mm}`;
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
      bulanLabels.push(`${monthNames[d.getMonth()]} ${yyyy}`);

      const count = allArsip.filter(a => String(a.Tanggal_Dokumen || a.Waktu_Input).startsWith(prefix)).length;
      bulanCounts.push(count);
    }

    const chartTren = {
      labels: bulanLabels,
      data: bulanCounts
    };

    // 8. 5 Arsip Terbaru
    const sortedArsip = allArsip.slice().sort((a, b) => new Date(b.Waktu_Input || b.Tanggal_Dokumen) - new Date(a.Waktu_Input || a.Tanggal_Dokumen));
    const arsipTerbaru = sortedArsip.slice(0, 5).map(a => {
      const copy = Object.assign({}, a);
      delete copy._rowIndex;
      return copy;
    });

    // 9. Pinjaman Jatuh Tempo / Terlambat
    const pinjamanJatuhTempo = allPinjam
      .filter(p => (p.Status_Pinjam === CONFIG.LOAN_STATUS.DIPINJAM || p.Status_Pinjam === CONFIG.LOAN_STATUS.TERLAMBAT))
      .sort((a, b) => (a.Tanggal_Rencana_Kembali || '').localeCompare(b.Tanggal_Rencana_Kembali || ''))
      .slice(0, 5)
      .map(p => {
        const copy = Object.assign({}, p);
        delete copy._rowIndex;
        return copy;
      });

    return Util.buildResponse(true, {
      summary: {
        totalArsip,
        arsipBulanIni,
        sedangDipinjam,
        pinjamanTerlambat,
        arsipMendekatiRetensi
      },
      chartKlasifikasi,
      chartTren,
      arsipTerbaru,
      pinjamanJatuhTempo
    }, 'Statistik dashboard berhasil dimuat.');
  },

  /**
   * Menghasilkan Laporan Rekapitulasi Berdasarkan Rentang Waktu & Filter
   * @param {string} token 
   * @param {Object} filter 
   */
  getLaporanRekap(token, filter = {}) {
    Auth.cekHak(token, [CONFIG.ROLES.ADMIN, CONFIG.ROLES.PETUGAS, CONFIG.ROLES.PIMPINAN]);

    const sheetArsip = getSheet(CONFIG.SHEETS.ARSIP);
    let items = Util.sheetToObjects(sheetArsip).filter(a => String(a.Is_Deleted).toUpperCase() !== 'TRUE');

    const { tglMulai, tglSelesai, kodeKlasifikasi, jenisArsip, statusArsip } = filter;

    if (tglMulai) {
      items = items.filter(a => String(a.Tanggal_Dokumen || '') >= tglMulai);
    }
    if (tglSelesai) {
      items = items.filter(a => String(a.Tanggal_Dokumen || '') <= tglSelesai);
    }
    if (kodeKlasifikasi) {
      items = items.filter(a => a.Kode_Klasifikasi === kodeKlasifikasi);
    }
    if (jenisArsip) {
      items = items.filter(a => a.Jenis_Arsip === jenisArsip);
    }
    if (statusArsip) {
      items = items.filter(a => a.Status_Arsip === statusArsip);
    }

    items.sort((a, b) => (a.Tanggal_Dokumen || '').localeCompare(b.Tanggal_Dokumen || ''));

    const cleanItems = items.map(a => {
      const copy = Object.assign({}, a);
      delete copy._rowIndex;
      return copy;
    });

    return Util.buildResponse(true, {
      total: cleanItems.length,
      filter: filter,
      generatedAt: Util.nowTimestamp(),
      items: cleanItems
    }, 'Laporan rekapitulasi berhasil digenerate.');
  },

  /**
   * Mengambil riwayat Log Aktivitas / Audit Trail (Khusus Admin)
   * @param {string} token 
   * @param {number} limit 
   */
  getLogAktivitas(token, limit = 100) {
    Auth.cekHak(token, [CONFIG.ROLES.ADMIN]);
    const sheet = getSheet(CONFIG.SHEETS.LOG);
    const logs = Util.sheetToObjects(sheet);

    // Ambil log terbaru di atas
    logs.reverse();
    const result = logs.slice(0, limit).map(l => {
      const copy = Object.assign({}, l);
      delete copy._rowIndex;
      return copy;
    });

    return Util.buildResponse(true, result, 'Log audit trail berhasil diambil.');
  }
};


// ==================== FILE: NotifikasiService.gs ====================

/**
 * ============================================================================
 * HANARSIP (Hanoco Arsip) - Sistem Kearsipan Digital PT. Hanoco Interior Arsitektur
 * File: NotifikasiService.gs
 * Deskripsi: Notifikasi email otomatis (MailApp), trigger terjadwal harian (H-1,
 *            status terlambat, peringatan retensi), dan trigger mingguan backup.
 * ============================================================================
 */

const NotifikasiService = {
  /**
   * Helper format email template bernuansa korporat HANARSIP
   */
  buatTemplateEmail(judul, isiKonten) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0B1F3A; padding: 20px; text-align: center; color: #FFFFFF;">
          <h2 style="margin: 0; font-size: 20px; letter-spacing: 1px;">PT. HANOCO INTERIOR ARSITEKTUR</h2>
          <p style="margin: 5px 0 0 0; font-size: 13px; color: #94A3B8;">HANARSIP - Sistem Manajemen Kearsipan Digital</p>
        </div>
        <div style="padding: 25px; background-color: #FFFFFF; color: #334155; line-height: 1.6;">
          <h3 style="color: #0B1F3A; margin-top: 0; border-bottom: 2px solid #F1F5F9; padding-bottom: 10px;">${judul}</h3>
          ${isiKonten}
        </div>
        <div style="background-color: #F8FAFC; padding: 15px; text-align: center; font-size: 11px; color: #64748B; border-top: 1px solid #E2E8F0;">
          <p style="margin: 0;">Email ini dikirim secara otomatis oleh sistem HANARSIP. Mohon tidak membalas email ini.</p>
          <p style="margin: 4px 0 0 0;">&copy; ${new Date().getFullYear()} PT. Hanoco Interior Arsitektur. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    `;
  },

  /**
   * Mengirim notifikasi email saat ada pengajuan peminjaman baru
   */
  kirimNotifikasiPengajuanPinjam(idPinjam, arsip, peminjam) {
    try {
      // Ambil daftar email Petugas dan Admin
      const sheetUsers = getSheet(CONFIG.SHEETS.USERS);
      const users = Util.sheetToObjects(sheetUsers);
      
      const targetRoles = [CONFIG.ROLES.ADMIN, CONFIG.ROLES.PETUGAS];
      if (arsip.Tingkat_Akses === CONFIG.ACCESS_LEVELS.RAHASIA) {
        targetRoles.push(CONFIG.ROLES.PIMPINAN);
      }

      const recipientEmails = users
        .filter(u => targetRoles.includes(u.Role) && u.Status_Akun === 'Aktif' && u.Email)
        .map(u => u.Email);

      if (recipientEmails.length === 0) return;

      const subject = `[HANARSIP] Pengajuan Peminjaman Baru: ${idPinjam} (${arsip.ID_Arsip})`;
      const content = `
        <p>Halo Tim Kearsipan / Pimpinan,</p>
        <p>Telah diterima pengajuan peminjaman arsip baru dengan rincian sebagai berikut:</p>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 13px;">
          <tr><td style="padding: 6px; font-weight: bold; width: 140px; border-bottom: 1px solid #eee;">ID Pinjam:</td><td style="padding: 6px; border-bottom: 1px solid #eee;">${idPinjam}</td></tr>
          <tr><td style="padding: 6px; font-weight: bold; border-bottom: 1px solid #eee;">ID Arsip:</td><td style="padding: 6px; border-bottom: 1px solid #eee;">${arsip.ID_Arsip}</td></tr>
          <tr><td style="padding: 6px; font-weight: bold; border-bottom: 1px solid #eee;">Judul Dokumen:</td><td style="padding: 6px; border-bottom: 1px solid #eee;">${arsip.Judul_Perihal}</td></tr>
          <tr><td style="padding: 6px; font-weight: bold; border-bottom: 1px solid #eee;">Tingkat Akses:</td><td style="padding: 6px; border-bottom: 1px solid #eee;">${arsip.Tingkat_Akses}</td></tr>
          <tr><td style="padding: 6px; font-weight: bold; border-bottom: 1px solid #eee;">Peminjam:</td><td style="padding: 6px; border-bottom: 1px solid #eee;">${peminjam.namaLengkap} (${peminjam.username} - ${peminjam.divisi})</td></tr>
        </table>
        <p>Silakan masuk ke aplikasi web HANARSIP untuk memverifikasi dan memproses pengajuan ini.</p>
      `;

      MailApp.sendEmail({
        to: recipientEmails.join(','),
        subject: subject,
        htmlBody: this.buatTemplateEmail('Pengajuan Peminjaman Arsip', content)
      });
    } catch (e) {
      console.warn('Gagal kirim email pengajuan pinjam: ' + e.message);
    }
  },

  /**
   * Mengirim notifikasi perubahan status peminjaman ke email peminjam
   */
  kirimNotifikasiStatusPinjam(loan, arsip, borrowerUser, status, catatan) {
    if (!borrowerUser || !borrowerUser.Email) return;

    try {
      const isApproved = status === 'DISETUJUI';
      const subject = `[HANARSIP] Peminjaman ${loan.ID_Pinjam} - ${isApproved ? 'Disetujui' : 'Ditolak'}`;

      let detailAkses = '';
      if (isApproved && loan.Jenis_Pinjam === 'Digital' && arsip.Tautan_File) {
        detailAkses = `
          <div style="background-color: #EFF6FF; border-left: 4px solid #16325C; padding: 12px; margin: 15px 0;">
            <p style="margin: 0; font-weight: bold; color: #0B1F3A;">Tautan Pratinjau Digital:</p>
            <p style="margin: 5px 0 0 0;"><a href="${arsip.Tautan_File}" target="_blank" style="color: #16325C; text-decoration: underline;">Klik di sini untuk membuka berkas di Google Drive</a></p>
            <small style="color: #64748B;">Akses melihat berkas ini bersifat sementara hingga tanggal rencana kembali: <b>${loan.Tanggal_Rencana_Kembali}</b>.</small>
          </div>
        `;
      } else if (isApproved && loan.Jenis_Pinjam === 'Fisik') {
        detailAkses = `
          <p>Silakan mengambil dokumen fisik di ruang kearsipan / petugas arsip dengan menunjukkan ID Peminjaman: <b>${loan.ID_Pinjam}</b>.</p>
        `;
      }

      const content = `
        <p>Kepada Yth. <b>${borrowerUser.Nama_Lengkap}</b>,</p>
        <p>Pengajuan peminjaman arsip Anda dengan nomor <b>${loan.ID_Pinjam}</b> (${arsip.Judul_Perihal}) telah dinyatakan: 
          <b style="color: ${isApproved ? '#059669' : '#DC2626'}; font-size: 15px;">${isApproved ? 'DISETUJUI' : 'DITOLAK'}</b>.
        </p>
        ${detailAkses}
        ${catatan ? `<p><b>Catatan Petugas:</b> ${catatan}</p>` : ''}
        <p>Terima kasih atas kerja samanya dalam menjaga tertib administrasi kearsipan.</p>
      `;

      MailApp.sendEmail({
        to: borrowerUser.Email,
        subject: subject,
        htmlBody: this.buatTemplateEmail('Status Pengajuan Peminjaman', content)
      });
    } catch (e) {
      console.warn('Gagal kirim notifikasi status pinjam: ' + e.message);
    }
  },

  /**
   * Mengirim notifikasi pengembalian arsip
   */
  kirimNotifikasiPengembalian(loan, arsip, borrowerUser, kondisiKembali) {
    if (!borrowerUser || !borrowerUser.Email) return;

    try {
      const subject = `[HANARSIP] Bukti Pengembalian Arsip: ${loan.ID_Pinjam}`;
      const content = `
        <p>Kepada Yth. <b>${borrowerUser.Nama_Lengkap}</b>,</p>
        <p>Arsip dengan rincian berikut telah resmi tercatat dikembalikan ke sistem HANARSIP:</p>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 13px;">
          <tr><td style="padding: 6px; font-weight: bold; width: 140px; border-bottom: 1px solid #eee;">ID Pinjam:</td><td style="padding: 6px; border-bottom: 1px solid #eee;">${loan.ID_Pinjam}</td></tr>
          <tr><td style="padding: 6px; font-weight: bold; border-bottom: 1px solid #eee;">ID Arsip:</td><td style="padding: 6px; border-bottom: 1px solid #eee;">${arsip.ID_Arsip}</td></tr>
          <tr><td style="padding: 6px; font-weight: bold; border-bottom: 1px solid #eee;">Judul Dokumen:</td><td style="padding: 6px; border-bottom: 1px solid #eee;">${arsip.Judul_Perihal}</td></tr>
          <tr><td style="padding: 6px; font-weight: bold; border-bottom: 1px solid #eee;">Tanggal Pengembalian:</td><td style="padding: 6px; border-bottom: 1px solid #eee;">${Util.todayString()}</td></tr>
          <tr><td style="padding: 6px; font-weight: bold; border-bottom: 1px solid #eee;">Kondisi Dokumen:</td><td style="padding: 6px; border-bottom: 1px solid #eee;">${kondisiKembali}</td></tr>
        </table>
        <p>Terima kasih telah mengembalikan arsip tepat waktu.</p>
      `;

      MailApp.sendEmail({
        to: borrowerUser.Email,
        subject: subject,
        htmlBody: this.buatTemplateEmail('Pengembalian Arsip Selesai', content)
      });
    } catch (e) {
      console.warn('Gagal kirim email pengembalian: ' + e.message);
    }
  },

  // ==========================================
  // PEKERJAAN TERJADWAL OTOMATIS (TRIGGER JOBS)
  // ==========================================

  /**
   * Trigger Terjadwal Harian (Dijalankan setiap pagi pukul 06:00 - 07:00)
   * 1. Pengingat H-1 Jatuh Tempo Peminjaman
   * 2. Menandai peminjaman yang Terlambat & mencabut akses digital
   * 3. Peringatan arsip mendekati masa retensi aktif
   */
  triggerHarian() {
    console.log('Memulai eksekusi trigger harian HANARSIP...');
    const now = new Date();
    const todayStr = Util.todayString();

    const tomorrow = new Date(now.getTime() + (24 * 60 * 60 * 1000));
    const tomorrowStr = Util.formatDate(tomorrow, 'yyyy-MM-dd');

    const sheetPinjam = getSheet(CONFIG.SHEETS.PEMINJAMAN);
    const loans = Util.sheetToObjects(sheetPinjam);

    const sheetUsers = getSheet(CONFIG.SHEETS.USERS);
    const users = Util.sheetToObjects(sheetUsers);
    const userMap = {};
    users.forEach(u => { userMap[u.Username] = u; });

    const sheetArsip = getSheet(CONFIG.SHEETS.ARSIP);
    const archives = Util.sheetToObjects(sheetArsip);
    const arsipMap = {};
    archives.forEach(a => { arsipMap[a.ID_Arsip] = a; });

    // 1 & 2: Cek Peminjaman H-1 dan Terlambat
    loans.forEach(loan => {
      if (loan.Status_Pinjam === CONFIG.LOAN_STATUS.DIPINJAM) {
        const tglKembali = loan.Tanggal_Rencana_Kembali;
        const borrower = userMap[loan.Username_Peminjam];
        const arsip = arsipMap[loan.ID_Arsip];

        // Pengingat H-1
        if (tglKembali === tomorrowStr && borrower && borrower.Email) {
          try {
            MailApp.sendEmail({
              to: borrower.Email,
              subject: `[HANARSIP] Pengingat H-1 Jatuh Tempo Peminjaman: ${loan.ID_Pinjam}`,
              htmlBody: NotifikasiService.buatTemplateEmail(
                'Pengingat Jatuh Tempo Peminjaman (H-1)',
                `<p>Kepada Yth. <b>${borrower.Nama_Lengkap}</b>,</p>
                 <p>Masa peminjaman arsip Anda dengan ID <b>${loan.ID_Pinjam}</b> (${arsip ? arsip.Judul_Perihal : '-'}) akan berakhir besok pada <b>${loan.Tanggal_Rencana_Kembali}</b>.</p>
                 <p>Harap segera mempersiapkan pengembalian dokumen fisik atau penyelesaian peminjaman digital.</p>`
              )
            });
          } catch (e) {
            console.warn('Gagal kirim reminder H-1: ' + e.message);
          }
        }

        // Sudah Lewat Tanggal Rencana Kembali -> Tandai Terlambat
        if (tglKembali && tglKembali < todayStr) {
          const rowIndex = loan._rowIndex;
          sheetPinjam.getRange(rowIndex, CONFIG.HEADERS.Peminjaman.indexOf('Status_Pinjam') + 1).setValue(CONFIG.LOAN_STATUS.TERLAMBAT);

          // Cabut akses digital jika ada
          if (loan.Jenis_Pinjam === 'Digital' && arsip && arsip.ID_File_Drive && borrower && borrower.Email) {
            DriveService.cabutAksesDigital(arsip.ID_File_Drive, borrower.Email);
          }

          // Kirim email peringatan keterlambatan
          if (borrower && borrower.Email) {
            try {
              MailApp.sendEmail({
                to: borrower.Email,
                subject: `[PERINGATAN] Keterlambatan Pengembalian Arsip: ${loan.ID_Pinjam}`,
                htmlBody: NotifikasiService.buatTemplateEmail(
                  'Peringatan Keterlambatan Pengembalian Arsip',
                  `<p>Kepada Yth. <b>${borrower.Nama_Lengkap}</b>,</p>
                   <p style="color: #DC2626; font-weight: bold;">Peminjaman arsip Anda (${loan.ID_Pinjam}) telah melewati batas waktu rencana kembali (${loan.Tanggal_Rencana_Kembali}) dan kini berstatus TERLAMBAT.</p>
                   <p>Akses digital (jika ada) telah dinonaktifkan otomatis. Harap segera menghubungi petugas kearsipan.</p>`
                )
              });
            } catch (e) {
              console.warn('Gagal kirim peringatan terlambat: ' + e.message);
            }
          }
        }
      }
    });

    // 3: Cek Arsip Mendekati Retensi (<= 60 hari)
    const sixtyDaysLater = new Date(now.getTime() + (60 * 24 * 60 * 60 * 1000));
    const sixtyDaysStr = Util.formatDate(sixtyDaysLater, 'yyyy-MM-dd');
    const arsipRetensiWarning = archives.filter(a => {
      const ret = String(a.Tanggal_Retensi || '');
      return ret && ret >= todayStr && ret <= sixtyDaysStr && a.Status_Arsip === CONFIG.ARCHIVE_STATUS.AKTIF && String(a.Is_Deleted).toUpperCase() !== 'TRUE';
    });

    if (arsipRetensiWarning.length > 0) {
      const petugasEmails = users
        .filter(u => (u.Role === CONFIG.ROLES.ADMIN || u.Role === CONFIG.ROLES.PETUGAS) && u.Status_Akun === 'Aktif' && u.Email)
        .map(u => u.Email);

      if (petugasEmails.length > 0) {
        let listHtml = '<ul>';
        arsipRetensiWarning.slice(0, 10).forEach(a => {
          listHtml += `<li><b>${a.ID_Arsip}</b>: ${a.Judul_Perihal} (Jatuh Retensi: ${a.Tanggal_Retensi})</li>`;
        });
        if (arsipRetensiWarning.length > 10) {
          listHtml += `<li>... dan ${arsipRetensiWarning.length - 10} arsip lainnya.</li>`;
        }
        listHtml += '</ul>';

        try {
          MailApp.sendEmail({
            to: petugasEmails.join(','),
            subject: `[HANARSIP] Pemberitahuan: ${arsipRetensiWarning.length} Arsip Mendekati Masa Retensi`,
            htmlBody: NotifikasiService.buatTemplateEmail(
              'Peringatan Masa Retensi Arsip',
              `<p>Halo Tim Kearsipan,</p>
               <p>Terdapat sebanyak <b>${arsipRetensiWarning.length} arsip</b> yang akan mencapai batas masa retensinya dalam 60 hari ke depan:</p>
               ${listHtml}
               <p>Silakan lakukan peninjauan penilaian kembali atau persiapan pemindahan/pemusnahan sesuai jadwal retensi arsip.</p>`
            )
          });
        } catch (e) {
          console.warn('Gagal kirim email retensi: ' + e.message);
        }
      }
    }

    Util.catatLog('SISTEM_TRIGGER', 'Sistem', 'TRIGGER_HARIAN', 'SISTEM', '-', 'Eksekusi trigger harian selesai', 'SUKSES');
  },

  /**
   * Trigger Terjadwal Mingguan: Backup Database Spreadsheet DB_HANARSIP
   */
  triggerMingguanBackup() {
    console.log('Memulai eksekusi trigger mingguan backup database...');
    try {
      const backupId = DriveService.lakukanBackupDatabase();
      Util.catatLog('SISTEM_TRIGGER', 'Sistem', 'BACKUP_MINGGUAN', 'SISTEM', backupId, 'Backup database mingguan berhasil disimpan ke Google Drive', 'SUKSES');
      console.log('Backup mingguan berhasil, ID File: ' + backupId);
    } catch (e) {
      console.error('Gagal menjalankan backup mingguan: ' + e.message);
      Util.catatLog('SISTEM_TRIGGER', 'Sistem', 'BACKUP_MINGGUAN', 'SISTEM', '-', 'Gagal backup: ' + e.message, 'GAGAL');
    }
  },

  /**
   * Memasang trigger otomatis di Apps Script
   */
  pasangTriggerOtomatis() {
    // Hapus trigger lama yang memiliki nama fungsi serupa agar tidak duplikat
    const existingTriggers = ScriptApp.getProjectTriggers();
    existingTriggers.forEach(trigger => {
      const fnName = trigger.getHandlerFunction();
      if (fnName === 'triggerHarian' || fnName === 'triggerMingguanBackup') {
        ScriptApp.deleteTrigger(trigger);
      }
    });

    // 1. Trigger Harian pukul 06:00 pagi
    ScriptApp.newTrigger('triggerHarian')
      .timeBased()
      .atHour(6)
      .everyDays(1)
      .inTimezone(CONFIG.TIMEZONE)
      .create();

    // 2. Trigger Mingguan setiap hari Minggu pukul 23:00 malam
    ScriptApp.newTrigger('triggerMingguanBackup')
      .timeBased()
      .onWeekDay(ScriptApp.WeekDay.SUNDAY)
      .atHour(23)
      .inTimezone(CONFIG.TIMEZONE)
      .create();

    console.log('Trigger harian dan mingguan berhasil dipasang.');
    return true;
  }
};

// Global function wrappers untuk trigger Apps Script
function triggerHarian() {
  NotifikasiService.triggerHarian();
}

function triggerMingguanBackup() {
  NotifikasiService.triggerMingguanBackup();
}


// ==================== FILE: TNDService.gs ====================

/**
 * ============================================================================
 * HANARSIP (Hanoco Arsip) - Sistem Kearsipan Digital PT. Hanoco Interior Arsitektur
 * File: TNDService.gs
 * Deskripsi: Modul Tata Naskah Dinas (TND) - Penomoran surat resmi otomatis,
 *            registrasi agenda persuratan, draf naskah, dan integrasi kearsipan.
 * ============================================================================
 */

const TNDService = {
  // Sheet khusus registrasi naskah dinas
  SHEET_NAME: 'Naskah_Dinas',

  // Header sheet naskah dinas
  HEADERS: [
    'ID_Naskah', 'Nomor_Naskah', 'Jenis_Naskah', 'Kode_Jenis', 'Divisi_Pembuat',
    'Tanggal_Naskah', 'Perihal', 'Tujuan_Penerima', 'Penandatangan', 'Sifat',
    'Isi_Ringkas', 'Lampiran', 'Tembusan', 'Status', 'ID_Arsip_Terkait',
    'Dibuat_Oleh', 'Waktu_Dibuat'
  ],

  // Konversi angka bulan ke angka Romawi standar tata naskah
  toRomanMonth(monthNum) {
    const romans = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
    const m = parseInt(monthNum, 10);
    return romans[m] || 'I';
  },

  /**
   * Mengambil sheet Naskah_Dinas (jika belum ada, dibuat otomatis)
   * @returns {GoogleAppsScript.Spreadsheet.Sheet}
   */
  getSheetTND() {
    const ss = getSpreadsheet();
    let sheet = ss.getSheetByName(this.SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(this.SHEET_NAME);
      sheet.getRange(1, 1, 1, this.HEADERS.length).setValues([this.HEADERS]);
      const headerRange = sheet.getRange(1, 1, 1, this.HEADERS.length);
      headerRange.setBackground('#0B1F3A');
      headerRange.setFontColor('#FFFFFF');
      headerRange.setFontWeight('bold');
      headerRange.setHorizontalAlignment('center');
      sheet.setRowHeight(1, 35);
      sheet.setFrozenRows(1);
    }
    return sheet;
  },

  /**
   * Membuat Nomor Naskah Resmi Otomatis sesuai Kaidah Tata Naskah Dinas PT. Hanoco
   * Format: [No_Urut_3digit]/HIA-[Divisi]/[Kode_Jenis]/[Bulan_Romawi]/[Tahun]
   * Contoh: 001/HIA-DIR/ND/XI/2026
   * @param {string} kodeJenis Contoh: 'SRT', 'ND', 'ST', 'SK', 'BAST', 'MEMO'
   * @param {string} kodeDivisi Contoh: 'DIR', 'ARS', 'PRY', 'KEU', 'SDM', 'LGL'
   * @param {string|number} tahun 
   * @param {string|number} bulan 
   * @returns {string}
   */
  generateNomorNaskah(kodeJenis, kodeDivisi, tahun, bulan) {
    const t = String(tahun || new Date().getFullYear());
    const m = parseInt(bulan || (new Date().getMonth() + 1), 10);
    const romanM = this.toRomanMonth(m);
    const j = String(kodeJenis || 'SRT').toUpperCase().trim();
    const d = String(kodeDivisi || 'DIR').toUpperCase().trim();

    const sheet = this.getSheetTND();
    const data = sheet.getDataRange().getValues();

    let maxSeq = 0;
    const suffix = `/HIA-${d}/${j}/${romanM}/${t}`;

    if (data.length > 1) {
      const colIdx = this.HEADERS.indexOf('Nomor_Naskah');
      for (let i = 1; i < data.length; i++) {
        const val = String(data[i][colIdx] || '');
        if (val.endsWith(suffix)) {
          const parts = val.split('/');
          const seq = parseInt(parts[0], 10);
          if (!isNaN(seq) && seq > maxSeq) {
            maxSeq = seq;
          }
        }
      }
    }

    const nextSeq = maxSeq + 1;
    const seqStr = ('000' + nextSeq).slice(-3);
    return `${seqStr}${suffix}`;
  },

  /**
   * Registrasi Pembuatan Naskah Dinas Baru
   * @param {string} token 
   * @param {Object} payload 
   */
  buatNaskahDinas(token, payload) {
    const user = Auth.validateSession(token);
    const {
      jenisNaskah, kodeJenis, divisiPembuat, tanggalNaskah,
      perihal, tujuanPenerima, penandatangan, sifat,
      isiRingkas, lampiran, tembusan, arsipkanLangsung
    } = payload;

    if (!jenisNaskah || !kodeJenis || !divisiPembuat || !perihal || !tujuanPenerima) {
      return Util.buildResponse(false, null, 'Jenis naskah, divisi, perihal, dan tujuan penerima wajib diisi.');
    }

    const lock = Util.getLock();
    try {
      const sheet = this.getSheetTND();
      const d = tanggalNaskah ? new Date(tanggalNaskah) : new Date();
      const tahun = d.getFullYear();
      const bulan = d.getMonth() + 1;

      // 1. Generate Nomor Naskah Resmi
      const nomorResmi = this.generateNomorNaskah(kodeJenis, divisiPembuat, tahun, bulan);

      // 2. Generate ID Unik Naskah
      const idNaskah = 'TND-' + tahun + '-' + ('0000' + (sheet.getLastRow())).slice(-4);
      const nowStr = Util.nowTimestamp();
      const tglStr = Util.formatDate(d, 'yyyy-MM-dd');

      let idArsipTerkait = '-';

      // 3. Jika dipilih "Arsipkan Langsung", masukkan ke sheet Arsip HANARSIP
      if (arsipkanLangsung) {
        try {
          // Tentukan klasifikasi arsip yang cocok
          let klasifikasiArsip = 'KOR'; // default umum / korespondensi
          if (kodeJenis === 'BAST' || kodeJenis === 'SPK') klasifikasiArsip = 'PRY';
          else if (kodeJenis === 'SK') klasifikasiArsip = 'LGL';

          const arsipPayload = {
            jenisArsip: jenisNaskah,
            kodeKlasifikasi: klasifikasiArsip,
            nomorDokumen: nomorResmi,
            tanggalDokumen: tglStr,
            judulPerihal: `[TND] ${perihal}`,
            pihakTerkait: tujuanPenerima,
            idProyek: '-',
            lokasiFisik: `Arsip Naskah Dinas / Folder ${tahun}-${divisiPembuat}`,
            tingkatAkses: sifat === 'Rahasia' ? 'Rahasia' : (sifat === 'Penting' ? 'Terbatas' : 'Umum'),
            statusArsip: 'Aktif'
          };

          const arsipResp = ArsipService.tambahArsip(token, arsipPayload);
          if (arsipResp.success && arsipResp.data) {
            idArsipTerkait = arsipResp.data.idArsip;
          }
        } catch (errArsip) {
          console.warn('Gagal otomatis mengarsipkan naskah: ' + errArsip.message);
        }
      }

      // 4. Rekam Baris Naskah Dinas
      const newRow = [
        idNaskah,
        nomorResmi,
        jenisNaskah,
        kodeJenis.toUpperCase(),
        divisiPembuat.toUpperCase(),
        tglStr,
        perihal.trim(),
        tujuanPenerima.trim(),
        penandatangan ? penandatangan.trim() : 'Direksi PT. Hanoco Interior Arsitektur',
        sifat || 'Biasa',
        isiRingkas ? isiRingkas.trim() : '-',
        lampiran ? lampiran.trim() : '-',
        tembusan ? tembusan.trim() : '-',
        idArsipTerkait !== '-' ? 'Diarsipkan' : 'Diterbitkan',
        idArsipTerkait,
        user.username,
        nowStr
      ];

      sheet.appendRow(newRow);
      Util.catatLog(user.username, user.role, 'BUAT_TND', 'TND', nomorResmi, `Menerbitkan naskah dinas: ${nomorResmi} (${perihal})`, 'SUKSES');

      return Util.buildResponse(true, {
        idNaskah: idNaskah,
        nomorNaskah: nomorResmi,
        idArsip: idArsipTerkait
      }, `Naskah dinas nomor '${nomorResmi}' berhasil diterbitkan.`);
    } finally {
      lock.releaseLock();
    }
  },

  /**
   * Mengambil Semua Daftar Naskah Dinas dengan Filter
   * @param {string} token 
   * @param {Object} filter 
   */
  getDaftarNaskah(token, filter = {}) {
    Auth.validateSession(token);
    const sheet = this.getSheetTND();
    let items = Util.sheetToObjects(sheet);

    if (filter.kodeJenis) {
      items = items.filter(n => n.Kode_Jenis === filter.kodeJenis);
    }
    if (filter.divisi) {
      items = items.filter(n => n.Divisi_Pembuat === filter.divisi);
    }
    if (filter.keyword) {
      const q = filter.keyword.toLowerCase();
      items = items.filter(n => 
        (n.Nomor_Naskah + ' ' + n.Perihal + ' ' + n.Tujuan_Penerima + ' ' + n.Penandatangan).toLowerCase().includes(q)
      );
    }

    // Urutkan dari naskah terbaru
    items.sort((a, b) => new Date(b.Waktu_Dibuat || b.Tanggal_Naskah) - new Date(a.Waktu_Dibuat || a.Tanggal_Naskah));

    const cleanItems = items.map(n => {
      const copy = Object.assign({}, n);
      delete copy._rowIndex;
      return copy;
    });

    return Util.buildResponse(true, cleanItems, 'Daftar naskah dinas berhasil diambil.');
  },

  /**
   * Mengambil Detail Naskah Dinas untuk Pratinjau Kop Surat Resmi
   * @param {string} token 
   * @param {string} idNaskah 
   */
  getDetailNaskah(token, idNaskah) {
    Auth.validateSession(token);
    const sheet = this.getSheetTND();
    const items = Util.sheetToObjects(sheet);
    const item = items.find(n => n.ID_Naskah === idNaskah || n.Nomor_Naskah === idNaskah);

    if (!item) {
      return Util.buildResponse(false, null, 'Naskah dinas tidak ditemukan.');
    }

    delete item._rowIndex;
    return Util.buildResponse(true, item, 'Detail naskah berhasil diambil.');
  },

  /**
   * Menghubungkan naskah dinas yang sudah ada agar masuk ke database kearsipan HANARSIP
   * @param {string} token 
   * @param {string} idNaskah 
   */
  hubungkanKeKearsipan(token, idNaskah) {
    const user = Auth.cekHak(token, [CONFIG.ROLES.ADMIN, CONFIG.ROLES.PETUGAS]);
    const sheet = this.getSheetTND();
    const items = Util.sheetToObjects(sheet);
    const item = items.find(n => n.ID_Naskah === idNaskah);

    if (!item) {
      return Util.buildResponse(false, null, 'Naskah dinas tidak ditemukan.');
    }

    if (item.ID_Arsip_Terkait && item.ID_Arsip_Terkait !== '-') {
      return Util.buildResponse(false, null, `Naskah ini sudah diarsipkan dengan ID: ${item.ID_Arsip_Terkait}`);
    }

    let klasifikasi = 'KOR';
    if (item.Kode_Jenis === 'BAST' || item.Kode_Jenis === 'SPK') klasifikasi = 'PRY';
    else if (item.Kode_Jenis === 'SK') klasifikasi = 'LGL';

    const arsipPayload = {
      jenisArsip: item.Jenis_Naskah,
      kodeKlasifikasi: klasifikasi,
      nomorDokumen: item.Nomor_Naskah,
      tanggalDokumen: item.Tanggal_Naskah,
      judulPerihal: `[TND] ${item.Perihal}`,
      pihakTerkait: item.Tujuan_Penerima,
      idProyek: '-',
      lokasiFisik: `Arsip Naskah Dinas / Folder ${item.Divisi_Pembuat}`,
      tingkatAkses: item.Sifat === 'Rahasia' ? 'Rahasia' : (item.Sifat === 'Penting' ? 'Terbatas' : 'Umum'),
      statusArsip: 'Aktif'
    };

    const resArsip = ArsipService.tambahArsip(token, arsipPayload);
    if (!resArsip.success) {
      return resArsip;
    }

    const idArsip = resArsip.data.idArsip;
    const r = item._rowIndex;
    sheet.getRange(r, this.HEADERS.indexOf('ID_Arsip_Terkait') + 1).setValue(idArsip);
    sheet.getRange(r, this.HEADERS.indexOf('Status') + 1).setValue('Diarsipkan');

    Util.catatLog(user.username, user.role, 'ARSIPKAN_TND', 'TND', item.Nomor_Naskah, `Mengarsipkan naskah dinas ${item.Nomor_Naskah} ke arsip ${idArsip}`, 'SUKSES');

    return Util.buildResponse(true, { idArsip: idArsip }, `Naskah '${item.Nomor_Naskah}' berhasil diarsipkan ke HANARSIP dengan ID '${idArsip}'.`);
  }
};
