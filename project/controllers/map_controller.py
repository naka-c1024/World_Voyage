import os
from flask import Flask, flash, redirect, render_template, request, session
from dotenv import load_dotenv

# .envファイルの内容を読み込見込む
load_dotenv()

def map():
    google_maps_api_key = os.getenv("GOOGLE_MAPS_API_KEY")
    return render_template("map.html", google_maps_api_key=google_maps_api_key)