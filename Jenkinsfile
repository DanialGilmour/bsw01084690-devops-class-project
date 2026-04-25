pipeline { 
agent any 
stages { 
stage('Clone') { 
steps { 
git 'your-repo-url' 
} 
} 
stage('Build') { 
steps { 
} 
} 
sh 'npm install' 
stage('Test') { 
steps { 
sh 'echo "No tests implemented"' 
} 
} 
stage('Docker Build') { 
steps { 
} 
sh 'docker build -t student-app .' 
} 
stage('Run Container') { 
steps { 
sh 'docker run -d -p 3000:3000 student-app' 
} 
} 
} 
} 
