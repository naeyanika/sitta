// Login Functionality
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Find user in dataPengguna
    const user = dataPengguna.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Store user data in session storage
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Email atau password yang Anda masukkan salah!');
    }
    
    return false;
}

// Modal Functions
function showLupaPassword() {
    document.getElementById('lupaPasswordModal').style.display = 'block';
}

function closeLupaPassword() {
    document.getElementById('lupaPasswordModal').style.display = 'none';
}

function showDaftar() {
    document.getElementById('daftarModal').style.display = 'block';
}

function closeDaftar() {
    document.getElementById('daftarModal').style.display = 'none';
}

// Handle Lupa Password Form
if (document.getElementById('lupaPasswordForm')) {
    document.getElementById('lupaPasswordForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('emailReset').value;
        alert('Link reset password telah dikirim ke ' + email);
        closeLupaPassword();
        this.reset();
    });
}

// Handle Daftar Form
if (document.getElementById('daftarForm')) {
    document.getElementById('daftarForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const nama = document.getElementById('namaDaftar').value;
        const email = document.getElementById('emailDaftar').value;
        
        // Add new user to dataPengguna (in real app, this would go to backend)
        const newUser = {
            id: dataPengguna.length + 1,
            nama: nama,
            email: email,
            password: document.getElementById('passwordDaftar').value,
            role: 'UPBJJ-UT',
            lokasi: document.getElementById('lokasiDaftar').value
        };
        
        dataPengguna.push(newUser);
        
        alert('Pendaftaran berhasil! Silakan login dengan akun Anda.');
        closeDaftar();
        this.reset();
    });
}

// Close modal when clicking outside
window.onclick = function(event) {
    const lupaPasswordModal = document.getElementById('lupaPasswordModal');
    const daftarModal = document.getElementById('daftarModal');
    
    if (event.target == lupaPasswordModal) {
        lupaPasswordModal.style.display = 'none';
    }
    if (event.target == daftarModal) {
        daftarModal.style.display = 'none';
    }
};
