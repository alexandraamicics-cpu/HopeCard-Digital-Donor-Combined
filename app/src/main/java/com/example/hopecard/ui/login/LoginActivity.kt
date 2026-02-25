package com.example.hopecard.ui.login

import android.content.Intent
import android.content.res.ColorStateList
import android.graphics.Color
import android.os.Bundle
import android.util.Patterns
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.cardview.widget.CardView
import com.example.hopecard.R
import com.example.hopecard.ui.forgot.ForgotPasswordActivity
import com.example.hopecard.ui.profile.EditProfileActivity
import com.example.hopecard.ui.signup.SignUpActivity
import com.google.android.material.card.MaterialCardView

class LoginActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        val etEmail = findViewById<EditText>(R.id.etEmail)
        val etPassword = findViewById<EditText>(R.id.etPassword)

        val cardEmail = findViewById<MaterialCardView>(R.id.cardEmail)
        val cardPassword = findViewById<MaterialCardView>(R.id.cardPassword)

        val colorNormal = ColorStateList.valueOf(Color.parseColor("#E6D7D7"))
        val colorFocused = ColorStateList.valueOf(Color.parseColor("#B94F4F"))

        // Login "button" (CardView + TextView)
        val cardLogin = findViewById<CardView>(R.id.cardLogin)
        val btnLogin = findViewById<TextView>(R.id.btnLogin)

        val tvForgot = findViewById<TextView>(R.id.tvForgot)
        val tvSignUp = findViewById<TextView>(R.id.tvSignUp)

        // Tap card focuses EditText
        cardEmail.setOnClickListener { etEmail.requestFocus() }
        cardPassword.setOnClickListener { etPassword.requestFocus() }

        // Highlight border on focus using MaterialCardView strokeColor
        etEmail.setOnFocusChangeListener { _, hasFocus ->
            cardEmail.strokeColor = if (hasFocus) Color.parseColor("#B94F4F") else Color.parseColor("#E6D7D7")
        }
        etPassword.setOnFocusChangeListener { _, hasFocus ->
            cardPassword.strokeColor = if (hasFocus) Color.parseColor("#B94F4F") else Color.parseColor("#E6D7D7")
        }

        tvSignUp.setOnClickListener {
            startActivity(Intent(this, SignUpActivity::class.java))
        }

        tvForgot.setOnClickListener {
            startActivity(Intent(this, ForgotPasswordActivity::class.java))
        }

        val doLogin = {
            val email = etEmail.text.toString().trim()
            val pass = etPassword.text.toString()

            when {
                email.isEmpty() -> {
                    etEmail.error = "Email is required"
                    etEmail.requestFocus()
                }
                !Patterns.EMAIL_ADDRESS.matcher(email).matches() -> {
                    etEmail.error = "Enter a valid email"
                    etEmail.requestFocus()
                }
                pass.isEmpty() -> {
                    etPassword.error = "Password is required"
                    etPassword.requestFocus()
                }
                pass.length < 6 -> {
                    etPassword.error = "Password must be at least 6 characters"
                    etPassword.requestFocus()
                }
                else -> {
                    // TODO(BACKEND): Authenticate against your backend (API call) and obtain a session/token.
                    Toast.makeText(this, "Logged in successfully!", Toast.LENGTH_SHORT).show()
                    startActivity(Intent(this, EditProfileActivity::class.java))
                }
            }
        }

        cardLogin.setOnClickListener { doLogin() }
        btnLogin.setOnClickListener { doLogin() }
    }
}

