import pytest
import os, sys

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app import application

@pytest.fixture
def client():
    with application.test_client() as client:
        yield client

def test_assert():
    test = True
    assert test == True
    

    
