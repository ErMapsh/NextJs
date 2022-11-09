# Hunting Coder

## Cmds for Create Next js Hunting Coder app
```
npm install --global yarn
yarn create next-app huntingcoder
```

## cmd for run next js app in dev
```
yarn dev
```

## External Css and Internal Css 
- Internal : we can create our css poperties in css file and access them by importing files.
- External :


## Dynamic routing in next js & Link Component
- if any wrong enpoint is hitted  then is shows 404 error directly we dont need to create a page

- is easy to make any another endpoint in next
- i need a blog, contact and about so i create in pages folder.
- we can go one enpoint to another endpoint using Link Component.
### Dynamic routing:
- in dynamic routing when endpoints localhost:3000/blogs/kuch-bhi hits
- when we can get slug from endpoint using useRouter from next
- we need to destructure useRouter.query and get slug


## Global and Local css
- when we want to use css as local  then we need to create module like Home.module.css and then we can use in specific component, but if we import/use module like Home.css as local then we got error. beacause file must module type
- directly we can import file in _app.js, we dont need use module things that we use in for local 


## Style in Jsx
- if we want component have his styles so we can also do that
-  we need use <style jsx> {` here will be our css poperties will come`} <style>
- if we want this style as global then we need to set in style as global 

    ```
    <>
    {/* that time we need to use react fragments to wrap multiple component like style and ours */}
    <style jsx global>
        {`
            .dummyColor{
                background: cyan;
            }
        `}
    </style>
    <div className='dummyColor'> i m Dummy for styled in JSX</div>
    </>
    ```
- if we want use this poperty in where Dummy is import, we can use
- just add class name in className