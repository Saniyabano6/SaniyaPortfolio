# 🚀 How to Upload Your Portfolio to GitHub Pages
## Complete Step-by-Step Guide — Saniya Bano Portfolio

---

## 📁 FILES YOU NEED
Make sure you have these 4 files ready:
```
portfolio/
├── index.html          ← Main page
├── style.css           ← All styling
├── script.js           ← Animations & interactivity
└── Saniya_Bano_Resume_Final.docx  ← Your resume (for download button)
```

---

## STEP 1 — Create a GitHub Account
1. Go to **https://github.com**
2. Click **Sign Up**
3. Use your email: shaikhsaniyabano6@gmail.com
4. Choose username: **Saniyabano6** (already exists — just sign in)

---

## STEP 2 — Create the Repository

1. Go to **https://github.com/new**
2. **Repository name:** Type exactly → `Saniyabano6.github.io`
   - ⚠️ Must match your username exactly (case-sensitive)
3. Set to **Public**
4. Check ✅ **Add a README file**
5. Click **Create repository**

---

## STEP 3 — Upload Your Files

### Option A — Upload via Browser (Easiest)
1. Open your new repo: `github.com/Saniyabano6/Saniyabano6.github.io`
2. Click **Add file → Upload files**
3. Drag and drop ALL 4 files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `Saniya_Bano_Resume_Final.docx`
4. Scroll down → Write commit message: `"Add portfolio website"`
5. Click **Commit changes**

### Option B — Using Git (Recommended for future)
```bash
# Install Git from https://git-scm.com first

# Open terminal/command prompt in your portfolio folder
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/Saniyabano6/Saniyabano6.github.io.git
git push -u origin main
```

---

## STEP 4 — Enable GitHub Pages

1. In your repo, click **Settings** (top menu)
2. Left sidebar → click **Pages**
3. Under **Source** → Select **Deploy from a branch**
4. Branch: select **main** → Folder: **/ (root)**
5. Click **Save**
6. Wait 2–3 minutes ⏳

---

## STEP 5 — Visit Your Live Portfolio 🎉

Your portfolio is now live at:
```
https://Saniyabano6.github.io
```

Share this link on:
- ✅ LinkedIn profile (Website section)
- ✅ Resume header
- ✅ GitHub bio
- ✅ GSSoC / internship applications
- ✅ Email signature

---

## 🔄 How to Update Your Portfolio Later

Whenever you want to make changes:
1. Edit the files on your computer
2. Go to your repo on GitHub
3. Click the file → Click pencil icon ✏️ to edit
   OR upload the new file (it will replace the old one)
4. Commit changes → Site updates in ~1 minute

---

## 💡 Pro Tips

- **Add your photo:** Save a photo as `photo.jpg` in the folder, then in `index.html` add `<img src="photo.jpg">` inside `.hero-visual`
- **Custom domain:** If you buy a domain (e.g., saniyabano.dev), you can connect it in Settings → Pages → Custom domain
- **Pin repo:** Go to your GitHub profile → click "Customize your profile" → Pin this repo
- **README:** Update your GitHub README at `github.com/Saniyabano6` with your portfolio link

---

## ✅ Checklist Before Going Live

- [ ] All 4 files uploaded (index.html, style.css, script.js, resume.docx)
- [ ] GitHub Pages enabled (Settings → Pages)
- [ ] Site loads at https://Saniyabano6.github.io
- [ ] All sections visible (Hero, About, Skills, Projects, Experience, Contact)
- [ ] Resume download button works
- [ ] GitHub project link works
- [ ] Tested on mobile

---

**Your live URL:** `https://Saniyabano6.github.io`
